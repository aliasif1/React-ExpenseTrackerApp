import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const saveNewExpense = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }
        props.addNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm saveNewExpense={saveNewExpense} />
        </div>
    )
}

export default NewExpense;
