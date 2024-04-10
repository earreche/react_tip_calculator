import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (item: OrderItem) => void
}
export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
      <h2 className='font-black text-4xl'>
        Invoice
      </h2>
      <div className="space-y-3 mt-10">
        { order.map( item => (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div className="">
                <p className="text-lg">
                  {item.name} -  {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: { item.quantity} - {formatCurrency(item.price * item.quantity) }
                </p>
            </div>
            <div className="">
              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick= {() => removeItem(item)}
              >
                X
              </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
