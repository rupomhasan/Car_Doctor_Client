import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import ProvidedService from "./ProvidedService";

const Revenue = () => {
  const data = [
    { month: "Sep", offline: 5000, online: 8000 },
    { month: "Oct", offline: 5500, online: 8200 },
    { month: "Nov", offline: 6000, online: 8500 },
    { month: "Dec", offline: 6200, online: 8700 },
    { month: "Jan", offline: 5800, online: 8600 },
    { month: "Feb", offline: 5700, online: 8400 },
  ];

  return (
    <div className="bg-white shadow-xl my-10 rounded-2xl py-5 overflow-auto">
      <p className="text-2xl font-bold my-4 ml-5 text-center">Total Revenue</p>
      <div className="flex justify-center w-full max-w-screen-lg mx-auto border-r-2 ">
        <BarChart
          width={650}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            stroke="#ccc"
            strokeWidth={1}
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="month"
            interval={0}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            type="number"
            domain={[0, 10000]}
            // tickFormatter={(value) => value.toLocaleString()}
            tickCount={11}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="offline"
            fill="#ff8089"
            padding={{ left: 50, right: 50 }}
          />
          <Bar dataKey="online" fill="#ffbc58" />
        </BarChart>
      </div>
    </div>
  );
};

export default Revenue;
