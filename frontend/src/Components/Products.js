import React from 'react';
import { useParams } from 'react-router-dom';

// Sample product data
const products = [
  { pid: 'P001', pname: 'Product 1', price: '$10' },
  { pid: 'P002', pname: 'Product 2', price: '$20' },
  { pid: 'P003', pname: 'Product 3', price: '$30' },
  { pid: 'P004', pname: 'Product 4', price: '$40' },
];

const Products = () => {
  const { productId } = useParams(); // Get productId from URL
  const product = products.find(p => p.pid === productId); // Find the product by ID

  return (
    <div>
      <h1>Products List</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Render hardcoded product data */}
          {products.map((product) => (
            <tr key={product.pid}>
              <td>{product.pid}</td>
              <td>{product.pname}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render product details if found */}
      {product ? (
        <div style={{ marginTop: '20px' }}>
          <h2>Product Details</h2>
          <p>
            <strong>Product ID:</strong> {product.pid}
          </p>
          <p>
            <strong>Product Name:</strong> {product.pname}
          </p>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Products;