import React, { useEffect, useState, useContext } from 'react'
import CardItem from '../components/client/Cart/CardItem'
import { CartContext } from "../context/CartContext"
import { useNavigate } from 'react-router-dom'

const CardPage = () => {
  const [items, setItems] = useState([])
  const { finalAmount } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    const getdata = async () => {
      try{
        const response = await fetch("/data.json")
        const data = await response.json()
        setItems(data);
      }catch(error){
        console.error("Failed to fetch cart data:", error);
      }
    }

    getdata()
  }, [])

  return (
    <div className='py-10 px-4 sm:px-6 lg:px-16 font-sans bg-gray-50 min-h-screen'>
      <header className='mb-10 text-center lg:text-left'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-2'>Your Cart</h2>
        <p className="text-sm text-gray-500">Items in your cart will be shipped upon checkout</p>
      </header>

      <main className='flex flex-col lg:flex-row-reverse gap-6'>

        <section className='w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6 lg:sticky lg:top-24 h-fit'>
          <div className='flex justify-between items-center text-lg font-semibold mb-3 text-gray-800'>
            <h3>Estimated Total</h3>
            <h3 className='text-xl'>${finalAmount.toFixed(2)}</h3>
          </div>

          <p className='text-sm mb-4 text-gray-500'>Sales Tax will be calculated during checkout</p>

          <button
            className=' w-full bg-blue-600 hover:bg-blue-700 text-white text-xl text-center py-3 cursor-pointer font-medium transition duration-200'
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </section>

        <section className='w-full lg:w-2/3'>
        <div className="overflow-x-auto rounded-lg bg-white shadow-md">
            <table className="min-w-full text-primary border-separate border-spacing-0">
              <thead className="bg-background-alt text-left">
                <tr className="border-b border-gray-300 text-left">
                  <th className="py-3 px-4 ">Product</th>
                  <th className="py-3 px-4"></th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Total</th>
                </tr>
              </thead>

              <tbody>
                {items.map(item => (
                  <CardItem
                    key={item.id}
                    thumbnail={item.image}
                    title={item.name}
                    price={item.price}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CardPage
