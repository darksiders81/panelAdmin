import { datas } from "../../data";
import Chart from "../../components/Chart/Chart";
import ProductInfoBox from "../../components/ProductInfoBox/ProductInfoBox";

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
      <div className="grid grid-cols-2 gap-4 mb-32 mt-8">
        {datas.map((data) => (
          <>
            <ProductInfoBox />
          </>
        ))}
        <ProductInfoBox />
        <ProductInfoBox />
        <ProductInfoBox />
        <ProductInfoBox />
        <ProductInfoBox />
        <ProductInfoBox />
        <ProductInfoBox /><ProductInfoBox />
        <ProductInfoBox />
        <ProductInfoBox />
      </div>
    </div>
  );
}
