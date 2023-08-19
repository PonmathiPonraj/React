import ExpenseItem from "./Compontents/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Tissue",
      amount: 150,
      locationOfExpenditure: "Stationary Shop",
    },
    {
       id: "e2", 
       title: "Laptop",
        amount: 15999.00,
        locationOfExpenditure:"Electronic Shop",
      },
    {
      id: "e3",
      title: "Mobile",
      amount: 59999.50,
      locationOfExpenditure:"Mobile Shop",
    },
    {
      id: "e4",
      title: "Earpods",
      amount: 8000.00,
      locationOfExpenditure: "Earpods Showroom",
    },
  ];
  return (
    <div>
        <ExpenseItem
            title={expenses[0].title}
            amount={ expenses[0].amount}
            locationOfExpenditure={expenses[0].locationOfExpenditure}>
        </ExpenseItem>
        <ExpenseItem  
            title={expenses[1].title}
            amount={expenses[1].amount}
            locationOfExpenditure={expenses[1].locationOfExpenditure}>
        </ExpenseItem>
        <ExpenseItem  
            title={expenses[2].title}
            amount={expenses[2].amount}
            locationOfExpenditure={expenses[2].locationOfExpenditure}>
        </ExpenseItem>
        <ExpenseItem  t
            title={expenses[3].title}
            amount={expenses[3].amount}
            locationOfExpenditure={expenses[3].locationOfExpenditure}>
        </ExpenseItem>
    </div>
  );
}
export default App;