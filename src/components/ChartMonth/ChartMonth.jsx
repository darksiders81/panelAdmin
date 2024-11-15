import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";
import { monthDatas } from "../../data";
import { useState } from "react";
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    sales,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        className="text-center text-xl  "
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`% ${sales}`}</text>
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${percent.toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

export default function ChartMonth() {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#2ecc71",
    "#8e44ad",
    "#c0392b",
    "#d35400",
    "#16a085",
    "#f1c40f",
    "#ecf0f1",
    "#2980b9",
  ];
  const [month, setMonthe] = useState(0);
  const moaseIneterHandler = (_, index) => {
    setMonthe(index);
  };
  return (
    <>
      <PieChart className="mr-16" width={800} height={400}>
        <Pie
          data={monthDatas}
          cx="30%"
          activeIndex={month}
          activeShape={renderActiveShape}
          cy="50%"
          innerRadius={100}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="sales"
          onMouseEnter={moaseIneterHandler}
        >
          {monthDatas.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
}

{
  /* <Pie
  data={monthDatas}
  cx="50%"
  cy="50%"
  labelLine={false}
  label={renderCustomizedLabel}
  outerRadius={250}
  fill="#8884d8"
  onMouseEnter={mouseHandler}
  dataKey="sales"
>
  {COLORS.map((entry, index) => (
    <Cell
      key={`cell-${index}`}
      fill={COLORS[index % COLORS.length]}
    />
  ))}
</Pie> */
}
