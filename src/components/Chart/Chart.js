import ChartBar from "./ChartBar/ChartBar";

import classes from "./Chart.module.css";

const Chart = (props) => {
   return (
      <div className={classes.chart}>
         {props.dataPoints.map((dataPoint) => (
            <ChartBar
               label={props.dataPoint.label}
               maxValue={props.dataPoint.maxValue}
               value={props.dataPoint.value}
               key={props.dataPoint.label}
            />
         ))}
      </div>
   );
};

export default Chart;
