function ErrorMessage({ message }) {
    return (
        <div className="error-message flex flex-justify-content--center flex-align-items--center gap-small">
            <span className="material-symbols-outlined">warning</span>
            <h2 className="title">{message}</h2>
        </div>
    );
};

export default ErrorMessage;