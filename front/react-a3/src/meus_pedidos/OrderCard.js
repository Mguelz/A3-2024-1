import React, { useState } from 'react';

const OrderCard = ({ order }) => {
  const { orderNumber, status, purchaseDate, paymentMethod, orderDetails } = order;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Número do Pedido: {orderNumber}</h5>
        <p className="card-text">Status: {status}</p>
        <p className="card-text">Data da Compra: {purchaseDate}</p>
        <p className="card-text">Tipo de Pagamento: {paymentMethod}</p>
        {showDetails && (
          <p className="card-text">Detalhes da Compra: {orderDetails}</p>
        )}
        <button className="btn btn-warning" onClick={toggleDetails}>
          {showDetails ? 'Esconder Detalhes' : 'Mostrar Detalhes'}
        </button>
        
      </div>
    </div>
  );
};

export default OrderCard;
