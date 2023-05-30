import { VictoryPie } from "victory";

type historyObj = {
    id: number
    text: string 
    amount: number
  }
  
  interface Props {
      historyList: historyObj[]
  }

export function ExpenseChart({ historyList } : Props) {
  const totalIncomes = historyList
    .filter((elem) => elem.amount > 0)
    .reduce((acc, elem) => (acc += elem.amount), 0);

  const totalExpenses = historyList
    .filter((elem) => elem.amount < 0)
    .reduce((acc, elem) => (acc += elem.amount), 0) * -1;

  console.log({
    totalIncomes,
    totalExpenses,
  });

  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const incomesPercentage = (100 - (expensesPercentage))

  if (!totalIncomes && !totalExpenses) {
    return (
      <div className="p-4 my-2">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-xl font-bold my-2">No data yet</h1>
        </div>
      </div>
    );
  }

  if(totalIncomes - totalExpenses < 0) {
    return (
      <div>
        <VictoryPie
          colorScale={["#e74c3c", "#2ecc71"]}
          data={[
            { x: "Expenses", y: 100 },
            { x: "Incomes", y: 0 },
          ]}
          animate={{
            duration: 200,
          }}
          labels={({ datum }) => datum.y}
        />
      </div>
    )
  }

  return (
    <div>
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: `${expensesPercentage}`, y: expensesPercentage },
          { x: `${incomesPercentage}`, y: incomesPercentage },
        ]}
        animate={{
          duration: 200,
        }}
        
      />
    </div>
  );
}