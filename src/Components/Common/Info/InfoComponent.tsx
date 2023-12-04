import LoadingSpinnerComponent from "../LoadingSpinner/LoadingSpinnerComponent";

export interface InfoComponentProps {
    type: string,
    message: string
}

const InfoComponent = ({ type, message }: InfoComponentProps) => {

    let content = <></>;

    if (type === "error") {
        content = <></>;
    }
    if (type === "success") {
        content =
            <>
                <div id="toast-success"
                    className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow "
                    role="alert">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">{message}</div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            </>

    }
    if (type === "loading") {
        content =
            <>
                <div className="bg-blue-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                    <LoadingSpinnerComponent />
                    <span className="text-blue-800 ml-3">{message}</span>
                </div>
            </>
    }

    return (
        <div className="absolute bottom-10 left-1/2">
            {content}
        </div>
    )

}
export default InfoComponent;