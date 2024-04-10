import { useState } from 'react'
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item : MenuItem) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    if (itemIndex === -1){
      const newItem = { ...item, quantity: 1}
      setOrder([...order, newItem])
    }else{
      const newOrder = [ ...order ]
      newOrder[itemIndex].quantity = newOrder[itemIndex].quantity + 1
      setOrder(newOrder)
    }
  }

  const removeItem = (item : MenuItem) => {
    setOrder(order.filter(ordeItem => ordeItem.id !== item.id))
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}