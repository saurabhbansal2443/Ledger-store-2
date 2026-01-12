import { create } from "zustand";
import { v6 as uuidv6 } from "uuid";

export const LedgerStore = create((set) => ({
  transactions: [],
  addTransactions: (transaction) => {
    set((state) => ({
      transactions: [
        {
          ...transaction,
          date: Date.now(),
          id: uuidv6(),
        },
        ...state.transactions,
      ],
    }));
  },
}));

// Transactions = [] ->
// {
// Date
// Id
// TRansctionType = income|expense  //ce
// Description // c
// amount // c
// }
