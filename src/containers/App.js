import './App.css';
import { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CurrencyExchangePage from '../pages/currencyExchangePage';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='head-container'>
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/currency-exchange" element={<CurrencyExchangePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
