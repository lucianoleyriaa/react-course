import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import FilterExpense from "./FilterExpense/FilterExpense";

import classes from "./Expenses.module.css";
import { Fragment, useState } from "react";

const Expenses = (props) => {
   const [defaultYear, setFilteredYear] = useState("2021");

   const filterByYear = (year) => {
      setFilteredYear(year);
   };

   const filteredExpenses = props.expensesList.filter((expense) => {
      return expense.expenseDate.getFullYear() === +defaultYear;
   });

   return (
      <Fragment>
         <Card className={classes.expenses}>
            <FilterExpense filterByYear={filterByYear} />
            {filteredExpenses.map((expense) => {
               return <ExpenseItem data={expense} key={expense.id} />;
            })}
         </Card>
      </Fragment>
   );
};

export default Expenses;
