import InventoryComponent from "./Inventory/InventoryComponent";
import NavbarComponent from "./Navbar/NavbarComponent";

const DashboardComponent = () => {
    return(
        <div className="w-full flex flex-row">
            <NavbarComponent/>
            <InventoryComponent/>
        </div>
    )
}

export default DashboardComponent;