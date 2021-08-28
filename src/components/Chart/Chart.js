import ChartBar from "./ChartBar/ChartBar";

import classes from "./Chart.module.css";

const Chart = (props) => {
   const values = props.dataPoints.map((dataPoint) => dataPoint.value);
   const maxValue = Math.max(...values);

   return (
      <div className={classes.chart}>
         {props.dataPoints.map((dataPoint) => (
            <ChartBar
               label={dataPoint.label}
               maxValue={maxValue}
               value={dataPoint.value}
               key={dataPoint.label}
            />
         ))}
      </div>
   );
};

export default Chart;
