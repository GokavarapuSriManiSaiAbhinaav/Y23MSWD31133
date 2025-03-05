import React from 'react'

const Track = ({ purchaseid, customername, expecteddeliverydate, status, deliverypersondetails}) => {
  return (
    <div>
      <h2>Track Details</h2>
      <p>Purchase ID: {purchaseid}</p>
      <p>Customer Name: {customername}</p>
      <p>Expected Delivery Date: {expecteddeliverydate}</p>
      <p>Status: {status}</p>
      <p>Delivery Person Details: {deliverypersondetails}</p>
    </div>
  )
}

export default Track