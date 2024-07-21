import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderContentProps = {
  order: OrderItem[],
}

export const OrderContent = ({ order }: OrderContentProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumption</h2>

      <div className="space-y-3 mt-10">
        { order.length === 0 
          ? <p className="text-center">The order is empty</p>
            
          : (
            order.map(item => (
              <div 
                key={item.id}
                className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
              >
                <div>
                  <p className="text-lg">
                    {item.name} - {formatCurrency(item.price)}
                  </p>
                  <p className="font-black">
                    Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}