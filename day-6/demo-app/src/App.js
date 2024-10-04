import "./App.css";
import ExpenseItems from "./components/Expanses/ExpenseItems";
import NewExpensesItem from "./components/Expanses/NewExpensesItem";


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
    },
  ];
  return (
    <div>
      <ExpenseItems
        // userId={expenses[0].userId}
        // model={expenses[0].model}
        // price={expenses[0].price}
        // Company={expenses[0].Company}
        // date={expenses[0].date.toString()}
        expenses={expenses}>

        </ExpenseItems>
      <NewExpensesItem expenses={expenses}></NewExpensesItem>
    </div>
  );
}

export default App;

/* Basic code in react

      <h3>User table</h3>
      <div class="container"> 
       <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        <tr>
          <td>1</td>
          <td>A</td>
          <td>13</td>
          <td>pune</td>
        </tr> 
       </table>
       </div> */
