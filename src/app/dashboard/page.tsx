import { ExpenseTracker } from "@/components/ExpenseTracker"

export default function page() {

  return (
    <section className="bg-white p-9 rounded-md flex">
      <ExpenseTracker />
      <div>
        <h1>History</h1>
      </div>
    </section>
  )
}
