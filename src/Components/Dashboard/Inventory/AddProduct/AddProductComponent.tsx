import { FormEvent, Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AddProductFormComponent from './AddProductFormComponent';
import { Product } from '../../../../Models/Product';
import { ProductService } from '../../../../Services/ProductService';
import LoadingSpinnerComponent from '../../../Common/LoadingSpinner/LoadingSpinnerComponent';
import DialogComponent from '../../../Common/Dialog/DialogComponent';
import InfoComponent, { InfoComponentProps } from '../../../Common/Info/InfoComponent';

interface AddProductComponentProps {
  open: boolean;
  setOpen(value: boolean): void;
  productList: Array<Product>;
  setProductList(list: Product[]): void;
}



const AddProductComponent = ({ open, setOpen, productList, setProductList }: AddProductComponentProps) => {

  const _productService = new ProductService();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<InfoComponentProps | null>(null);
  const cancelButtonRef = useRef(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    let formData: FormData;
    if (event.currentTarget instanceof HTMLFormElement) {
      if (event.currentTarget.reportValidity()) {
        formData = new FormData(event.currentTarget);
        let product = Object.fromEntries(formData);
        _productService.createProduct(product)
          .then(product => {
            let listProduct = productList.slice();
            listProduct.push(product);
            setProductList(listProduct);
            setTimeout(() => {
              setLoading(false);
              setInfo({ type: 'success', message: "Producto guardado correctamente" })
              setOpen(false);
            }, 2000)
            setTimeout(() => {
              setInfo(null);
            }, 4000)
          })
          .catch(error => {
            setInfo({ type: 'error', message: `Error: ${error}` })
            setTimeout(() => {
              setInfo(null);
            }, 2000)
          })

      }
    }
  }

  return (
    <>
      {
        info !== null ?
          <InfoComponent {...info} /> :
          <></>
      }
      <DialogComponent open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef}>
        {
          !loading ?
            <AddProductFormComponent cancelButtonRef={cancelButtonRef} onSubmit={onSubmit} setOpen={setOpen} />
            :
            <LoadingSpinnerComponent />
        }
      </DialogComponent>

    </>

  )
}

export default AddProductComponent;