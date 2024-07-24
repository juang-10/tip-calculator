import { MenuItems } from "./components/MenuItems"
import { OrderContent } from "./components/OrderContent";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip calculator and inquiries</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItems 
                key={ item.id }
                item={ item }
                addItem={ addItem }
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          { order.length > 0 ? (
            <>
              <OrderContent 
                order={ order }
                removeItem={ removeItem }
              />
              <TipPercentageForm 
                setTip={ setTip }
                tip={ tip }
              />
              <OrderTotals 
                order={ order }
                tip={ tip }
                placeOrder={ placeOrder }
              />
            </>
          ) : (
            <p className="text-center">The order is empty</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
