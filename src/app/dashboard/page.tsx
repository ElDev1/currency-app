'use client'

import { ExpenseTracker } from "@/components/ExpenseTracker"
import HistoryCard from "@/components/HistoryCard"
import { useState } from "react"

export default function Page() {
  const [historyList, setHistoryList] = useState([])

  return (
    <section className="bg-white p-9 rounded-md flex gap-5 max-w-2xl w-full">
      <ExpenseTracker historyList={historyList} setHistoryList={setHistoryList}/>
      <div className="max-w-5xl w-full">
        <h1>Historial</h1>
        <HistoryCard/>
      </div>
    </section>
  )
}
