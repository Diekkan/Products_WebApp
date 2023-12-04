import NavbarComponent from "../Navbar/NavbarComponent"
import SalesComponent from "./SalesComponent"

const SalesViewComponent = () => {
    return (
        <div className="w-full flex flex-row">
            <NavbarComponent url="/sales"/>
            <SalesComponent />
        </div>
    )
}

export default SalesViewComponent;