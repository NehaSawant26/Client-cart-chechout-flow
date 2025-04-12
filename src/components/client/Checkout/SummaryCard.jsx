import React from 'react';
import CouponForm from '../CouponForm';

const SummaryCard = () => {
  const subtotal = 10.0;
  const discount = 0.89;
  const shipping = 4.0;
  const tax = 2.08;

  const finalAmount = (subtotal - discount + shipping + tax).toFixed(2);

  return (
    <section className="bg-white text-gray-800 w-full max-w-lg mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:p-10 rounded-xl shadow-md space-y-6">
      <h3 className="text-2xl mb-4 font-semibold">Checkout Summary</h3>
      <CouponForm />

      <div className="space-y-3 text-sm sm:text-base font-medium text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal (1 items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
        <span>Coupon Discount</span>
        <span className="text-green-600">- ${discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
        <span>Shipping Charge</span>
        <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
        <span>Sales Tax</span>
        <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <hr className="h-px my-4 bg-gray-300" />

      <div className="font-semibold text-xl flex justify-between items-center mb-4 text-gray-900">
      <span>Final Amount</span>
      <span>${finalAmount}</span>
      </div>

      <button className="bg-blue-600 text-white text-xl font-medium text-center w-full py-3 cursor-pointer transition duration-200">
        Place Order
      </button>
    </section>
  );
};

export default SummaryCard;
