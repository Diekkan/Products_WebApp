interface ButtonComponentProps{
    type?: "submit" | "button" | "reset" ,
    text?: string,
    clickFun: Function,
}

const ButtonComponent = ({type = "submit", text, clickFun}: ButtonComponentProps) => {
    return(
        <button className="flex w-full justify-center rounded-md bg-sky-950 px-3 py-1.5 text-sm font-semibold leading-6
         text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-sky-900" type={type} onClick={() => {clickFun()}}>{text}</button>
    )
}

export default ButtonComponent;