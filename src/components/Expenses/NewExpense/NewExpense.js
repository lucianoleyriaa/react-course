import ExpenseForm from "./ExpenseForm/ExpenseForm";
import classes from "./NewExpense.module.css";

const newExpense = () => {
   return (
      <div className={classes["new-expense"]}>
         <ExpenseForm />
      </div>
   );
};

export default newExpense;
