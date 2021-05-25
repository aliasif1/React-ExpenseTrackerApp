import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const filterYears = ["2019","2020","2021","2022"];

    const options = filterYears.map(year => <option value={year} key={year}>{year}</option>);

    const handleFilterYearChange = (event) => {
        const year = event.target.value;
        props.changeFilterYear(year);
    }

    return (
        <div className="expense-filter">
            <div>Year</div>
            <div>
            <select name="year" value={props.selectedYear} onChange={handleFilterYearChange}>
                {options}
            </select>
            </div>
        </div>
    )
}

export default ExpenseFilter
