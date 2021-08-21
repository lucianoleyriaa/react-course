import classes from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
   const day = props.date.toLocaleString("es", { day: "numeric" });
   const month = props.date.toLocaleString("es", { month: "long" });
   const year = props.date.toLocaleString("es", {
      year: "numeric",
   });

   return (
      <div className={classes["expense-date"]}>
         <div className={classes["expense-date__day"]}>{day}</div>
         <div className={classes["expense-date__month"]}>{month}</div>
         <div className={classes["expense-date__year"]}>{year}</div>
      </div>
   );
};

export default ExpenseDate;
