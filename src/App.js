import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const expensesList = [
   {
      id: "1",
      expenseDate: new Date(2020, 7, 17),
      expenseDescription: "Futbol",
      expensePrice: 200,
   },
   {
      id: "2",
      expenseDate: new Date(2021, 7, 18),
      expenseDescription: "Nafta Moto",
      expensePrice: 120,
   },
   {
      id: "3",
      expenseDate: new Date(2021, 5, 23),
      expenseDescription: "Cuota Facultad",
      expensePrice: 8950,
   },
   {
      id: "4",
      expenseDate: new Date(2021, 6, 5),
      expenseDescription: "Servicios",
      expensePrice: 15400,
   },
   {
      id: "5",
      expenseDate: new Date(2021, 7, 18),
      expenseDescription: "Agua",
      expensePrice: 170,
   },
];

function App() {
   const [expenses, setExpenses] = useState(expensesList);

   const addExpense = (expense) => {
      setExpenses((prevState) => {
         return [expense, ...prevState];
      });
   };

   return (
      <div className="App">
         <NewExpense addExpense={addExpense} />
         <Expenses expensesList={expenses} />
      </div>
   );
}

export default App;
