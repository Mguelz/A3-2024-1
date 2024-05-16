import React from 'react';
import OrdersPage from './OrdersPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const orders = [
    {
      orderNumber: '1',
      status: 'Em processamento',
      purchaseDate: '10/05/2024',
      paymentMethod: 'Cartão de Crédito',
      orderDetails: 'Show de Sertanejo',
    },
    {
      orderNumber: '2',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Pix',
      orderDetails: 'Show de Funk',
    },
    {
      orderNumber: '3',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Cartão débito',
      orderDetails: 'Show de Pagode',
    },
    {
      orderNumber: '4',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Pix',
      orderDetails: 'Show de Samba',
    },
    {
      orderNumber: '5',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Pix',
      orderDetails: 'Show de Rock',
    },
    {
      orderNumber: '6',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Boleto',
      orderDetails: 'Festival RaveFunk',
    },
  ];

  return (
    <div className="App">
      <OrdersPage orders={orders} />
    </div>
  );
}

export default App;
