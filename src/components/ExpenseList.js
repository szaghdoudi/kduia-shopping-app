import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {

    const {expenses} = useContext(AppContext);

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Items</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Unit Price</th>
                    <th scope='col'>Item Price</th>
                    <th scope='col'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense)=>(
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice}/>
                ))}
            </tbody>    
        </table>
    );   


};

export default ExpenseList;
