export default function Home() {
  return (
    <main className="w-2/5 p-3 bg-white rounded-md flex">
      <section className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-center">Ingrese un monto en pesos $</h2>
        <input type="number" min="0" max="1000000" className="bg-gray-100 my-4 focus:outline-none h-11 w-40 rounded-md px-2"/>
      </section>
      <section className="flex-1 h-96 bg-green-700 rounded-md">
        <h2 className="text-white">Cotizaciones</h2>
      </section>
    </main>
  )
}
