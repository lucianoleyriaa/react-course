import ExpensesList from "./ExpensesList/ExpensesList";
import Card from "../Card/Card";
import FilterExpense from "./FilterExpense/FilterExpense";

import classes from "./Expenses.module.css";
import { Fragment, useState } from "react";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = (props) => {
   const [defaultYear, setFilteredYear] = useState(new Date().getFullYear());

   const filterByYear = (year) => {
      setFilteredYear(year);
   };

   const filteredExpenses = props.expensesList.filter((expense) => {
      return expense.expenseDate.getFullYear() === +defaultYear;
   });

   return (
      <Fragment>
         <Card className={classes.expenses}>
            <FilterExpense
               currentYear={defaultYear}
               filterByYear={filterByYear}
            />
            <ExpensesChart filteredExpenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
         </Card>
      </Fragment>
   );
};

export default Expenses;
