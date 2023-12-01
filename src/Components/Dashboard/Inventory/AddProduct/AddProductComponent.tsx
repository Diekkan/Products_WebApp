import { FormEvent, Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AddProductFormComponent from './AddProductFormComponent';
import { Product } from '../../../../Models/Product';
import { ProductService } from '../../../../Services/ProductService';

interface AddProductComponentProps{
    open: boolean;
    setOpen(value: boolean): void;
    productList: Array<Product>;
    setProductList(list: Product[]): void;
}

const AddProductComponent = ({open, setOpen, productList, setProductList}: AddProductComponentProps) => {

  const _productService = new ProductService();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData: FormData;
    if(event.currentTarget instanceof HTMLFormElement){
      if(event.currentTarget.reportValidity()){
        formData = new FormData(event.currentTarget);
        let product = Object.fromEntries(formData);
        _productService.createProduct(product)
        .then(product => {
          let listProduct = productList.slice();
          listProduct.push(product);
          setProductList(listProduct);
        })
      }
    }
  }
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex sm:items-start items-center justify-center">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h2" className="font-semibold leading-6 text-gray-900 text-lg text-center">
                        Agregar nuevo producto
                      </Dialog.Title>
                      <div className="mt-8">
                        <AddProductFormComponent onSubmit={onSubmit} cancelButtonRef={cancelButtonRef} setOpen={setOpen}/>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddProductComponent;