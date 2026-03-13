import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { User, Artisan, Category, Order } from './models.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/m3allem-finder')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/profile', async (req, res) => {
  const user = await User.findOne();
  res.json(user);
});

app.get('/api/categories', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

app.get('/api/artisans', async (req, res) => {
  const artisans = await Artisan.find();
  res.json(artisans);
});

app.get('/api/artisans/:id', async (req, res) => {
  const artisan = await Artisan.findById(req.params.id);
  if (!artisan) return res.status(404).json({ message: 'Artisan not found' });
  res.json(artisan);
});

app.get('/api/orders', async (req, res) => {
  const orders = await Order.find().populate('artisan').populate('category').sort({ createdAt: -1 });
  res.json(orders);
});

app.get('/api/orders/:id', async (req, res) => {
  const order = await Order.findById(req.params.id).populate('artisan').populate('category');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});

app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.patch('/api/orders/:id/status', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
