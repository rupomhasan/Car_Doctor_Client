import React, { PureComponent, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const ProvidedService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { service: "Engine Repair", count: 20 },
    { service: "Brake Service", count: 15 },
    { service: "Transmission Repair", count: 10 },
    { service: "Suspension Work", count: 8 },
    { service: "Oil Changes", count: 25 },
    { service: "Other Services", count: 22 },
  ];
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#ff3811",
    "#b8e5df",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  return (
    <div className="bg-white shadow-xl my-20 rounded-xl py-10">
      <p className="text-2xl font-bold ml-4 text-center">Provided Service</p>
      <div className=" md:flex items-center px-5 justify-center ">
        <div>
          {data.map((singleData, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <p className="mt-1">{idx + 1}.</p>
              <div className="flex  items-center text-lg gap-3 ">
                <p className=" font-semibold">{singleData?.service}</p>:
                <p>{singleData.count}%</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="count"
       
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default ProvidedService;
