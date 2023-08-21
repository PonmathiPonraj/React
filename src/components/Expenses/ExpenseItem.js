import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const deleteExpense = () => {
    console.log("Delete");
  }
    return (
      <Card className='expense-item'>
        <ExpenseDate date = {props.date} />
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        <button onClick={deleteExpense}>Delete Expense</button>
      </Card>
    ); 
}
export default ExpenseItem;
	 