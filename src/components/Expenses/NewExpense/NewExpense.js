import ExpenseForm from "./ExpenseForm/ExpenseForm";
import classes from "./NewExpense.module.css";

const newExpense = (props) => {
   const saveExpenseData = (expenseData) => {
      const newExpense = { ...expenseData, id: Math.random().toString() };

      props.addExpense(newExpense);
   };

   return (
      <div className={classes["new-expense"]}>
         <ExpenseForm saveExpenseData={saveExpenseData} />
      </div>
   );
};

export default newExpense;
