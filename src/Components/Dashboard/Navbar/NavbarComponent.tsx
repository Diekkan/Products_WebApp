import { useState } from "react";
import NavItemComponent from "./NavItem/NavItemComponent";

interface NavbarComponentProps{
    url: string
}

const NavbarComponent = ({url}: NavbarComponentProps) => {

    const [navItem, setNavItem] = useState(url);

    const navItems = [
        { text: "Inventario", clickFun: setNavItem, url: '/dashboard'},
        { text: "Ventas", clickFun: setNavItem, url: '/sales' },
        { text: "Estadísticas", clickFun: setNavItem, url: '/analytics' },
    ]

    const navItemsDown = [
        { text: "Control de usuarios", clickFun: setNavItem, url: '/user-manager'},
        { text: "Configuración", clickFun: setNavItem, url: '/settings'},
        { text: "Usuario", clickFun: setNavItem, url: '/user'},
    ]

    return (
        <div className="w-72 bg-gray-900 h-screen justify-between flex flex-col">
            <div className="mt-16">
                {
                    navItems.map((item, index) => (
                        item.url === navItem ?
                            <NavItemComponent key={index} text={item.text} clickFun={item.clickFun} url={item.url} selected={true} /> :
                            <NavItemComponent key={index} {...item}></NavItemComponent>
                    ))
                }
            </div>
            <div className="mb-16">
                {
                    navItemsDown.map((item, index) => (
                        item.url === navItem ?
                            <NavItemComponent key={index} text={item.text} clickFun={item.clickFun} url={item.url} selected={true} /> :
                            <NavItemComponent key={index} {...item}></NavItemComponent>
                    ))
                }
            </div>
        </div>
    )
}

export default NavbarComponent;