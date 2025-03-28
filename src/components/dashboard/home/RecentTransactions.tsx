import useStellarTransactions from "@/hooks/useStellarTransactions";

export function RecentTransactions() {
  const { transactions, loading } = useStellarTransactions();

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="text-white/70 text-center">Loading transactions...</div>
      ) : transactions.length === 0 ? (
        <div className="text-white/70 text-center">No recent transactions</div>
      ) : (
        transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  transaction.type === "Buy"
                    ? "bg-green-500/20"
                    : transaction.type === "Sell"
                      ? "bg-red-500/20"
                      : "bg-blue-500/20"
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    transaction.type === "Buy"
                      ? "text-green-500"
                      : transaction.type === "Sell"
                        ? "text-red-500"
                        : "text-blue-500"
                  }`}
                >
                  {transaction.type.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium">{transaction.asset}</div>
                <div className="text-xs text-white/70">{transaction.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{transaction.value}</div>
              <div className="text-xs text-white/70">{transaction.amount}</div>
            </div>
          </div>
        ))
      )}
      <button className="w-full text-center text-sm text-[#0291fc] hover:underline hover:text-gray-200 mt-2">
        View all transactions
      </button>
    </div>
  );
}
