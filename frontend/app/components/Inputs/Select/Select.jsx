import "../Inputs.css";

function Select({ label, name, className = "", options = [], ...props }) {
    return (
        <div className="select-container">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                className={className}
                {...props}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;