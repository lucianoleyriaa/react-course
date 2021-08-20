import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import classes from "./Expenses.module.css";

function Expenses(props) {
   const expenses = props.expensesList;

   return (
      <Card className={classes.expenses}>
         {expenses.map((expense) => {
            return <ExpenseItem data={expense} />;
         })}
      </Card>
   );
}

export default Expenses;
