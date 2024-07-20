import { MenuItems } from "./components/MenuItems"
import { menuItems } from "./data/db"

function App() {



  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip calculator and inquiries</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems 
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>

        <div>
          <h2>Consumption</h2>
        </div>
      </main>
    </>
  )
}

export default App
