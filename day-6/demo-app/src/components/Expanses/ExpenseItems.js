import '../../App.css';
import Cards from '../UI/Cards';


const ExpenseItems =({expenses})=> { // 

    // const todayDate=new  Date();
    // const date=todayDate.getDate();
    // const month=todayDate.getMonth();
    // const year=todayDate.getFullYear();



    // const modelName='XUV 700';
    // const amount=150000000;
    // const companyName='Mahindra';

  return (
    <div>
      <Cards className="card-item"> </Cards>

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
  );
}


export default ExpenseItems;


 /* <td>{props.userId}</td>
            <td>{props.model}</td>
            <td>{props.price}</td>
            <td>{props.Company}</td>
            <td>{props.date.toString()}</td> */ 