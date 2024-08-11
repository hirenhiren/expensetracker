import ExpenseForm from "./ExpenseForm";

const NewExpense = ({submittedData,initialData}) =>{
 const includeIdHandler = (newData) =>{
    submittedData(newData);
 }
 
    return(
        
            <ExpenseForm  forwardSubmittedData={includeIdHandler} initialData={initialData}/>
        
    );
}

export default NewExpense;