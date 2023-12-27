import './App.css';
import { Component } from 'react';
import Header from '../components/Header';
import CurrencyExchangeForm from '../components/CurrencyExchangeForm';
import convertAmount from '../api/fetchData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      baseCurrency : "",
      convertCurrency : "",
      amount : "",
      result : ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.baseCurrency !== this.state.baseCurrency ||
      prevState.convertCurrency !== this.state.convertCurrency ||
      prevState.amount !== this.state.amount
    ) {
      convertAmount(this.state.baseCurrency, this.state.convertCurrency, this.state.amount)
        .then((res) => this.setState({ result: res }));
    }
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      baseCurrency : e.target[0].value,
      convertCurrency : e.target[1].value,
      amount : e.target[2].value,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CurrencyExchangeForm onSubmit={this.handleSubmit}/>
        <br></br>
        <p>result: {this.state.result}</p>
      </div>
    );
  }
}

export default App;
