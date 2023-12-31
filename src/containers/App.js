import './App.css';
import { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CurrencyExchangePage from '../pages/currencyExchangePage';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/currency-exchange" element={<CurrencyExchangePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
