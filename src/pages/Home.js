import { Component } from "react";
import CurrencyExchangePage from "./currencyExchangePage";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <h3>Check live foreign currency exchange rates</h3>
                <CurrencyExchangePage />
            </div>
        )
    }
}

export default Home;