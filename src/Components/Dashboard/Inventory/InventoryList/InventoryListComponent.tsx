import { useEffect, useState } from "react";
import { Product } from "../../../../Models/Product";
import InventoryItemComponent from "./InventoryItem/InventoryItemComponent";
import { ProductService } from "../../../../Services/ProductService";

interface InventoryListComponentProps{
    productList: Array<Product>;
    setProductList(list: Product[]): void;
}

const InventoryListComponent = ({productList, setProductList}: InventoryListComponentProps) => {

    const _productService: ProductService = new ProductService();

    useEffect(() => {
        _productService.getAllProducts()
        .then(data => {
            setProductList(data);
        });
    }, []);

    return(
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
                        <InventoryItemComponent key={index} {...item}/>
                        <div className="w-full h-px bg-slate-50"></div>
                    </>
                    
                ))
            }
        </div>
    )
}

export default InventoryListComponent;