import React, { useState } from 'react';
import './App.css';
import Renderlist1 from './renderList/Renderlist1';
import NewExpensesItem from './components/NewExpensesItem';
import ExpenseItems from './components/ExpenseItems';
import Charts from './charts/Charts';



  const App=() =>{
    const expenses = [
      {
        userId: 1,
        model: "Bolero",
        price: 210000,
        Company: "mahindra",
        date: new Date(2024, 8, 8),
      },
      {
        userId: 2,
        model: "Brezza",
        price: 1500000,
        Company: "maruti",
        date: new Date(2024, 10, 21),
      },
      {
        userId: 3,
        model: "Honda City",
        price: 210000,
        Company: "mahindra",
        date: new Date(2024, 9, 15),
      }
    ];

    // const  name="Darshan";

    // function parentAlert(data){
    //   alert(data);
    //   console.log(data  )
    // }
    const [filterYear, setFilterYear] = useState('2024');
   
    const filteredExpenses = expenses.filter(expense => 
      expense.date.getFullYear().toString() === filterYear
  );

  // Assuming dataPoints are derived from filtered expenses
  const dataPoints = filteredExpenses.map(expense => ({
      label: expense.model,
      value: expense.price
  }));

  return (
      <div>
        <Renderlist1></Renderlist1>
          <ExpenseItems expenses={filteredExpenses} />
          <Charts dataPoints={dataPoints} />
      </div>
  );
};
export default App;
