interface Props {
    setHistoryList: Function
    text: string
    amount: number
}

export default function HistoryCard({text, amount, setHistoryList}: Props) {
  return (
    <div className="flex justify-between bg-green-600 text-white p-1 rounded-md h-auto">
        <p>{text}</p>
        <p>${amount}</p>
    </div>
  )
}
