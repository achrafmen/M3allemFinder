# M3allem Finder 🛠️

M3allem Finder is a modern web application built to connect users with skilled artisans for various home services like plumbing, electricity, air conditioning, and locksmithing. 

This project is a functional prototype designed and built using the **MERN (MongoDB, Express, React, Node.js)** stack and styled with **Tailwind CSS**.

## Features ✨
- **Service Categories:** Browse easily through different types of repair services.
- **Urgent Requests:** Quickly submit an issue with a detailed description to find an available professional.
- **Artisan Selection:** View artisans' availability, estimated arrival times, ratings, and pricing before selecting one.
- **Order Tracking:** Track the real-time status of your service request.
- **Fully Responsive Design:** The UI is crafted to look stunning on both mobile and desktop screens.

## Tech Stack 💻
- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 

## Getting Started 🚀

### Prerequisites
Make sure you have Node.js and MongoDB installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/achrafmen/M3allemFinder.git
   cd "M3allemFinder"
   ```

2. **Install Backend Dependencies and Start the Server:**
   ```bash
   cd server
   npm install
   npm run seed  # Seed the database with initial artisan and category data
   npm run dev   # Start the backend server on port 5001
   ```

3. **Install Frontend Dependencies and Start the Client:**
   Open a new terminal window:
   ```bash
   cd client
   npm install
   npm run dev   # Start the React app on port 5173
   ```

4. **Access the App:** 
   Open `http://localhost:5173` in your browser.

## Project Structure 📁
- `/client`: Contains the React frontend application.
- `/server`: Contains the Express.js backend API and MongoDB models.
- `/html`: Contains the initial HTML/CSS mockups that were used during the design phase.