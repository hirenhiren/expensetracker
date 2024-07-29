import Card from "./Card";
import { forwardRef } from "react";
import ExpenseItem from "./ExpenseItem";
const Expenses = forwardRef(({sendData}, ref) =>{
    
    return(
        <Card ref={ref} style={{ opacity: 0, transition: "opacity 0.5s" }}>
              <h2 className="text-3xl lg:text-4xl font-light"> Checkout your Expenses List{" "} </h2>
              {sendData.map((dymmyData) =>(<ExpenseItem key={dymmyData.id} itemPurchasedDate = {dymmyData.ItemDT} itemPurchasedName = {dymmyData.ItemName}  itemPurchasedPrice={dymmyData.ItemPrice}/>)
              )}
          </Card>
    );
}) 


export default Expenses