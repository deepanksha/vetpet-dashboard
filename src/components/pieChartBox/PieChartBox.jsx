import { Cell, Tooltip, Pie, PieChart, ResponsiveContainer } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Surgery", value: 400, color: "#0088fe" },
  { name: "Exams", value: 300, color: "#00c49f" },
  { name: "Xray", value: 300, color: "#ffbb28" },
  { name: "Vaccine", value: 200, color: "#ff8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>By Procedure Category</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                className="dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name} </span>
            </div>
            <span>{item.value} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
