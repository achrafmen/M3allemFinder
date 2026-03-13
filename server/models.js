import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  avatar: String
}, { timestamps: true });

const categorySchema = new mongoose.Schema({
  name: String,
  icon: String,
  color: String,
  bg: String,
  eta: String,
  isUrgent: Boolean
}, { timestamps: true });

const artisanSchema = new mongoose.Schema({
  name: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  avatar: String,
  rating: Number,
  reviewsCount: Number,
  isVerified: Boolean,
  isPro: Boolean,
  distance: String,
  eta: String,
  specialty: String,
  priceStr: String,
  priceValue: Number
}, { timestamps: true });

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  artisan: { type: mongoose.Schema.Types.ObjectId, ref: 'Artisan' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  description: String,
  address: String,
  problemType: String,
  status: { 
    type: String, 
    enum: ['En cours', 'En route', 'Terminée', 'Annulée'],
    default: 'En cours'
  },
  paymentMethod: String,
  price: Number
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
export const Category = mongoose.model('Category', categorySchema);
export const Artisan = mongoose.model('Artisan', artisanSchema);
export const Order = mongoose.model('Order', orderSchema);
