import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
   const expensesList = [
      {
         id: "1",
         expenseDate: new Date(2021, 7, 17),
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
         expenseDate: new Date(2021, 7, 18),
         expenseDescription: "Agua",
         expensePrice: 170,
      },
   ];

   const addExpense = (expense) => {
      expensesList.push(expense);
   };

   return (
      <div className="App">
         <NewExpense addExpense={addExpense} />
         <Expenses expensesList={expensesList} />
      </div>
   );
}

export default App;
