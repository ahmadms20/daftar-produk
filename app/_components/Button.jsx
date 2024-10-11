const Button = ({ children, onClick, disabled }) => {
    return (
        <button 
            className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

export default Button;