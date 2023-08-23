import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState ('');
    // const [enteredAmount, setEnteredAmount] = useState ('');
    // const [enteredDate, setEnteredDate] = useState ('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChenageHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    };

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
    };

    return(
        <form>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChenageHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" steps="0.01" onChange={amountChangeHandler}/>
                 </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='number' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type='submit'>Add Expense</button>
            </div>
    </form>
    );
};
export default ExpenseForm;