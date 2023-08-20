import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Tissue",
      amount: 150,
    },
    {
       id: "e2", 
       title: "Laptop",
        amount: 15999.00,
    },
    {
      id: "e3",
      title: "Mobile",
      amount: 59999.50,
    },
    {
      id: "e4",
      title: "Earpods",
      amount: 8000.00,
    },
  ];
  return (
    <div>
        <ExpenseItem
            title={expenses[0].title}
            amount={ expenses[0].amount}
            date={ expenses[0].date}>
        </ExpenseItem>
        <ExpenseItem  
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={ expenses[1].date}>
        </ExpenseItem>
        <ExpenseItem  
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={ expenses[2].date}>
        </ExpenseItem>
        <ExpenseItem  
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={ expenses[3].date}>
        </ExpenseItem>
    </div>
  );
}
export default App;