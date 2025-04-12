import React, {useState} from 'react'
import CheckoutForm from "../components/client/Checkout/CheckoutForm"
import SummaryCard from '../components/client/Checkout/SummaryCard'
import DetailsCard from '../components/client/Checkout/DetailsCard'

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  return (
    <div className='py-10 px-4 sm:px-6 lg:px-16 bg-gray-50 min-h-screen font-sans'>
      <header className='mb-10 text-center lg:text-left'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900'>Checkout</h2>
      </header>

      <main className='flex flex-col lg:flex-row items-start justify-between gap-6'>
        <section className="w-full lg:w-2/3 space-y-10">
          <CheckoutForm  formData={formData} setFormData={setFormData}/>
          <DetailsCard user={formData}/>
        </section>

        <aside className="w-full lg:w-1/3 sticky top-24">
          <SummaryCard />
        </aside>

      </main>
    </div>
  )
}

export default CheckoutPage
