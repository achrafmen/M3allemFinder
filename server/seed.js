import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User, Category, Artisan, Order } from './models.js';

dotenv.config();

mongoose.connect('mongodb://127.0.0.1:27017/m3allem-finder')
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => {
    console.error('Connection error', err);
    process.exit(1);
  });

const seedData = async () => {
  try {
    await User.deleteMany({});
    await Category.deleteMany({});
    await Artisan.deleteMany({});
    await Order.deleteMany({});

    // Create User
    const user = await User.create({
      name: 'Amine',
      email: 'amine@example.com',
      phone: '06 12 34 56 78',
      address: 'Casa Finance City, Casablanca',
      avatar: 'AM'
    });

    // Create Categories
    const catPlombier = await Category.create({ name: 'Plomberie', icon: 'droplet', bg: '#edf7ff', color: '#2ca7eb', eta: 'Disponible', isUrgent: true });
    const catElectricite = await Category.create({ name: 'Électricité', icon: 'zap', bg: '#fff9e8', color: '#f0ad0c', eta: 'Disponible', isUrgent: true });
    const catClimatisation = await Category.create({ name: 'Climatisation', icon: 'wind', bg: '#ecfbff', color: '#21b4d9', eta: '~30 min', isUrgent: true });
    const catSerrurerie = await Category.create({ name: 'Serrurerie', icon: 'key', bg: '#f2f5f9', color: '#7e889c', eta: '~45 min', isUrgent: true });

    // Other categories without artisan objects just for visual
    await Category.insertMany([
      { name: 'Menuiserie', icon: 'hammer', isUrgent: false },
      { name: 'Jardinage', icon: 'leaf', isUrgent: false },
      { name: 'Peinture', icon: 'paint-roller', isUrgent: false },
      { name: 'Rénovation', icon: 'home', isUrgent: false },
      { name: 'Déménagement', icon: 'truck', isUrgent: false },
      { name: 'Ménage', icon: 'sparkles', isUrgent: false },
      { name: 'Désinsectisation', icon: 'bug', isUrgent: false },
    ]);

    // Create Artisans
    const a1 = await Artisan.create({
      name: 'Hamza Plombier',
      category: catPlombier._id,
      avatar: '/assets/plumba.jpg',
      rating: 4.9,
      reviewsCount: 128,
      isVerified: true,
      isPro: true,
      distance: '2.4 km',
      eta: '15 min',
      specialty: 'Plombier - Urgent',
      priceStr: '150 DH',
      priceValue: 150
    });

    const a2 = await Artisan.create({
      name: 'Rachid Mst',
      category: catPlombier._id,
      avatar: '/assets/user.jpg',
      rating: 4.7,
      reviewsCount: 84,
      isVerified: true,
      isPro: false,
      distance: '3.1 km',
      eta: '25 min',
      specialty: 'Plombier - Fuites',
      priceStr: '120 DH',
      priceValue: 120
    });

    const a3 = await Artisan.create({
      name: 'Hassan Elec',
      category: catElectricite._id,
      avatar: '/assets/user.jpg',
      rating: 4.8,
      reviewsCount: 96,
      isVerified: true,
      isPro: true,
      distance: '1.5 km',
      eta: '10 min',
      specialty: 'Électricien - Pannes',
      priceStr: '200 DH',
      priceValue: 200
    });

    // Create Sample Orders
    await Order.create({
      userId: user._id,
      artisan: a1._id,
      category: catPlombier._id,
      description: 'Fuite d\'eau sous l\'évier',
      address: 'Casa Finance City, appartement 24',
      problemType: 'Fuite d\'eau',
      status: 'En route',
      paymentMethod: 'Espèces',
      price: 150
    });

    await Order.create({
      userId: user._id,
      artisan: a3._id,
      category: catElectricite._id,
      description: 'Coupure de courant générale',
      address: 'Casa Finance City, appartement 24',
      problemType: 'Panne totale',
      status: 'Terminée',
      paymentMethod: 'Carte Bancaire',
      price: 200
    });

    console.log('Database seeded successfully!');
    process.exit(0);

  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedData();
