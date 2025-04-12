import React from 'react'

const CheckoutForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <h2 className="text-xl font-bold mb-6"> Shipping Address</h2>

      <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="address1">
            Address Line 1
          </label>
          <input
            name="address1"
            type="text"
            value={formData.address1}
            onChange={handleChange}
            placeholder="1234 Elm Street"
            autoComplete="address-line1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="address2">
            Address Line 2 <span className="text-gray-400 text-sm">(Optional)</span>
          </label>
          <input
            name="address2"
            type="text"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Apt 56B, Oakwood Towers"
            autoComplete="address-line2"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="city">
              City
            </label>
            <input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="Jaipur, Rajasthan"
              autoComplete="address-level2"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="state">
              State
            </label>
            <input
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              autoComplete="address-level2"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Pincode
            </label>
            <input
              name="pincode"
              type="text"
              value={formData.zip}
              onChange={handleChange}
              placeholder="ZIP Code"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              maxLength={6}
              inputMode="numeric"
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default CheckoutForm
