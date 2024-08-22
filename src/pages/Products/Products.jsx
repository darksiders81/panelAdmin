import { datas } from "../../data";
import Chart from "../../components/Chart/Chart";
import ProductInfoBox from "../../components/ProductInfoBox/ProductInfoBox";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="container">
      <h1 className="text-center items-center px-2 text-2xl mt-8 text-blue-700 bg-gray-200 py-2 ">
        نمودار فروش
      </h1>
      <Chart dataChart={datas} />
      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2">
        محصولات سایت
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-8 mt-8">
        {datas.map((data) => (
          <>
            <ProductInfoBox {...data}/>
          </>
        ))}
        
      </div>
      <div className="text-center mb-8">
        <Link to="/addproduct" className="w-1/2 bg-orange-500 p-4 text-xl rounded-full hover:bg-violet-700 hover:text-white transition-all">
        
          اضافه کردن محصول جدید
        </Link>
      </div>
    </div>
  );
}
