import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './containers/Header';
import Banner from './containers/Banner';
import Categories from './containers/Categories';
import TopSales from './containers/TopSales';
import BlogSpot from './containers/blogs';
import Footer from './containers/Footer';
import ProductsDivider from './containers/ProductsDivider';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <div>
    <Header />
    <Banner />
    <Categories />
    <TopSales />
    <ProductsDivider />
    <BlogSpot />
    <Footer />
  </div>,
);
