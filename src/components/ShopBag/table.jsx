import {MdDelete} from "react-icons/md";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../features/cart/cartSlice.js";

const CartTable = ({data = []}) => {

    const dispatch = useDispatch();
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    return (<div className="w-full space-y-3 py-4">
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right bg-white text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Subtotal
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (<tr className="bg-white border-b" key={item.id}>
                    <th scope="row"
                        className="px-6 py-4 flex items-center gap-2">
                        <img className="w-14 h-14" src={item.image} alt={item.title}/>
                        <span className="font-medium text-gray-900 whitespace-nowrap">{item.title}</span>
                    </th>
                    <td className="px-6 py-4">
                        {item.price}
                    </td>
                    <td className="px-6 py-4">
                        {item.quantity}
                    </td>
                    <td className="px-6 py-4">
                        {item.price * item.quantity}
                    </td>
                    <td><button onClick={()=>handleRemoveFromCart(item.id)}><MdDelete size={20} /></button></td>
                </tr>))}
                </tbody>
            </table>
        </div>
    </div>);
};

export default CartTable;
