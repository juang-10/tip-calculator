import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from '../helpers/index';

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
}

export const OrderTotals = ({ order, tip }: OrderTotalsProps ) => {

  const subTotalAmount = useMemo(() => {
    return order.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
  }, [order])

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [subTotalAmount, tipAmount])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totals and Tips:</h2>
        <p>Subtotal payable {''}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>Tip {''}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>Total payable {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      
      <button>

      </button>
    </>
  )
}