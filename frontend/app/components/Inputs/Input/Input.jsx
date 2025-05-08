import "../Inputs.css";

function Input({ label, name, type = "text", placeholder = "", className = "", ...props }) {
    return (
        <div className="input-container">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;