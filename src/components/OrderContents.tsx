import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id:MenuItem["id"]) => void;
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h1 className="font-black text-4xl">Consumo</h1>
        <div className="space-y-3 mt-10">
           {
                order.map(item => (
                    <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" key={item.id}>
                        <div className="">
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                            </p>
                        </div>
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-medium" onClick={()=> removeItem(item.id)}>
                        X
                        </button>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}
