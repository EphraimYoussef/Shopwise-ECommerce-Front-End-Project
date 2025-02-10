# Frontend E-Commerce Project

## Overview
Shopwise is a modern e-commerce web application built with **Next.js**, designed for a seamless and responsive shopping experience. It leverages **server-side rendering (SSR)** to enhance performance, ensuring fast load times and smooth navigation. Additionally, it includes **SEO optimization** and **meta data management** to improve search engine visibility.

## Technologies Used
- **Next.js**: For server-side rendering and optimized frontend development.
- **Tailwind CSS**: For efficient and responsive styling.
- **Redux**: For state management to handle global states such as cart items and authentication.
- **SEO & Meta Data**: Optimized for search engines with proper meta tags and structured data.

## Features
### 1. Displaying All Products
- A homepage showcasing all available products.
- Each product will have details such as:
  - Name
  - Description
  - Price
  - Other relevant information

### 2. Adding to Cart
- Users can add products to their cart.
- Provides an easy way to save preferred products for future reference.
- Cart state is managed using Redux to ensure seamless state persistence.

### 3. Login Functionality
- Users can sign in with their credentials.
- Provides a personalized experience.
- Enables access to additional features such as managing the cart and checkout.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository.git
   cd your-repository
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
```
.
├── app        # Application-specific configurations and setup
├── atoms      # Reusable small UI elements or state management
├── components # Reusable UI components
├── lib        # Utility functions and helpers
├── redux      # Redux store and slices
├── services   # API calls and external data handling
└── README.md  # Project documentation
```
