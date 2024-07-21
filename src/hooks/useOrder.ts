import { useState } from "react"
import { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const itemeExists = order.find(orderItem => orderItem.id === item.id)
    if (itemeExists) {
      const updateOrder = order.map(
        orderItem => orderItem.id === item.id 
          ? {...item, quantity: orderItem.quantity + 1} 
          : orderItem
      )
      setOrder(updateOrder);
    } else {
      const newItem = {...item, quantity: 1}
      setOrder([...order, newItem])
    }
  }

  console.log({order})
  
  return {
    addItem,
  }
}