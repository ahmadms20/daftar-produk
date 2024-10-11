const Card = ({ image, title, price }) => {
    return (
        <div className="w-full h-full border p-4 rounded-lg shadow-md space-y-2">
            <div className="bg-gray-300" style={{ height: "288px" }}>
                <img src={image} className="h-72 w-full object-cover" />
            </div>
            <p className="text-base truncate">{title}</p>
            <p className="text-sm font-semibold">{price} USD</p>
        </div>
    )
};

export default Card;