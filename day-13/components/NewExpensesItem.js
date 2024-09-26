import '../App.css'
const NewExpensesItem =({expenses})=>{

    // const month= expenses.date.toLocaleString('en-US', {month : 'long'});
    // const day=expenses.date.toLocaleString('en-US', {day: '2-digit'});
    // const year=expenses.date.getFullYear();

    return(
        <div>
             <h3> Vehical table</h3>
      <div className="container">
        <table>
          <tr>
            <th>ID</th>
            <th>Model Name</th>
            <th>price</th>
            <th>Company</th>
            <th>Date</th>
          </tr>
          {expenses.map((expense)=>(
          <tr>
             <td>{expense.userId}</td>
            <td>{expense.model}</td>
            <td>{expense.price}</td>
            <td>{expense.Company}</td>
            <td>{expense.date.toLocaleString()}</td>
          </tr>
             ))}
        </table>
      </div>

        </div>
    )
}

export default NewExpensesItem;