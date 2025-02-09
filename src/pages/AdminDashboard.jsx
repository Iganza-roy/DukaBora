import { useEffect, useState } from 'react';
import {
  fetchProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../utils/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formMode, setFormMode] = useState('create');
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    stock: 0,
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formMode === 'create') {
      await createProduct(formData);
    } else {
      await updateProduct(selectedProduct.id, formData);
    }
    setFormMode('create');
    setFormData({ title: '', price: '', description: '', image: '', stock: 0 });
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
      const updatedProducts = await fetchProducts();
      setProducts(updatedProducts);
    }
  };

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Sales',
        data: [200, 300, 500, 700],
        borderColor: '#FF5757',
      },
    ],
  };

  const productComparisonData = {
    labels: ['Clothes', 'Jewellery', 'electronics'],
    datasets: [
      {
        label: 'Sales',
        data: [400, 350, 300],
        backgroundColor: ['#FF5757', '#000', '#888'],
      },
    ],
  };

  const inventoryData = {
    labels: ['In Stock', 'Out of Stock'],
    datasets: [{ data: [80, 20], backgroundColor: ['#FF5757', '#000'] }],
  };

  return (
    <Container>
      <Typography
        variant='h4'
        sx={{ color: '#FF5757', fontWeight: 'bold', mb: 4 }}
      >
        Admin <span className='text-black'>Dashboard</span>
      </Typography>

      <Grid container spacing={3} className='bg-white p-4 rounded-lg shadow-xl'>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{ padding: 2, textAlign: 'center', backgroundColor: '#FFF3F3' }}
          >
            <Typography
              variant='h6'
              sx={{ color: '#FF5757', fontWeight: 'bold' }}
            >
              Sales Performance
            </Typography>
            <Line key={JSON.stringify(salesData)} data={salesData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{ padding: 2, textAlign: 'center', backgroundColor: '#E8E8E8' }}
          >
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              Product Comparison
            </Typography>
            <Bar
              key={JSON.stringify(productComparisonData)}
              data={productComparisonData}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{ padding: 2, textAlign: 'center', backgroundColor: '#F0F0F0' }}
          >
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              Inventory Status
            </Typography>
            <Doughnut
              key={JSON.stringify(inventoryData)}
              data={inventoryData}
            />
          </Paper>
        </Grid>
      </Grid>

      <Typography variant='h5' sx={{ fontWeight: 'bold', mt: 4 }}>
        Product Management
      </Typography>

      <Paper sx={{ padding: 3, backgroundColor: '#FFff' }}>
        <form onSubmit={handleFormSubmit}>
          <p className='text-2xl font-bold mb-2'>Add Product</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label='Product Title'
                variant='outlined'
                fullWidth
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Price'
                type='number'
                variant='outlined'
                fullWidth
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Description'
                variant='outlined'
                fullWidth
                multiline
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Image URL'
                variant='outlined'
                fullWidth
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Stock'
                type='number'
                variant='outlined'
                fullWidth
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            variant='contained'
            sx={{
              mt: 2,
              backgroundColor: '#FF5757',
              color: '#FFF',
              borderRadius: 3,
              height: 40,
            }}
          >
            {formMode === 'create' ? 'Add Product' : 'Update Product'}
          </Button>
        </form>
      </Paper>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        {products.map((product) => (
          <Grid item xs={12} md={3} key={product.id}>
            <Paper
              sx={{
                padding: 2,
                textAlign: 'center',
                backgroundColor: '#F0F0F0',
                width: '100%',
              }}
              className='w-70 flex flex-col items-center justify-center'
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ objectFit: 'cover' }}
                className='h-60'
              />
              <Typography variant='h6' sx={{ mt: 1, fontWeight: 'bold' }}>
                {product.title}
              </Typography>
              <Typography
                variant='h5'
                sx={{ color: '#FF5757', fontWeight: 'bold' }}
              >
                ${product.price}
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '10px',
                }}
              >
                <IconButton
                  onClick={() => {
                    setFormMode('edit');
                    setSelectedProduct(product);
                    setFormData(product);
                  }}
                >
                  <Edit sx={{ color: '#000' }} />
                </IconButton>
                <IconButton onClick={() => handleDeleteProduct(product.id)}>
                  <Delete sx={{ color: '#FF5757' }} />
                </IconButton>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
