import { useState } from "react"

export const ExpenseTracker = () => {
  const [balance, setBalance] = useState({
        earnings: 0,
        expenses: 0
  })
  return (
    <div className="max-w-[250px] w-full">
        <h1 className="text-xl font-bold mb-5">Administrador de gastos</h1>
        <div className="flex w-full text-gray-400 justify-between">
            <p className="">ganancias</p>
            <p>500</p>
        </div>
        <div className="flex w-full text-gray-400 justify-between">
            <p>gastos</p>
            <p>300</p>
        </div>
        <div className="flex w-full text-gray-600 justify-between">
            <p>tu balance</p>
            <p className="text-xl">$ 200</p>
        </div>
        <div className="flex flex-col gap-2 mt-5">
            <input type="text" required className="bg-gray-200 rounded-md w-full max-w-[250px] p-2 outline-none" placeholder="Compra de supermercado..." />
            <input type="text" required className="bg-gray-200 rounded-md w-full max-w-[250px] p-2 outline-none" placeholder="00.00"/>
            <div className="flex gap-2">
                <button className="px-5 py-1 bg-green-700 rounded-md hover:bg-green-500 text-white">+</button>
                <button className="px-5 py-1 bg-red-700 rounded-md hover:bg-red-500 text-white">-</button>
            </div>
        </div>
    </div>
  )
}

