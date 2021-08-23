import { useState } from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import classes from "./ExpenseItem.module.css";
import Card from "../../Card/Card";

const ExpenseItem = (props) => {
   const [title, updateTitle] = useState(props.data.expenseDescription);

   const clickHandler = () => {
      updateTitle("Changed!!");
   };

   return (
      <Card className={classes["expense-item"]}>
         <ExpenseDate date={props.data.expenseDate} />
         <div className={classes["expense-item__description"]}>
            {/* <h2>{props.data.expenseDescription}</h2> */}
            <h2>{title}</h2>
            <div className={classes["expense-item__price"]}>
               ${props.data.expensePrice}
            </div>
            <button onClick={clickHandler}>ChangeTitle</button>
         </div>
      </Card>
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
