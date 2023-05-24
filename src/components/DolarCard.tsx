interface Dollar {
  buy: string
  sell: string
}

interface Props {
  dollarType: string
  dollarValues: Dollar
  amount: string 
}

export const DolarCard = ({ dollarType, dollarValues, amount }: Props) => {
  return (
    <div>
        <h3 className="text-center bg-blue-400 rounded-t-md text-white">Dólar blue</h3>
        <div className="flex px-5 bg-gray-100 shadow-md rounded-b-md justify-between">
        <div className="text-center">
            <h3 className="text-gray-500 font-medium text-sm">COMPRA</h3>
            <p className="text-green-700 font-bold text-xl">$ 481,00</p>
            <p className="text-gray-500 text-sm">$ 249,48</p>
        </div>
        <div className="text-center">
            <h3 className="text-gray-500 font-medium text-sm">VENTA</h3>
            <p className="text-green-700 font-bold text-xl">$ 481,00</p>
            <p className="text-gray-500 text-sm">$ 249,48</p>
        </div>
        </div>
    </div>
  )
}
