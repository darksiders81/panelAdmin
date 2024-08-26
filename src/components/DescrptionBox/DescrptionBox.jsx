import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DescrptionBox(props) {
  return (
    <Link to={`/products/${props.id}`}>
      <div className=" h-32 bg-stone-200 rounded-lg shadow-lg">
        <h1 className="text-center text-xl mt-2 text-slate-800">{props.name}</h1>
        <div className="flex justify-between px-5 mt-10 text-lg">
          <p>
            {props.persent > 10 ? (
              <FaArrowUp className="text-green-900" />
            ) : (
              <FaArrowDown className="text-red-900" />
            )}
          </p>
          <p className="text-blue-600">{props.price}</p>
          <p className={props.persent > 10 ? "text-green-900" : "text-red-900"}>
            {props.persent}%
          </p>
        </div>
      </div>
    </Link>
  );
}
