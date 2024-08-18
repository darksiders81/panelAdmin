import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

export default function AnalysisBox(props) {
  return (
    <div className="h-36 shadow-lg rounded-lg px-3">
      <h1 className="text-center text-lg pt-5">{props.name}</h1>
      <div className="flex justify-between items-center mt-8 text-lg font-bold">
        <p>{props.sales} تومان</p>
        <p>{props.ProfitPercentage}%</p>
        <p>
          {props.ProfitPercentage >= 20 ? (
            <IoMdArrowRoundUp className="text-xl text-green-700" />
          ) : (
            <IoMdArrowRoundDown className="text-xl text-red-700" />
          )}
        </p>
      </div>
    </div>
  );
}
