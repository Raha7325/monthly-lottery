import CircleItem from "./CircleItem";

const SeventeenthLottery = () => {
  const lotteryData = [
    { number: "۳", label: "۱۴۰۴-۰۵-۰۵", isDisabled: true },
    { number: "۲", label: "۱۴۰۴-۰۸-۰۵", isDisabled: true },
    { number: "۱", label: "۱۴۰۳-۱۲-۰۵", isDisabled: true },
    { number: "۶", label: "۱۴۰۴-۰۱-۰۵", isDisabled: true },
    { number: "۵", label: "۱۴۰۴-۰۳-۰۵", isDisabled: true },
    { number: "۴", label: "۱۴۰۴-۰۴-۰۵", isDisabled: true },
    { number: "۹", label: "۱۴۰۴-۰۶-۰۵", isDisabled: true },
    { number: "۸", label: "۱۴۰۴-۰۲-۰۵", isDisabled: true },
    { number: "۷", label: "۱۴۰۴-۰۸-۰۵", isDisabled: true },
    { number: "۱۰",label: "۱۴۰۴-۰۷-۰۵", isDisabled: true, isCentered: true },
  ];
  return (
    <div className="flex-col mt-[40px] md:mt-0 shadow-md p-4">
      <div className="mb-10 px-3 py-1 rounded-md bg-gray-200 text-center text-gray-400 font-bold">
        صندوق ۵ ام <span className="text-xs">(شروع از ۰۵-۱۲-۱۴۰۳)</span>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5 place-items-center">
        {lotteryData.map((item, index) => (
          <div
            key={index}
            className={`${
              item.isCentered ? "col-span-3 flex justify-center" : ""
            }`}
          >
            <CircleItem
              number={item.number}
              label={item.label}
              isDisabled={item.isDisabled}
              color="cyan"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SeventeenthLottery;
