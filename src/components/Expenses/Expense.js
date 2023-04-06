import React, { useState } from 'react';
import ExpanseItem from './ExpanseItem';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from './ExpenseFilter';

function Expense(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterYearHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filterExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (

    <Card className='expenses'>
      <ExpensesFilter onSelectedYear={filterYearHandler} selectYear={filteredYear} />
      {filterExpenses.map(expense => <ExpanseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
      )};
    </Card>
  )
}

export default Expense
