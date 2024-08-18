import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Chart(props) {
  return (
    <BarChart className="mt-10 px-10" width={1250} height={300} data={props.dataChart}>
      <XAxis dataKey="name" stroke="#1f2937" />
      {/* <YAxis /> */}
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />

      <Bar dataKey="price" fill="#3f6212" barSize={15} />
    </BarChart>
  );
}
