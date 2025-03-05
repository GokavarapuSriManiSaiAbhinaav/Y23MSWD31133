import React from 'react'

const Order = ({ordered, orderdate, customername, address, deliverydate, modeofpayment}) => {
  return (
    <div>
    <h2>Order Details</h2>
    <p>Order ID: {ordered}</p>
    <p>Order Date: {orderdate}</p>
    <p>Customer Name: {customername}</p>
    <p>Address: {address}</p>
    <p>Delivery Date: {deliverydate}</p>
    <p>Mode of Payment: {modeofpayment}</p>
  </div>
  )
}

export default Order