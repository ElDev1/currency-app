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
    const result: DollarPrices = {}

    for(const dollar of dollars) {
        const {type, url} = dollar

        const res = await fetch(url, { cache: 'no-store' })

        console.log(res)
    }
}
