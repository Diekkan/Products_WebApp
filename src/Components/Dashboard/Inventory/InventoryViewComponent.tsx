import InventoryComponent from "./InventoryComponent";
import NavbarComponent from "../Navbar/NavbarComponent";

const InventoryViewComponent = () => {
    return(
        <div className="w-full flex flex-row">
            <NavbarComponent url="/dashboard"/>
            <InventoryComponent/>
        </div>
    )
}

export default InventoryViewComponent;