import { useEffect, useRef, useState } from "react";

const ExpenseForm = ({forwardSubmittedData}) => {

  const[itemDate, setItemDate] = useState("");
  const[itemName, setItemName] = useState("");
  const[itemPrice, setItemPrice] = useState("");

  const itemDateHandler = (event) =>{
    setItemDate(event.target.value);
  }

  const itemNameHandler = (event) =>{
    setItemName(event.target.value);
  }

  const itemPriceHandler = (event) =>{
    setItemPrice(event.target.value);
  }

  const submitHandler = (event) =>{
    event.preventDefault();
   
    

    const enteredData = [
      {
        id:Math.random().toString(),
        ItemDT:new Date(itemDate),
        ItemName:itemName,
        ItemPrice:itemPrice
      }
    ]
    forwardSubmittedData(enteredData);
    setItemDate("");
    setItemName("");
    setItemPrice("");
    
  }

 

  return (
    <form onSubmit={submitHandler} className="text-[#052f5f] mx-auto bg-white p-8 mt-8 rounded-lg shadow-lg rounded-none">
      <div className="relative">
        <input onChange={itemDateHandler} type="date" value={itemDate} id="itemDateField" className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200 peer custom-focus" placeholder=" " />
        <label htmlFor="itemDateField" className="absolute left-0 top-0 text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:border-t-0  peer-focus:text-sm"> Date </label>
      </div>

      <div className="relative mt-6">
        <input onChange={itemNameHandler} type="text" value={itemName} id="itemNameField" className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200 peer custom-focus" placeholder=" "/>
        <label htmlFor="itemNameField" className="absolute left-0 top-0 text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:border-t-0  peer-focus:text-sm">Item</label>
      </div>
      <div className="relative mt-6">
        <input onChange={itemPriceHandler} type="text" value={itemPrice} id="itemPriceField" className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200 peer custom-focus" placeholder=" "/>
        <label htmlFor="itemPriceField" className="absolute left-0 top-0 text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:border-t-0  peer-focus:text-sm">Price</label>
      </div>
      <div className="mt-8">
        <button type="submit" className="w-full bg-[#1b1dc7] text-white py-2 px-4 rounded-md hover:bg-[#1b1dc7] transition duration-200">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
