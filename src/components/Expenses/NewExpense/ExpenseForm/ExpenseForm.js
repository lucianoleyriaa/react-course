import { useState } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
   const [enteredTitle, setNewEnteredTitle] = useState("");
   const [amountEntered, setNewEnteredAmount] = useState("");
   const [enteredDate, setNewEnteredDate] = useState("");

   const titleChangeHandler = (e) => {
      setNewEnteredTitle(e.target.value);
      console.log(e.target.value);
   };

   const amountChangeHandler = (e) => {
      setNewEnteredAmount(e.target.value);
      console.log(e.target.value);
   };

   const dateChangeHandler = (e) => {
      setNewEnteredDate(e.target.value);
      console.log(e.target.value);
   };

   return (
      <form>
         <div className={classes["new-expense__controls"]}>
            <div className={classes["new-expense__control"]}>
               <label>Expense</label>
               <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className={classes["new-expense__control"]}>
               <label>Amount</label>
               <input type="number" min="0.01" onChange={amountChangeHandler} />
            </div>
            <div className={classes["new-expense__control"]}>
               <label>Date</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-31-12"
                  onChange={dateChangeHandler}
               />
            </div>
         </div>
         <div className={classes["new-expense__actions"]}>
            <button>Add Expense</button>
         </div>
      </form>
   );
};

export default ExpenseForm;
