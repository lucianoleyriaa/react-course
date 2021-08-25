import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import classes from "./Expenses.module.css";

const Expenses = (props) => {
   const expenses = props.expensesList;

   return (
      <Card className={classes.expenses}>
         {expenses.map((expense) => {
            return <ExpenseItem data={expense} key={expense.id} />;
         })}
      </Card>
   );
};

export default Expenses;
