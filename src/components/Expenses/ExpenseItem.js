import './ExpenseItem.css';

function ExpenseItem() {
    const expenseTitle="Sarees";
    const expenseAmount=500.70;
    const locationOfExpenditure="Textiles";
    return (
      <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
          <h2 >{expenseTitle}</h2>
          <div className='expense-item__carprice'>${expenseAmount}</div></div>
          <br></br>
          <div className='expense-item__location'>{locationOfExpenditure}</div>
      </div>
    ); 
}
export default ExpenseItem;
	 