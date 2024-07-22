import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from '../helpers/index';

type OrderTotalsProps = {
  order: OrderItem[];
}

export const OrderTotals = ({ order }: OrderTotalsProps ) => {

  const subTotalAmount = useMemo(() => {
    return order.reduce((acc, item) => {
      console.log({acc, item})
      return acc + (item.price * item.quantity)
    }, 0)
  }, [order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totals and Tips:</h2>
        <p>Subtotal payable {''}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>Tip {''}
          <span className="font-bold">$0</span>
        </p>
        <p>Total payable {''}
          <span className="font-bold">$0</span>
        </p>
      </div>
      
      <button>

      </button>
    </>
  )
}