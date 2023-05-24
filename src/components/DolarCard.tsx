interface Dollar {
  buy: string
  sell: string
}

interface Props {
  dollarType: string
  dollarValues: Dollar
  amount: string 
}

const colors = {
  "Dólar blue": "bg-blue-400",
  "Dólar oficial": "bg-orange-400",
  "Dólar bolsa": "bg-pink-400"
}


export const DolarCard = ({ dollarType, dollarValues, amount }: Props) => {
  const buy = dollarValues.buy.slice(1)
  const sell = dollarValues.sell.slice(1)

  const totalPriceBuy = (Number(amount) / Number(buy)).toFixed(2)
  const totalPriceSell = (Number(amount) / Number(buy)).toFixed(2)

  return (
    <div>
        <h3 className={`text-center rounded-t-md ${colors[dollarType]} text-white`}>{dollarType}</h3>
        <div className="flex px-5 bg-gray-100 shadow-md rounded-b-md justify-between">
        <div className="text-center">
            <h3 className="text-gray-500 font-medium text-sm">COMPRA</h3>
            <p className="text-green-700 font-bold text-xl">{dollarValues.buy}</p>
            <p className="text-gray-500 text-sm">$ {totalPriceBuy}</p>
        </div>
        <div className="text-center">
            <h3 className="text-gray-500 font-medium text-sm">VENTA</h3>
            <p className="text-green-700 font-bold text-xl">{dollarValues.sell}</p>
            <p className="text-gray-500 text-sm">$ {totalPriceSell}</p>
        </div>
        </div>
    </div>
  )
}
