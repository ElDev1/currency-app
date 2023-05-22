import '../components/DolarCard'
import { DolarCard } from '../components/DolarCard'

export default function Home() {
  return (
    <main className="w-2/5 p-3 shadow-md bg-white rounded-md flex">
      <section className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-center text-xl text-gray-600 font-bold">Monto en ARS$</h2>
        <input type="number" min="0" max="1000000" className="bg-gray-100 my-4 focus:outline-none h-11 w-40 rounded-md px-2"/>
      </section>
      <section className="flex-1 h-96 bg-green-700 rounded-md flex flex-col gap-5">
        <h2 className="text-white font-bold text-center mt-2">Cotizaciones</h2>
        <DolarCard />
        <DolarCard />
        <DolarCard />
      </section>
    </main>
  )
}
