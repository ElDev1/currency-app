import '../components/DolarCard'
import { DolarCard } from '../components/DolarCard'
import { getDollarPrices } from '@/service/getDollarData'

export default function Home() {
  const data = getDollarPrices()
  console.log(data, 'hola')

  return (
    <main className="w-2/5 p-3 shadow-md bg-white rounded-md flex max-[1370px]:flex-col">
      <section className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-center text-xl text-gray-600 font-bold">Monto en ARS</h2>
        <input type="number" min="0" max="1000000" className="bg-gray-100 my-4 focus:outline-none h-11 w-40 rounded-md px-2"/>
      </section>
      <section className="flex-1 h-auto bg-green-700 rounded-md flex flex-col gap-5 p-5">
        <h2 className="text-white font-bold text-center">Cotizaciones</h2>
        <DolarCard />
        <DolarCard />
        <DolarCard />
      </section>
    </main>
  )
}
