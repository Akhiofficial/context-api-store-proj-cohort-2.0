# React Context API Product Store 🛍️

A modern, responsive e-commerce product catalog application built with React. This project demonstrates centralized state management using the **Context API**, dynamic routing, and a premium UI design.

## 🚀 Features

*   **Global State Management**: Uses React Context API to manage product data efficiently across the application, avoiding prop drilling.
*   **Dynamic Routing**: Implemented using `react-router-dom` for seamless navigation between:
    *   **Home**: A premium, "Anywear" brand-inspired landing page with a light theme.
    *   **Products**: A responsive grid layout displaying products fetched from an API.
    *   **Product Details**: A detailed view for individual products with a comprehensive UI.
*   **Real-time Data**: Fetches product data from the [FakeStore API](https://fakestoreapi.com/) using Axios.
*   **Modern UI/UX**: Styled with **Tailwind CSS** for a clean, responsive, and high-quality aesthetic (Deals, Hero sections, Hover effects).
*   **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

*   **Frontend Library**: React.js
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM
*   **HTTP Client**: Axios
*   **State Management**: Context API

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Akhiofficial/context-api-store-proj.git
    cd context-api
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```
src/
├── api/
│   └── ProductApi.jsx       # API fetch functions
├── Context/
│   └── ProductContext.jsx   # Context Provider for product data
├── pages/
│   ├── Home.jsx             # Hero and Featured Deals page
│   ├── Products.jsx         # Product Listing page
│   └── ProductDetails.jsx   # Individual Product Details page
├── App.jsx                  # Main component with Routes
├── main.jsx                 # Entry point
└── index.css                # Global styles & Tailwind directives
```

## 💖 Acknowledgements

Inspired by **Sheryians Coding School**. Special thanks for the guidance on React concepts and best practices!
