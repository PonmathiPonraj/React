import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React ,{ useState } from 'react';

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear=>{
        setFilteredYear(selectedYear);
    };

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
            </Card>
        </div>
    )
}
export default Expenses;