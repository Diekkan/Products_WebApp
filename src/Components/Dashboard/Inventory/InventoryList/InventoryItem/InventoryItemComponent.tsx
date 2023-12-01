import { Product } from "../../../../../Models/Product";

const InventoryItemComponent = ({ id, name, price, quantity }: Product) => {

    return (
        <div className="w-full h-14 flex-row flex justify-around items-center text-black ">
            <div className="w-1/12 flex flex-row justify-center items-center">
                <input type="checkbox">

                </input>
            </div>
            <div className="w-3/12 flex flex-row justify-start items-center">
                <p> {id.toString()}</p>

            </div>
            <div className="w-4/12  flex flex-row justify-start items-center">
                <p> {name}</p>
            </div>
            <div className="w-2/12  flex flex-row justify-start items-center">
                <p> {price.toString()}</p>

            </div>
            <div className="w-2/12  flex flex-row justify-start items-center">
                <p> {quantity.toString()}</p>
            </div>

        </div>
        
    )
}

export default InventoryItemComponent;