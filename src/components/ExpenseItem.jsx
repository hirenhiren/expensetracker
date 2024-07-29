import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({itemPurchasedDate, itemPurchasedName, itemPurchasedPrice}) =>{
  
    return(
           <ul className="text-xl">
                <li className="my-5 bg-gray-100 py-4 px-2 shadow-lg shadow-gray-500/50">
                  <div className="flex justify-between">
                    <ExpenseDate splitDate = {itemPurchasedDate}/>
                    <div>{itemPurchasedName}</div>
                    <div>$ {itemPurchasedPrice}</div>
                  </div>
                </li>
              </ul>
    );
}

export default ExpenseItem