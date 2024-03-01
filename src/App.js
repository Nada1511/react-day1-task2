// src/App.js

import React from 'react';
import ProductsList from './components/ProductsList';
import data from './data';
// App.js or Parent component file

import './components/ProductCard.css'; 

function App() {
    return (
        <div className="App">
            <h1>Products List</h1>
            <ProductsList products={data.products} />
        </div>
    );
}

export default App;
