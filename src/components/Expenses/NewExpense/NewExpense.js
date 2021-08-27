import { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
   const saveExpenseData = (expenseData) => {
      const newExpense = { ...expenseData, id: Math.random().toString() };
      props.addExpense(newExpense);
   };

   const [isOpen, setNewFormState] = useState(false);

   const showExpenseForm = () => {
      setNewFormState(true);
   };

   const closeExpenseForm = () => {
      setNewFormState(false);
   };

   return (
      <div className={classes["new-expense"]}>
         {isOpen ? (
            <ExpenseForm
               saveExpenseData={saveExpenseData}
               onCancel={closeExpenseForm}
            />
         ) : (
            <button onClick={showExpenseForm}>New Expense</button>
         )}
      </div>
   );
};

export default NewExpense;
