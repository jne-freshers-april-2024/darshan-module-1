import '../App.css';

function ExpenseItems() {

    const todayDate=new  Date();
    const date=todayDate.getDate();
    const month=todayDate.getMonth();
    const year=todayDate.getFullYear();



    const modelName='XUV 700';
    const amount=150000000;
    const companyName='Mahindra';

  return (
    <div>

      {/* Basic code in react */}

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
          <tr>
            <td>1</td>
            <td>{modelName}</td>
            <td>{amount}</td>
            <td>{companyName}</td>
            <td>{date}/{month}/{year}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ExpenseItems;
