import React from 'react';

const DetailsCard = ({user}) => {

  return (
    <section className="w-full bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Delivery Details</h2>

      <div className="text-sm text-gray-700 leading-relaxed space-y-1">
        <p><strong>Name:</strong> {user.name || '-'}</p>
        <p><strong>Email:</strong> {user.email || '-'}</p>
        <p><strong>Address:</strong></p>
        <p>
          {user.address1 || ''} <br />
          {user.address2 && <>{user.address2}<br /></>}
          {user.city}, {user.state} - {user.zip}
        </p>
      </div>
    </section>
  );
};

export default DetailsCard;
