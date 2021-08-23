import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
   const expensesList = [
      {
         expenseDate: new Date(2021, 7, 17),
         expenseDescription: "Futbol",
         expensePrice: 200,
      },
      {
         expenseDate: new Date(2021, 7, 18),
         expenseDescription: "Nafta Moto",
         expensePrice: 120,
      },
      {
         expenseDate: new Date(2021, 7, 18),
         expenseDescription: "Agua",
         expensePrice: 170,
      },
   ];

   return (
      <div className="App">
         <NewExpense />
         <Expenses expensesList={expensesList} />
      </div>
   );
}

export default App;
