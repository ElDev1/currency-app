import Image from 'next/image'
import trash from '../icons/trash.svg'

type historyObj = {
  id: number
  text: string 
  amount: number
}

interface Props {
    setHistoryList: Function
    historyList: historyObj[]
    id: number
    text: string
    amount: number
}


export default function HistoryCard({text, amount, id, setHistoryList, historyList}: Props) {
  const handleDelete = () => {
    const newArr = historyList.filter(elem => elem.id != id)
    setHistoryList(newArr)
  }

  return (
    <div className="flex justify-between bg-green-600 text-white p-1 rounded-md h-auto">
        <p>{text}</p>
        <div className="flex gap-1 items-center">
          <span>${amount}</span>
          <Image src={trash} onClick={handleDelete} alt='trash icon' className="w-5 h-5 hover:bg-red-600 rounded-full cursor-pointer" />
        </div>
    </div>
  )
}
