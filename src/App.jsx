import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Apartments from './pages/apartments/apartments.jsx';
import apartmentsData from './data/apartments-data.json';

const App = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        setApartments(apartmentsData);
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home apartmentsData={apartments} />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/property/:id"
                        element={<Apartments apartmentsData={apartments} />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
