import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";
const data = [
  {
    name: "Sun",
    full: 4000,
    half: 2400,
    checkup: 2400,
  },
  {
    name: "Mon",
    full: 3000,
    half: 1932,
    checkup: 2210,
  },
  {
    name: "Tue",
    full: 2000,
    half: 9832,
    checkup: 2910,
  },
  {
    name: "Wed",
    full: 1700,
    half: 3932,
    checkup: 2290,
  },
  {
    name: "Thu",
    full: 1800,
    half: 4832,
    checkup: 2510,
  },
  {
    name: "Fri",
    full: 2390,
    half: 2832,
    checkup: 2480,
  },
  {
    name: "Sat",
    full: 3940,
    half: 4232,
    checkup: 2110,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Service Allocation</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="full"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="half"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="checkup"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
