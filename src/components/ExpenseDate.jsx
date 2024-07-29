const ExpenseDate = ({splitDate}) =>{

    const day = splitDate.toLocaleDateString('en-US', { day: 'numeric' });
    const month = splitDate.toLocaleDateString('en-US', { month: '2-digit' });;
    const year = splitDate.getFullYear();
    return(
        <div>
           {day}-{month}-{year}
        </div>
    );
}

export default ExpenseDate