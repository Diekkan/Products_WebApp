interface InputLabelComponentProps {
    name: string,
    text: string,
    sideUrl?: string,
    sideText?: string,
}

const InputLabelComponent = ({ name, text, sideUrl, sideText}: InputLabelComponentProps) => {
    return (
        <div className="flex items-center justify-between">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {text}
            </label>
            {
                sideUrl ? 
                <div className="text-sm">
                    <a href={sideUrl} className="font-semibold text-sky-950 hover:text-sky-800">{sideText}</a>
                </div>
                : 
                <>
                </>
            }
        </div>
    )
}

export default InputLabelComponent;