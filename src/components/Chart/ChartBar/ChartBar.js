import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
   let percentage = "0%";

   if (props.value > 0) {
      percentage = Math.round((props.value / props.maxValue) * 100) + "%";
   }

   return (
      <div className={classes["chart-bar"]}>
         <div className={classes["char-bar__inner"]}>
            <div
               className={classes["chart-bar__fill"]}
               style={{ height: percentage }}
            ></div>
         </div>
         <div className={classes["chart-bar__label"]}>{props.label}</div>
      </div>
   );
};

export default ChartBar;
