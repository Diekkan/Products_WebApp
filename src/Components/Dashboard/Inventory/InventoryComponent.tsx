import { useState } from "react";
import InventoryListComponent from "./InventoryList/InventoryListComponent";
import AddProductComponent from "./AddProduct/AddProductComponent";
import { Product } from "../../../Models/Product";

const InventoryComponent = () => {

    const [addProduct, setAddProduct] = useState(false);
    const [productList, setProductList] = useState<Array<Product>>([]);

    return (
        <>
            <AddProductComponent open={addProduct} setOpen={setAddProduct} 
                productList={productList} setProductList={setProductList}/>
            <div className="w-full h-screen flex bg-gray-200 flex-col self-center items-center">
                <div className="h-16 bg-white w-full flex flex-row justify-center items-center">
                    <h1 className="w-11/12 text-size text-2xl font-semibold text-left">
                        Lista de productos
                    </h1>
                </div>
                <div className="w-11/12 h-4/5 mt-6 flex flex-col items-center bg-white rounded-xl  overflow-y-scroll">
                    <div className="h-10 mt-4 mb-4 flex flex-row justify-between bg-white rounded-xl w-full pl-5 pr-5">
                        <button 
                        className="flex w-32 justify-center rounded-md bg-sky-950 px-3 py-1.5 text-sm font-semibold leading-6
                        text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:bg-sky-950"
                        onClick={() => setAddProduct(true)}
                        >
                            Añadir nuevo
                        </button>
                        <div className="flex flex-row justify-around w-80">
                            <input
                                placeholder="Buscar producto"
                                className=" w-8/12 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 
                                focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-100"
                            >
                            </input>
                            <button 
                            className=" flex justify-center rounded-md border-sky-950 border-2 bg-white px-3 py-1.5
                            text-sm font-semibold leading-6text-sky-950 shadow-sm hover:bg-slate-500 focus-visible:outline
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-sky-950 w-3/12"
                            >
                                Filtrar
                            </button>
                        </div>
                    </div>
                    <InventoryListComponent productList={productList} setProductList={setProductList}/>
                </div>
            </div>
        </>

    )
}

export default InventoryComponent;