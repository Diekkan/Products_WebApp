import { useState } from "react";
import NavItemComponent from "./NavItem/NavItemComponent";

const NavbarComponent = () => {

    const [navItem, setNavItem] = useState("Inventario");

    const navItems = [
        { text: "Inventario", clickFun: setNavItem },
        { text: "Ventas", clickFun: setNavItem },
        { text: "Estadísticas", clickFun: setNavItem },
    ]

    const navItemsDown = [
        { text: "Configuración", clickFun: setNavItem },
        { text: "Usuario", clickFun: setNavItem },
    ]

    return (
        <div className="w-72 bg-gray-900 h-screen justify-between flex flex-col">
            <div className="mt-16">
                {
                    navItems.map((item, index) => (
                        item.text === navItem ?
                            <NavItemComponent key={index} text={item.text} clickFun={item.clickFun} selected={true} /> :
                            <NavItemComponent key={index} {...item}></NavItemComponent>
                    ))
                }
            </div>
            <div className="mb-16">
                {
                    navItemsDown.map((item, index) => (
                        item.text === navItem ?
                            <NavItemComponent key={index} text={item.text} clickFun={item.clickFun} selected={true} /> :
                            <NavItemComponent key={index} {...item}></NavItemComponent>
                    ))
                }
            </div>
        </div>
    )
}

export default NavbarComponent;