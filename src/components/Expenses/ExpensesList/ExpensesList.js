import ExpenseItem from "../ExpenseItem/ExpenseItem";

import classes from "./ExpensesList.module.css";

const ExpensesList = (props) => {
   if (props.items.length === 0) {
      return (
         <p className={classes["expenses-list__fallback"]}>Found no expenses</p>
      );
   }

   return (
      <div className={classes["expenses-list"]}>
         {props.items.map((expense) => {
            return <ExpenseItem data={expense} key={expense.id} />;
         })}
      </div>
   );
};

export default ExpensesList;
