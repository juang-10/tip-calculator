import { OrderItem } from "../types"

type OrderContentProps = {
  order: OrderItem[],
}

export const OrderContent = ({ order }: OrderContentProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumption</h2>

      <div className="space-y-3 mt-5">
        { order.length === 0 
          ? <p className="text-center">The order is empty</p>
            
          : (
            order.map(item => (
              <div key={item.id}>
                <p>
                  {item.name}
                </p>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}