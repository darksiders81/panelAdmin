import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { datas } from "../../data";
export default function Chart() {
  return (
    <BarChart className="mt-20" width={1250} height={300} data={datas}>
      <XAxis dataKey="name" stroke="#1f2937"  />
      {/* <YAxis /> */}
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />

      <Bar dataKey="price" fill="#3f6212" barSize={15} />
    </BarChart>
  );
}
