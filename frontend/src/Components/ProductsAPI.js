import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Mock Data Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '200px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>
              {product.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              {product.description.slice(0, 60)}...
            </p>
            <p style={{ fontWeight: 'bold', color: '#333' }}>
              Price: ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAPI;
