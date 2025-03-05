import React, { useState, useEffect, useCallback } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api/products";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", quantity: "", price: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  // ✅ Fetch products from the backend
  const fetchProducts = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("Fetched products:", data); // Debugging ✅
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // ✅ Add a new product
  const handleAddProduct = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        fetchProducts();
        setNewProduct({ name: "", quantity: "", price: "" }); // Clear input fields
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  // ✅ Handle delete
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => fetchProducts())
      .catch((error) => console.error("Error deleting product:", error));
  };

  // ✅ Handle edit button click
  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({ name: product.name, quantity: product.quantity, price: product.price });
  };

  // ✅ Update product after editing
  const handleUpdateProduct = () => {
    if (!editingProduct) return;

    fetch(`${API_URL}/${editingProduct._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        fetchProducts();
        setEditingProduct(null);
        setNewProduct({ name: "", quantity: "", price: "" }); // Clear input fields
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div>
      <h2>Product List</h2>
      <input name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleChange} />
      <input name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />

      {editingProduct ? (
        <button onClick={handleUpdateProduct}>Update Product</button>
      ) : (
        <button onClick={handleAddProduct}>Add Product</button>
      )}

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - Quantity: {product.quantity} - ${product.price}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;