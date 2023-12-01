import InputLabelComponent from "./InputLabel/InputLabelComponent";

interface InputComponentProps {
    id: string;
    name: string;
    type?: string;
    labelText: string,
    inlineUrl?: string,
    sideLabelText?: string,
    sideLabelUrl?: string,
    required?: boolean;
    setData?: Function | null
}

const InputComponent = ({ id, name, type = "text", labelText,
    sideLabelText, sideLabelUrl, required = true, setData}: InputComponentProps) => {

    return (
        <>
            <div>
                {
                    sideLabelText ?
                        <InputLabelComponent {...{ name: name, text: labelText, sideText: sideLabelText, sideUrl: sideLabelUrl}} />
                        :
                        <InputLabelComponent {...{ name: name, text: labelText }} />
                }
                <div className="mt-2">
                    <input
                        id={id}
                        name={name}
                        type={type}
                        onChange={(event) => setData(event.target.value)}
                        autoComplete={name}
                        {...(required && { required: true })}
                        className="mt-1 block w-full rounded-md border-sky-300 shadow-sm focus:border-sky-950 focus:ring focus:sky-950 focus:ring-opacity-50"
                    />
                </div>
            </div>
        </>
    )
}

export default InputComponent;