import ExpenseItem from "./ExpenseItem/ExpenseItem";

import classes from "./Expenses.module.css";

function Expenses(props) {
   const expenses = props.expensesList;

   return (
      <div className={classes.expenses}>
         {expenses.map((expense) => {
            return <ExpenseItem data={expense} />;
         })}
      </div>
   );
}

export default Expenses;
