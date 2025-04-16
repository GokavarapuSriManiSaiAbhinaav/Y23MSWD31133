import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductMList() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_PRODUCTS_API_URL || 'http://localhost:5555/api/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const saveProduct = async () => {
    try {
      const productData = { name, price, category };
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, productData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, productData);
      }
      setName('');
      setPrice('');
      setCategory('');
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const editProduct = (product) => {
    setEditingId(product._id);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product List
      </Typography>

      <Box component="form" sx={{ mb: 4 }} noValidate autoComplete="off">
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Price"
            variant="outlined"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button
            variant="contained"
            color={editingId ? 'warning' : 'primary'}
            fullWidth
            onClick={saveProduct}
          >
            {editingId ? 'Update Product' : 'Add Product'}
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} key={product._id}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Box>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${product.price} | Category: {product.category}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton color="warning" onClick={() => editProduct(product)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => deleteProduct(product._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt={2}>
                  <QRCode
                    value={`Product Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`}
                    size={128}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductMList;
