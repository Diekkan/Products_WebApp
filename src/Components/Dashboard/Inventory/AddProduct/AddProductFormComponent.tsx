import { FormEvent } from "react";

interface AddProductFormComponentProps{
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    cancelButtonRef: React.MutableRefObject<null>;
    setOpen(value: boolean): void;
}

const AddProductFormComponent = ({onSubmit, cancelButtonRef, setOpen}:AddProductFormComponentProps) => {


    return(
        <form className="w-96 flex flex-col" onSubmit={onSubmit}>
            <h1 className="text-center mb-6 font-medium text-lg"> Agregar nuevo producto </h1>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
            </label>
            <div className="mt-2 w-full">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Producto de ejemplo"
                  />
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <label htmlFor="price" className="w-40 block text-sm font-medium leading-6 text-gray-900">
                  Precio
              </label>
              <label htmlFor="quantity" className="w-40 block text-sm font-medium leading-6 text-gray-900 ">
                Cantidad
            </label>
            </div>
            <div className="mt-2 flex justify-between items-center">
            <div className="mt-2">
                <div className="flex w-40 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="number"
                    name="price"
                    min="0"
                    id="price"
                    required
                    autoComplete="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Precio"
                  />
                </div>
            </div>

            <div className="mt-2">
                <div className="flex w-40 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="0"
                    required
                    autoComplete="quantity"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Cantidad"
                  />
                </div>
            </div>
            </div>
            
            <div className=" mt-6 py-3 justify-between items-center w-full sm:flex sm:flex-row-reverse justify-start w-96">
                  <button
                    type="submit"
                    className="w-24 inline-flex justify-center rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 sm:ml-3"
                    // onClick={() => setOpen(false)}
                  >
                    Agregar
                  </button>
                  <button
                    className=" w-24 mt-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 "
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                </div>
        </form>
    )
}

export default AddProductFormComponent;