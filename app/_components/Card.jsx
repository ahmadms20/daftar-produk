const Card = ({ image, title, price, category }) => {
    return (
        <div className="w-full h-full border p-4 rounded-lg shadow-md space-y-2">
            <div className="bg-gray-300" style={{ height: "288px" }}>
                <img src={image} className="h-72 w-full object-cover" />
            </div>
            <p className="text-base truncate">{title}</p>
            <div className="flex justify-between items-center">
                <p className="text-sm font-semibold">{price} USD</p>
                <span className="text-xs text-white bg-gray-500 rounded-full px-3 py-1">{category}</span>
            </div>
        </div>
    )
};

export default Card;