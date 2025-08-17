import CircleItem from './CircleItem';

const SeventeenthLottery = () => {
    const lotteryData = [
        { number: '۳', label: '.' },
        { number: '۲', label: '.'},
        { number: '۱', label: '۱۴۰۴-۰۲-۲۵', isDisabled: true },
        { number: '۶', label: '.' },
        { number: '۵', label: '.' },
        { number: '۴', label: '.' },
        { number: '۹', label: '۱۴۰۴-۰۴-۲۵', isDisabled: true  },
        { number: '۸', label: '.' },
        { number: '۷', label: '۱۴۰۴-۰۳-۲۵', isDisabled: true },
        { number: '۱۰', label: '۱۴۰۴-۰۵-۲۵', isDisabled: true, isCentered: true },
    ]
    return (
        <div className="flex-col mt-[40px] md:mt-0 shadow-md p-4">
            <div className="mb-10 px-3 py-1 rounded-md bg-rose-200 text-center text-rose-400 font-bold">
                صندوق ۲۵ ام <span className="text-xs">(شروع از  ۲۵-۰۲-۱۴۰۴)</span>
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
                            color="rose"
                        />
                    </div>

                ))}
            </div>
        </div>
    );
}
export default SeventeenthLottery;
