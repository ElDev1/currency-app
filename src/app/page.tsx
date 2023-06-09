'use client'

import '../components/DolarCard'
import { DolarCard } from '../components/DolarCard'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/Skeleton'
import { mockData } from '@/mock/mockData'

export default function Home() {

  const [dollarPrices, setDollarPrices] = useState(mockData) 
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('api/get-dollar')
      .then(res => res.json())
      .then(data => { 
        setDollarPrices(data)
        setLoading(false)
      })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numberRegEx = /^[0-9]*$/
    const maxDigits = 8

    if (numberRegEx.test(value) && value.length <= maxDigits) {
      setAmount(value.replace(/^0*/, ''))
    }
  }

  return (
    <main className="w-2/5 p-3 shadow-md bg-white rounded-md flex max-[1370px]:flex-col">
      <section className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-center text-xl text-gray-600 font-bold">Monto en ARS</h2>
        <input type="number" value={amount} onChange={handleChange} className="bg-gray-100 my-4 focus:outline-none h-11 w-40 rounded-md px-2"/>
      </section>
      <section className="flex-1 h-auto bg-green-700 rounded-md flex flex-col gap-5 p-5">
        <h2 className="text-white font-bold text-center">Cotizaciones</h2>
        {
          loading ? <Skeleton /> : (
            Object.entries(dollarPrices).map(elem => {
              return <DolarCard key={elem[0]} dollarType={elem[0]} amount={amount} dollarValues={elem[1]} />
            })
          )
        }
      </section>
    </main>
  )
}
