import { useEffect, useState } from "react";
import Modal from "./Modal";

const ExpenseForm = ({ forwardSubmittedData, initialData }) => {
  const [itemDate, setItemDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [expenseType, setExpenseType] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    
    if (initialData) {
      const formattedDate = new Date(initialData.ItemDT).toISOString().split('T')[0];
      setItemDate(formattedDate);
      setItemName(initialData.ItemName);
      setItemPrice(initialData.ItemPrice);
      setExpenseType(initialData.ExpenseTyp);
    }
  }, [initialData]);

  const itemDateHandler = (event) => {
    setItemDate(event.target.value);
  };

  const itemNameHandler = (event) => {
    setItemName(event.target.value);
  };

  const itemPriceHandler = (event) => {
    setItemPrice(event.target.value);
  };

  const expenseTypeHandler = (event) => {
    setExpenseType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (itemDate === "" || itemName === "" || itemPrice === "" || expenseType === "") {
      setShowModal(true);
      return;
    }

    const enteredData = {
      id: initialData ? initialData.id : Math.random().toString(),
      ItemDT: new Date(itemDate).toISOString(),
      ItemName: itemName,
      ItemPrice: itemPrice,
      ExpenseTyp: expenseType,
    };

    forwardSubmittedData(enteredData);
    setItemDate("");
    setItemName("");
    setItemPrice("");
    setExpenseType("");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {!showModal ? '' : <Modal onClose={closeModal} />}
      <form onSubmit={submitHandler} className="animate text-[#052f5f] mx-auto bg-white p-8 mt-8 rounded-lg shadow-lg rounded-none">
        <div className="relative">
          <input onChange={itemDateHandler} type="date" value={itemDate} id="itemDateField" className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200 peer custom-focus" placeholder=" " />
          <label htmlFor="itemDateField" className="absolute left-0 top-0 text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:border-t-0 peer-focus:text-sm"> Date </label>
        </div>

        <div className="relative mt-6">
          <input onChange={itemNameHandler} type="text" value={itemName} id="itemNameField" className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200 peer custom-focus" placeholder=" "/>
          <label htmlFor="itemNameField" className="absolute left-0 top-0 text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:border-t-0 peer-focus:text-sm"> Item Name </label>
        </div>

        <div className="relative mt-6">
          <input onChange={itemPriceHandler} type="text" value={itemPrice} id="itemPriceField" className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200 peer custom-focus" placeholder=" "/>
          <label htmlFor="itemPriceField" className="absolute left-0 top-0 text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:border-t-0 peer-focus:text-sm"> Price </label>
        </div>

        <div className="relative mt-6">
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Expense Type</legend>
            <div className="mt-6 space-y-6">
              {['Food', 'Travel', 'Medicine', 'OtherExp'].map(type => (
                <div className="flex items-center gap-x-3" key={type}>
                  <input
                    id={`${type}Expense`}
                    onChange={expenseTypeHandler}
                    value={type}
                    name="expenseType"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked={expenseType === type}
                  />
                  <label
                    htmlFor={`${type}Expense`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-8">
          <button type="submit" className="w-full bg-[#1b1dc7] text-white py-2 px-4 rounded-md hover:bg-[#1b1dc7] transition duration-200">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
