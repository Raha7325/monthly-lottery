
const CircleItem = ({ number, label, isDisabled, color }) => {
    return (
        <div className="flex flex-col items-center">
            <div
                className={`w-[50px] h-[50px] rounded-full shadow-md flex items-center justify-center ${isDisabled
                    ? 'bg-gray-200 text-gray-100 shadow-gray-200'
                    : `bg-${color}-200 text-${color}-400 shadow-${color}-400`
                    }`}
            >
                {number}
            </div>
            <h5 className={`text-xs pt-2 ${isDisabled ? 'text-gray-200' : 'text-transparent'}`}>
                {label}
            </h5>
        </div>
    )
}

export default CircleItem;