import ExpenseDate from "./ExpenseDate";
import closeIcon from '../assets/cross-icon.png';
import editIcon from '../assets/edit-icon.png';

const ExpenseItem = ({ id, itemPurchasedDate, itemPurchasedName, itemPurchasedPrice, itemPurchasedExpType, onDelete, onEdit }) => {
  const removeItemHandler = () => {
    onDelete(id);
  };

  const editItemHandler = () => {
    onEdit({ id, ItemDT: itemPurchasedDate, ItemName: itemPurchasedName, ItemPrice: itemPurchasedPrice, ExpenseTyp: itemPurchasedExpType }); // Adjust ExpenseTyp as needed
    console.log('edit is clicked')
  };

  return (
    <ul className="text-sm lg:text-xl">
      <li className="my-5 bg-gray-100 py-4 px-2 shadow-lg shadow-gray-500/50">
        <div className="flex justify-between">
          <ExpenseDate splitDate={itemPurchasedDate} />
          <div>{itemPurchasedName}</div>
          <div>₹ {itemPurchasedPrice}</div>
          <div><img onClick={editItemHandler} src={editIcon} className="mt-2 mr-2 cursor-pointer" width="10" height="10" alt="editImg" /></div>
          <div><img onClick={removeItemHandler} src={closeIcon} className="mt-2 mr-2 cursor-pointer" width="10" height="10" alt="closeImg" /></div>
        </div>
      </li>
    </ul>
  );
};

export default ExpenseItem;
