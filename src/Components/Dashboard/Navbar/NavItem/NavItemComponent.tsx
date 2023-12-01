interface NavItemComponentProps{
    text: string;
    clickFun: Function;
    selected?: boolean;
}

const NavItemComponent = ({text, clickFun, selected = false}: NavItemComponentProps) => {
    return(
        <div className="w-full h-12 text-white flex flex-row justify-center items-center ">
            <div onClick={() => clickFun(text)}
            className={ selected ? "h-10 flex items-center pl-4 pr-4 rounded-md cursor-pointer w-5/6 bg-sky-950" :
                             "h-10 flex items-center pl-4 pr-4 rounded-md cursor-pointer w-5/6 hover:bg-sky-950"}>
                {text}
            </div>
        </div>
    )
}

export default NavItemComponent;