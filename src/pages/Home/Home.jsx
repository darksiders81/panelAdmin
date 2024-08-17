import Chart from "../../components/Chart/Chart";
import ChartMonth from "../../components/ChartMonth/ChartMonth";

export default function Home() {
  return (
    <div className="container absolute left-0 ">
      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2">
        محصولات فروش
      </h1>
      <Chart />
      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2">
        درصد صود ماهیانه
      </h1>
      <ChartMonth />
    </div>
  );
}
