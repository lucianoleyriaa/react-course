import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import FilterExpense from "./FilterExpense/FilterExpense";

import classes from "./Expenses.module.css";
import { Fragment, useState } from "react";

const Expenses = (props) => {
   // const expenses = props.expensesList;
   // const [expenses, setFilteredExpenses] = useState(props.expensesList);
   // const [defaultYear, setFilteredYear] = useState(new Date().getFullYear());

   // const filterByYear = (year = defaultYear) => {
   //    const filteredExpenses = props.expensesList.filter((expense) => {
   //       return expense.expenseDate.getFullYear() === +year;
   //    });
   //    console.log(filteredExpenses);
   //    setFilteredExpenses(filteredExpenses);
   // };

   return (
      <Fragment>
         <Card className={classes.expenses}>
            {/* <FilterExpense filterByYear={filterByYear} /> */}
            {props.expensesList.map((expense) => {
               return <ExpenseItem data={expense} key={expense.id} />;
            })}
         </Card>
      </Fragment>
   );
};

export default Expenses;
