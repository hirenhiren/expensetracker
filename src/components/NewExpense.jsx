import ExpenseForm from "./ExpenseForm";

const NewExpense = ({submittedData}) =>{
 const includeIdHandler = (...newData) =>{
    submittedData(...newData);
 }
 
    return(
        
            <ExpenseForm  forwardSubmittedData={includeIdHandler}/>
        
    );
}

export default NewExpense;