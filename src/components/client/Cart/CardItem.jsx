import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from "../../../context/CartContext"

const CardItem = ({ thumbnail, title, price }) => {
  const [qty, setQty] = useState(1)
  const [total, setTotal] = useState(price)
  const { finalAmount, setFinalAmount } = useContext(CartContext);

  useEffect(() => {
    setTotal(qty * price);
  }, [qty, price]);

  const handleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQty(value);
  }

  useEffect(() => {
    setFinalAmount((prevAmount) => prevAmount + total);
  }, [total]);

  return (
    <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
      <td className="w-24 h-24 p-2">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-md shadow-sm" />
      </td>

      <td className="px-4 py-2">
        <h3 className='font-semibold text-base text-gray-800'>
          {title}
        </h3>
        <button className='mt-2 text-sm hover:underline cursor-pointer'>Remove</button>
      </td>

      <td className="text-gray-700 px-4 py-3 font-light">${price.toFixed(2)}</td>

      <td className="px-4 py-2">
        <input
          type="number"
          value={qty}
          min={1}
          className="w-20 h-10 border-2 p-2 rounded-lg border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
        />
      </td>

      <td className="px-4 py-2 font-medium text-gray-800">${total.toFixed(2)}</td>
    </tr>
  )
}

export default CardItem
