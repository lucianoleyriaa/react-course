import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

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
         {expensesList.map((expense) => {
            return <ExpenseItem data={expense} />;
         })}
      </div>
   );
}

export default App;
