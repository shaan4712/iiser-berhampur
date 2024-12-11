# CAIF Instrument Booking System 🔬

A web application developed for IISER Berhampur's Central Advanced Instrumentation Facility (CAIF) that facilitates the booking and management of high-end laboratory instruments for corporate and government entities.

## Overview 📋

The CAIF Instrument Booking System streamlines the process of renting sophisticated laboratory equipment. Built with the MERN stack, it provides a user-friendly interface for browsing available instruments, managing reservations, and handling user authentication.

## Live link
[CAIF-IISER](https://iiser-berhampur.vercel.app/)

![image](https://github.com/user-attachments/assets/4be08480-d14d-46e4-8133-2ce9e89c3608)


## Features:

### User Interface
- **Responsive Landing Page**: Modern, mobile-friendly design
- **Intuitive Navigation**: Easy access to all platform features
- **Secure Authentication**: Protected routes and user verification

### Core Functionality
- **View Lab Section**
  - Interactive instrument carousel
  - Detailed instrument cards with specifications
  - Real-time availability status
  - Direct booking functionality
  - Pricing information

- **Reservations Management**
  - Current booking status
  - Reservation history
  - Real-time database updates
  - Booking modification options

## Tech Stack 🛠️

### Frontend
- React.js with Vite
- Bootstrap CSS
- Axios for API communication

### Backend
- Node.js
- Express.js
- MongoDB
- Authentication

## Installation & Setup 🚀

### Prerequisites
- Node.js (version 14.0 or higher)
- MongoDB
- npm or yarn package manager

### To run the project on the local-system:

1. Fork the repo
2. Clone the repo
   ```sh
   git clone https://github.com/shaan4712/iiser-berhampur.git
   ```
3. move to directory: `caif`
4. Install the required dependencies
   ```sh
   npm install
   ```
5. Run the project
   ```sh
   npm run dev
   ```
6. Run the server in parallel with the frontend by navigating to the directory: `server`
   ```sh
   node index.js
   ```
7. The client side run on http://localhost:5173/ (by default) and the server on http://localhost:5000/ 

### Environment Variables
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=your-server-link
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Database Schema 📊

### User Schema
- Username
- Email
- Password (hashed)
- Category (Corporate/Institute/Personal)

### Instrument Schema
- Name
- Description
- Price
- Availability Status
- Technical Specifications

### Reservation Schema
- User ID
- Instrument ID
- Start Date
- End Date
- Fuel

## Contact 📧

Mail me at: shaan2k3@gmail.com

## Acknowledgments 🙏

- IISER Berhampur for the internship opportunity
- Central Advanced Instrumentation Facility team
- Open source community for various tools and libraries used

