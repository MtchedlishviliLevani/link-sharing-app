interface ObjProps {
    inputProps: InputProps
}
interface InputProps {
    type: string,
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string,
    icon: string,

}
function Input({ inputProps }: ObjProps) {
    const { type, label, value, onChange, placeholder, icon, } = inputProps;
    return (
        <>
            <label htmlFor="" className="form-label">{label}</label>
            <div className="form-input-container">
                <img src={icon} className="form-input-icon" alt="" />
                <input type={type} placeholder={placeholder} className="form-input" value={value} onChange={onChange} /></div>
        </>
    )
}

export default Input
