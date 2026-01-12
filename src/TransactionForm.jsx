import React, { useState } from "react";\


const TransactionForm = () => {
  const [currTrans, setCurrentTrans] = useState({
    description: "",
    amount: 0,
    type: "Income",
  });
  function handleAddTransaction() {
    console.log(currTrans);
  }
  return (
    <div>
      <label htmlFor="description">Dexscription</label>
      <input
        onChange={(e) => {
          setCurrentTrans({ ...currTrans, description: e.target.value });
        }}
        id="description"
        type="text"
      />
      <label htmlFor="amount">Amount</label>
      <input
        onChange={(e) => {
          setCurrentTrans({ ...currTrans, amount: e.target.value });
        }}
        id="amount"
        type="number"
      />

      <input
        checked={currTrans.type === "Expense"}
        onChange={() => {
          setCurrentTrans({ ...currTrans, type: "Expense" });
        }}
        name="type"
        type="radio"
        id="expense"
      />
      <label htmlFor="expense">Expense</label>
      <input
        checked={currTrans.type === "Income"}
        onChange={() => {
          setCurrentTrans({ ...currTrans, type: "Income" });
        }}
        name="type"
        type="radio"
        id="income"
      />
      <label htmlFor="income">income</label>
      <button onClick={handleAddTransaction}>Add Transactions </button>
    </div>
  );
};

export default TransactionForm;
