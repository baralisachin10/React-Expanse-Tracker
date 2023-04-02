import React from 'react'
import ExpanseItem from './ExpanseItem'
import './Expense.css'

function Expense(props) {
  return (
    <div className='expenses'>
      <ExpanseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
      <ExpanseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
      <ExpanseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
      <ExpanseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
    </div>
  )
}

export default Expense
