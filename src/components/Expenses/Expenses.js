import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import FilterExpense from "./FilterExpense/FilterExpense";

import classes from "./Expenses.module.css";
import { Fragment } from "react";

const Expenses = (props) => {
   const expenses = props.expensesList;

   const filterByYear = (year) => {
      console.log(year);
   };

   return (
      <Fragment>
         <Card className={classes.expenses}>
            <FilterExpense filterByYear={filterByYear} />
            {expenses.map((expense) => {
               return <ExpenseItem data={expense} key={expense.id} />;
            })}
         </Card>
      </Fragment>
   );
};

export default Expenses;
