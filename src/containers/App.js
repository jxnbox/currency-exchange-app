import './App.css';
import { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Routes, Route, useActionData } from 'react-router-dom';
import CurrencyExchangePage from '../pages/currencyExchangePage';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import fbApp from '../firebase/firebase';
const auth = getAuth(fbApp);

class App extends Component {
  constructor() {
    super();
    this.state = {
      user : null, 
    }
  };

  updateUserState = (userState) => {
    this.setState({
      user : userState,
    })
  }

  render() {
    return (
      <div className="App">
        <div className='head-container'>
          <Header />
          <Navbar user={this.state.user}/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage updateUserState={this.updateUserState}/>} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/currency-exchange" element={<CurrencyExchangePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
