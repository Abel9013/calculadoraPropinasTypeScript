import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder";

function App() {
  
  const { order, addItem ,removeItem,  tip, setTip, placeOrder } = useOrder ()
  


  return (
    <>
     <header className="bg-lime-200 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
     </header>
     <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem key={item.id} 
                        item={item} 
                        addItem={addItem} 
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-lime-400 p-5 rounded-lg space-y-10">
          {order.length  ? (
           <>
              <OrderContents 
                order={order} 
                removeItem={removeItem} 
              />
              <TipPercentageForm 
                setTip = {setTip}
                tip={tip}
              />
              <OrderTotals 
                order={order} 
                tip={tip}
                placeOrder={placeOrder}
              />    
            </>) : <p className="text-center font-medium text-2xl">"Comience escogiendo algo del menu para ordenar" </p>
           } 
          
          
        </div>
     </main>

    </>
  )
}

export default App
