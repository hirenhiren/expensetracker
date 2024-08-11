import Card from "./Card";
import { forwardRef } from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = forwardRef(({ sendData, onDeleteItem, onEditItem }, ref) => {
  const removeDataHandler = (id) => {
    onDeleteItem(id);
  };

  const editDataHandler = (item) => {
    onEditItem(item);
  };

  return (
    <Card ref={ref} style={{ opacity: 0, transition: "opacity 0.5s" }} className="animate">
      <h2 className="text-2xl lg:text-4xl font-light">Checkout your Expenses List</h2>
      {sendData.map((dummyData) => (
        <ExpenseItem
          key={dummyData.id}
          id={dummyData.id}
          itemPurchasedDate={dummyData.ItemDT}
          itemPurchasedName={dummyData.ItemName}
          itemPurchasedPrice={dummyData.ItemPrice}
          itemPurchasedExpType={dummyData.ExpenseTyp}
          onDelete={removeDataHandler}
          onEdit={editDataHandler} // Pass the edit handler
        />
      ))}
    </Card>
  );
});

export default Expenses;
