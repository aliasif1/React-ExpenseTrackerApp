import {useState, useEffect} from 'react';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const initialYear = "2021";
    const [filterYear, setFilterYear] = useState(initialYear); 
    const [filteredExpenses, setFilteredExpenses] = useState(props.items.filter(expense => expense.date.getFullYear().toString() === initialYear)); 
   
    useEffect(() => {
        setFilteredExpenses(props.items.filter(expense => expense.date.getFullYear().toString() === filterYear));
    }, [props.items])

    const changeFilterYear = (year) => {
        setFilterYear(year);
        setFilteredExpenses(props.items.filter(expense => expense.date.getFullYear().toString() === year));
    }

    let expensesContent = <div className="expense_fallback"> No Expenses Found!</div>;

    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={filterYear} changeFilterYear={changeFilterYear} />
            <ExpensesChart expenses = {filteredExpenses}  />
            {expensesContent}
        </Card>
    );
}

export default Expenses;