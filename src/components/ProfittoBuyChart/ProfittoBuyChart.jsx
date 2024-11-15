import { profitToby } from "../../data";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function ProfittoBuyChart() {
  
  return (
    
    <BarChart
      width={1200}
      height={500}
      data={profitToby}
      margin={{
        top: 20,
        right: 30,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name"  />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" stackId="a" fill="#8884d8" />
      <Bar dataKey="Profit" stackId="b" fill="#82ca9d" />
    </BarChart>
 
  );
}
