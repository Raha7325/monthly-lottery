import CircleItem from './CircleItem';

const SeventeenthLottery = () => {
    const lotteryData = [
        { number: '۳', label: '.' },
        { number: '۲', label: "۱۴۰۴-۰۷-۱۰", isDisabled: true},
        { number: '۱'},
        { number: '۶', label: "۱۴۰۴-۰۶-۱۰", isDisabled: true },
        { number: '۵', label: '.' },
        { number: '۴', label: '.' },
        { number: '۹', label: "۱۴۰۴-۰۸-۱۰", isDisabled: true  },
        { number: '۸', label: '.' },
        { number: '۷', label: "۱۴۰۴-۰۹-۱۰", isDisabled: true  },
        { number: '۱۰', label: '۱۴۰۴-۱۰-۱۰', isDisabled: true, isCentered: true },
    ]
    return (
        <div className="flex-col mt-[40px] md:mt-0 shadow-md p-4">
            <div className="mb-10 px-3 py-1 rounded-md bg-orange-200 text-center text-orange-400 font-bold">
                صندوق ۱۰ ام <span className="text-xs">(شروع از  ۱۰-۰۵-۱۴۰۴)</span>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-5 place-items-center">
                {lotteryData.map((item, index) => (
                    <div key={index}
                        className={`${item.isCentered ? 'col-span-3 flex justify-center' : ''}`}
                    >
                        <CircleItem
                            number={item.number}
                            label={item.label}
                            isDisabled={item.isDisabled}
                            color="orange"
                        />
                    </div>

                ))}
            </div>
        </div>
    );
}
export default SeventeenthLottery;
