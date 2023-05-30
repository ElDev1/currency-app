'use client'

import { ExpenseChart } from "@/components/ExpenseChart"
import { ExpenseTracker } from "@/components/ExpenseTracker"
import HistoryCard from "@/components/HistoryCard"
import { useEffect, useState } from "react"

type HistoryElement = {
  id: number
  text: string
  amount: number
}

export default function Page() {
  
  useEffect(() => {
    const data = localStorage.getItem("historyList")
    if(data) {
      setHistoryList(JSON.parse(data))
    }
  }, [])

  const [historyList, setHistoryList] = useState<HistoryElement[]>([])

  return (
    <section className="bg-white p-9 shadow-md rounded-md flex gap-5 max-w-2xl w-full">
      <ExpenseTracker historyList={historyList} setHistoryList={setHistoryList}/>
      <div className="max-w-5xl w-full flex flex-col flex-1">
        <ExpenseChart historyList={historyList}/>
        <h1>Historial</h1>
        <div className="flex flex-col gap-1">
          {
            historyList.map(elem => <HistoryCard key={elem.id} text={elem.text} id={elem.id} amount={elem.amount} historyList={historyList} setHistoryList={setHistoryList} />)
          }
        </div>
      </div>
    </section>
  )
}
