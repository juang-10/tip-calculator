import { useState } from "react"
import { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id)
    if (itemExists) {
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

  const removeItem = (id: MenuItem['id']) => {
    const idExists = order.find(item => item.id === id);
    
    if(idExists && idExists?.quantity > 1 ){
      const updateOrder = order.map(
        orderItem => orderItem.id === idExists.id 
          ? {...idExists, quantity: orderItem.quantity - 1} 
          : orderItem
      )
      setOrder(updateOrder);
    } else {
      const newOrder = order.filter((item) => item.id !== id);
      setOrder( newOrder );
    }
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem
  }
}