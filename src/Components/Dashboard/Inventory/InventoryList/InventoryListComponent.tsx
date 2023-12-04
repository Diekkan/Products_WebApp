import { useEffect, useRef, useState } from "react";
import { Product } from "../../../../Models/Product";
import InventoryItemComponent from "./InventoryItem/InventoryItemComponent";
import { ProductService } from "../../../../Services/ProductService";
import DialogComponent from "../../../Common/Dialog/DialogComponent";
import LoadingSpinnerComponent from "../../../Common/LoadingSpinner/LoadingSpinnerComponent";

interface InventoryListComponentProps{
    productList: Array<Product>;
    setProductList(list: Product[]): void;
}

const InventoryListComponent = ({productList, setProductList}: InventoryListComponentProps) => {

    const _productService: ProductService = new ProductService();
    const [detail, setDetail] = useState(false);
    const [item, setItem] = useState<Product>();
    const [loading, setLoading] = useState(false);

    const cancelButtonRef = useRef(null);


    useEffect(() => {
        _productService.getAllProducts()
        .then(data => {
            setProductList(data);
        });
    }, []);

    useEffect(() => {
        console.log(item)
    }, [item])

    const onClick = (productId: number) =>{
        setDetail(true);
        setLoading(true);
        _productService.getProductById(productId)
            .then(product => {
                setItem(product);
                setTimeout(() => {
                    setLoading(false);
                    setDetail(false);
                }, 2000)
            })
    }

    return(
        <> 
            <DialogComponent open={detail} setOpen={setDetail} cancelButtonRef={cancelButtonRef}>
                {
                    !loading ?
                    <>
                    </> :
                    <LoadingSpinnerComponent/>
                }
            </DialogComponent>
            <div className="w-full">
            <div className="w-full mt-5 h-10 flex-row flex justify-center items-center text-slate-400">
                <div className="w-1/12 flex flex-row justify-center items-center">
                    <input type="checkbox">

                    </input>
                </div>
                <div className="w-3/12 flex flex-row justify-start items-center">
                    <p> ID</p>
                </div>
                <div className="w-4/12  flex flex-row justify-start items-center">
                    <p> Nombre</p>
                </div>
                <div className="w-2/12  flex flex-row justify-start items-center">
                    <p> Precio</p>
                </div>
                <div className="w-2/12  flex flex-row justify-start items-center">
                    <p> Cantidad</p>
                </div>
            </div>
            <div className="w-full h-px bg-slate-200"></div>
            {
                productList.map((item, index) => (
                    <>
                        <InventoryItemComponent key={index} onClick={onClick} {...item}/>
                        <div className="w-full h-px bg-slate-50"></div>
                    </>
                    
                ))
            }
        </div>
        </>
    )
}

export default InventoryListComponent;