
import React,{useState} from 'react';
import Expense from "./components/Expenses/Expense";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expense,setExpense] = useState(DUMMY_EXPENSES);

  //expense items list
  

  const addExpenseHandler = (expenses) => {
    setExpense((prevExpenses) => {
      // console.log([expenses,...prevExpenses]);
      return [expenses,...prevExpenses];
    });
  }
  return (

    // if there is no jsx then we must write like this
    // React.createElement('div', {}, React.createElement('h2', {}, 'Let\'s get started'), React.createElement(Expense, { expenses: expenses }))

    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expense expenses = {expense}/>
    </div>
  );
}

export default App;
