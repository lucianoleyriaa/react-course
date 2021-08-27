import { useState } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
   const [enteredTitle, setNewEnteredTitle] = useState("");
   const [enteredAmount, setNewEnteredAmount] = useState("");
   const [enteredDate, setNewEnteredDate] = useState("");
   // const [userInput, setUserInput] = useState({
   //    enteredTitle: "",
   //    enteredAmount: "",
   //    enteredDate: "",
   // });

   const titleChangeHandler = (e) => {
      setNewEnteredTitle(e.target.value);
      // setUserInput((lastState) => {
      //    return { ...lastState, enteredTitle: e.target.value };
      // });
   };

   const amountChangeHandler = (e) => {
      setNewEnteredAmount(e.target.value);
   };

   const dateChangeHandler = (e) => {
      setNewEnteredDate(e.target.value);
   };

   const submitHandler = (e) => {
      e.preventDefault();

      const expenseData = {
         expenseDescription: enteredTitle,
         expensePrice: enteredAmount,
         expenseDate: new Date(enteredDate),
      };

      props.saveExpenseData(expenseData);
      resetForm();
   };

   const resetForm = () => {
      setNewEnteredTitle("");
      setNewEnteredAmount("");
      setNewEnteredDate("");
   };

   return (
      <form onSubmit={submitHandler}>
         <div className={classes["new-expense__controls"]}>
            <div className={classes["new-expense__control"]}>
               <label>Expense</label>
               <input
                  type="text"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                  required
               />
            </div>
            <div className={classes["new-expense__control"]}>
               <label>Amount</label>
               <input
                  type="number"
                  min="0,01"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
               />
            </div>
            <div className={classes["new-expense__control"]}>
               <label>Date</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-31-12"
                  value={enteredDate}
                  onChange={dateChangeHandler}
               />
            </div>
         </div>
         <div className={classes["new-expense__actions"]}>
            <button type="button" onClick={props.onCancel}>
               Cancel
            </button>
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
};

export default ExpenseForm;
