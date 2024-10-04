import { useState } from 'react';
import '../App.css';
import ExpenseFilter from '../childComponent/ExpenseFilter';
import ExpenseFilterl from '../childComponent/ExpenseFilter';

function ExpenseItems({expenses}) {

    // const todayDate=new  Date();
    // const date=todayDate.getDate();
    // const month=todayDate.getMonth();
    // const year=todayDate.getFullYear();



    // const modelName='XUV 700';
    // const amount=150000000;
    // const companyName='Mahindra';

    const [filterYear, setFilterYear] = useState('2020');
    const [filterInfotext, setFilterInfotext] = useState(['2019', '2020', '2021', '2022']);

    const filterchange = (selectYear) => {
        setFilterYear(selectYear);
        switch(selectYear) {
            case '2019':
                setFilterInfotext(['2020', ' 2021', ' 2022']);
                break;
            case '2020':
                setFilterInfotext(['2019', ' 2021', ' 2022']);
                break;
            case '2021':
                setFilterInfotext(['2019', ' 2020', ' 2022']);
                break;
            default:
                setFilterInfotext(['2019', ' 2020', ' 2021']);
                break;
        }
    };
  return (
      <div>
        {/* <h3> Vehical table</h3>
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
         
        </div> */}
          
            <ExpenseFilter
                selected={filterYear}
                onChangeFilter={filterchange}
            />
            <p>Data of year {filterYear} in hidden: {filterInfotext}</p>
      </div>
  );
}

export default ExpenseItems;
