const ExpenseDate = ({splitDate}) =>{
    // Convert the splitDate string to a Date object
  const date = new Date(splitDate);

    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    const month = date.toLocaleDateString('en-US', { month: '2-digit' });
    const year = date.getFullYear();
    return(
        <div>
           {day}-{month}-{year}
        </div>
    );
}

export default ExpenseDate