import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const expenseValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...expenseValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
