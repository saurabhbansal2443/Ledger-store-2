import React from "react";
import { useLedgerStore } from "./Store";
import { ArrowUpCircle, ArrowDownCircle, Scale } from "lucide-react";

const Balances = () => {
  const allTransactions = useLedgerStore((store) => store.transactions);

  let totalIncome = 0;
  let totalExpense = 0;

  allTransactions.forEach((data) => {
    if (data.type === "Income") {
      totalIncome += Number(data.amount);
    } else {
      totalExpense += Number(data.amount);
    }
  });

  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Balance Card */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg border border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-slate-800 rounded-lg">
            <Scale className="w-6 h-6 text-indigo-400" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Total Balance</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          ${totalBalance.toLocaleString()}
        </h2>
      </div>

      {/* Income Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <ArrowUpCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Total Income</span>
        </div>
        <h2 className="text-3xl font-bold text-emerald-600 tracking-tight">
          +${totalIncome.toLocaleString()}
        </h2>
      </div>

      {/* Expense Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-rose-50 rounded-lg">
            <ArrowDownCircle className="w-6 h-6 text-rose-600" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Total Expense</span>
        </div>
        <h2 className="text-3xl font-bold text-rose-600 tracking-tight">
          -${totalExpense.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};

export default Balances;