import { url } from 'inspector'
import { JSDOM } from 'jsdom'

type DollarName = 'Dólar blue' | 'Dólar oficial' | 'Dólar bolsa' 

interface Dolar {
    buy: string
    sell: string
}

type DollarPrices = {
    [key in DollarName]?: Dolar
  }

interface DollarTypes {
    type: DollarName,
    url: string
}

const dollars: DollarTypes[] = [
    {
        type: 'Dólar blue',
        url: 'https://dolarhoy.com/cotizaciondolarblue'
    },
    {
        type: 'Dólar oficial',
        url: 'https://dolarhoy.com/cotizaciondolaroficial'
    },
    {
        type: 'Dólar bolsa',
        url: 'https://dolarhoy.com/cotizaciondolarbolsa'
    }
]

export const getDollarPrices = async () => {
    const results: DollarPrices = {}

    for(const dollar of dollars) {
        const {type, url} = dollar

        const res = await fetch(url, { cache: 'no-store' })

        if(!res.ok) throw new Error(`Error fetching, ${res.status}`)

        const page = await res.text()
        const dom = new JSDOM(page)
        const document = dom.window.document

        const values: HTMLDivElement[] = Array.from(document.querySelectorAll('.value'))
        const buy = values[0]?.textContent
        const sell = values[1]?.textContent

        if(buy !== null && sell !== null) {
          const result = {  buy, sell }
          results[type] = result  
        }
    }
    return results
}
