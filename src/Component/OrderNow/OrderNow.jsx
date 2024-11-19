import React, { useState } from 'react';
import './OrderNow.css'; 
import { toast } from 'react-toastify';

function OrderNow() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit_card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const user=localStorage.getItem('userEmail')
  const handleSubmit = (e) => {
    e.preventDefault();
    toast('Your order is on its way to you')
  };

  return (
    <div className="oorder-now-container">
      <h2>Order Now For <span>{user}</span> </h2>
      <form onSubmit={handleSubmit}>
        <div className="oform-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="oform-group">
          <label htmlFor="number">number:</label>
          <input
            type="number"
            id="number"
            number="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="oform-group">
          <label htmlFor="address">Shipping Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="oform-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="obtn-submit">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default OrderNow;
