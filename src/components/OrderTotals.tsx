import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalProps) {
  const subTotalAmount = useMemo(()  => order.reduce( (total,item) => total + item.quantity * item.price,0), [order])
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
  const totalAmount = useMemo(() => subTotalAmount + tipAmount,[tip, order])
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">
          Total with tip
        </h2>
        <p>
          Subtotal to pay:{ ' ' }
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Tip:{ ' ' }
          <span className="font-bold"> {formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Grand Total:{ ' ' }
          <span className="font-bold"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick = {() => placeOrder()}
      >
          Save Order
      </button>
    </>
  )
}
