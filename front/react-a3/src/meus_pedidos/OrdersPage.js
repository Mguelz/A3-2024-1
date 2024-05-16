import React from 'react';
import OrderCard from './OrderCard';

const OrdersPage = ({ orders }) => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Meus Pedidos</h2>
      <div className="row">
        {orders.map((order, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <OrderCard order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
