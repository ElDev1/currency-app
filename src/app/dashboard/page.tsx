'use client'

import { ExpenseTracker } from "@/components/ExpenseTracker"
import HistoryCard from "@/components/HistoryCard"
import { useState } from "react"

type HistoryElement = {
  id: number
  text: string
  amount: number
}


export default function Page() {
  const [historyList, setHistoryList] = useState<HistoryElement[]>([])

  return (
    <section className="bg-white p-9 rounded-md flex gap-5 max-w-2xl w-full">
      <ExpenseTracker historyList={historyList} setHistoryList={setHistoryList}/>
      <div className="max-w-5xl w-full">
        <h1>Historial</h1>
        <div className="flex flex-col gap-1">
          {
            historyList.map(elem => <HistoryCard key={elem.id} text={elem.text} amount={elem.amount} setHistoryList={setHistoryList} />)
          }
        </div>
      </div>
    </section>
  )
}
