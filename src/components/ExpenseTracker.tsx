import { useRef, useState } from "react"

type historyObj = {
    id: number
    text: string 
    amount: number
  }

interface Props {
    historyList: historyObj[]
    setHistoryList: Function
}

export const ExpenseTracker = ({historyList, setHistoryList}: Props) => {
  const [expense, setExpense] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);
  const amountButton = useRef<HTMLInputElement>(null)
  const descriptionButton = useRef<HTMLInputElement>(null) 

  const amounts = historyList.map((elem => elem.amount))
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  
  const income = amounts.filter(elem => elem > 0).reduce((acc, price) => (acc += price), 0).toFixed(2)
  const expenses = (amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1 ).toFixed(2)

   
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!expense) {
        const newElem = {
            id: window.crypto.randomUUID(),
            text: descriptionButton.current?.value,
            amount: Number(amountButton.current?.value)
        }
        setHistoryList([...historyList, newElem])
    } else {
        const newElem = {
            id: window.crypto.randomUUID(),
            text: descriptionButton.current?.value,
            amount: Number(amountButton.current?.value) * -1
        }
        setHistoryList([...historyList, newElem])
    }
    formRef.current?.reset()
    //e.target.reset()
  }

  return (
    <div className="max-w-[250px] w-full">
        <h1 className="text-xl font-bold mb-5">Administrador de gastos</h1>
        <div className="flex w-full text-gray-400 justify-between">
            <p className="">ganancias</p>
            <p>{income}</p>
        </div>
        <div className="flex w-full text-gray-400 justify-between">
            <p>gastos</p>
            <p>{expenses}</p>
        </div>
        <div className="flex w-full text-gray-600 justify-between">
            <p>tu balance</p>
            <p className="text-xl">${total}</p>
        </div>
        <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-2 mt-5">
            <input type="text" ref={descriptionButton} required className="bg-gray-200 rounded-md w-full max-w-[250px] p-2 outline-none" placeholder="Compra de supermercado..." />
            <input type="number" ref={amountButton} required className="bg-gray-200 rounded-md w-full max-w-[250px] p-2 outline-none" placeholder="00.00"/>
            <div className="flex gap-2">
                <button type="submit" onClick={() => setExpense(false)} className="px-5 py-1 bg-green-700 rounded-md hover:bg-green-500 text-white">+</button>
                <button type="submit" onClick={() => setExpense(true)} className="px-5 py-1 bg-red-700 rounded-md hover:bg-red-500 text-white">-</button>
            </div>
        </form>
    </div>
  )
}

