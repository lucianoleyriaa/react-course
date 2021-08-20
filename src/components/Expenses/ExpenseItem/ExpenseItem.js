import ExpenseDate from "../Expenses/ExpenseDate/ExpenseDate";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
   return (
      <div className={classes["expense-item"]}>
         <ExpenseDate date={props.data.expenseDate} />
         <div className={classes["expense-item__description"]}>
            <h2>{props.data.expenseDescription}</h2>
            <div className={classes["expense-item__price"]}>
               ${props.data.expensePrice}
            </div>
         </div>
      </div>
   );
};

export default ExpenseItem;

/* 
   {props.data.expenseDate.toLocaleString("es", {
               day: "numeric",
               month: "long",
               year: "numeric",
      })} 
      
   */

// Recursividad
// const numeros = [1, 15, 30, 60, 120];

// function sumarVector(numeros, tamaño) {
//    if (tamaño < 0) {
//       return 0;
//    }

//    return numeros[tamaño] + sumarVector(numeros, tamaño - 1);
// }

// console.log(sumarVector(numeros, numeros.length - 1));
