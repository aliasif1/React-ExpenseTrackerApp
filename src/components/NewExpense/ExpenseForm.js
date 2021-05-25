import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {   
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const handleTitleChange = (event) => {
        setTitle((oldValue) => event.target.value);
    }

    const handleAmountChange = (event) => {
        setAmount((oldValue) => event.target.value);
    }

    const handleDateChange = (event) => {
        const date = event.target.value;
        setDate((oldValue) => date);
    }

    const handleAddExpense = (event) => {
        event.preventDefault();
        const expenseData = {
            title,
            amount: parseFloat(amount),
            date: new Date(date)
        }
        props.saveNewExpense(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={handleAddExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={handleTitleChange} value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" onChange={handleAmountChange} value={amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleDateChange} value={date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
