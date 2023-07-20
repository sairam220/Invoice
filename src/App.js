import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoicedate: '',
    invoicenumber: '',
    invoiceamount: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/add_invoice', invoiceData);
      alert('Invoice added successfully');
      setInvoiceData({
        invoicedate: '',
        invoicenumber: '',
        invoiceamount: '',
      });
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };

  return (
    <div className="App">
      <h1>Add Invoice</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label for='date'>Invoice Date</label>
          <input
            type="date"
            name="invoicedate"
            id='date'
            value={invoiceData.invoicedate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label for="number">Invoice Number</label>
          <input
            type="text"
            id='number'
            name="invoicenumber"
            value={invoiceData.invoicenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label for="amount">Invoice Amount</label>
          <input
            type="number"
            name="invoiceamount"
            id='amount'
            value={invoiceData.invoiceamount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='button-83'>Add Invoice</button>
      </form>
    </div>
  );
};

export default App;
