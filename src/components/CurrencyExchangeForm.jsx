import { useEffect, useState } from "react";
import { getSymbols } from "../api/fetchData";

const CurrencyExchangeForm = ({onSubmit}) => {

    const [currencyNames, setCurrencyNames] = useState([]);
    const [currencyAbbr, setCurrencyAbbr] = useState([]);

    useEffect(() => {
        if(!currencyNames.length) {
            getSymbols()
            .then(res => JSON.parse(res))
            .then(parsedRes => {
                setCurrencyAbbr(() => Object.keys(parsedRes.symbols))
                setCurrencyNames(() => Object.values(parsedRes.symbols))
            })
            .catch(error => {
                console.error('Error fetching symbols:', error);
            });
          };
    }, [currencyNames]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="select-base-currency">Base: </label>
                <select name="base-currency" id ="select-base-currency">
                    {currencyNames.map((currName, i) => {
                        return (
                            <option value={currencyAbbr[i]} key={`${currName}-${i}`}>{currName}</option>
                        )
                    })}
                </select>
                <br />
                <p>TO</p>
                <label htmlFor="select-convert-currency">Convert: </label>
                <select name="convert-currency" id ="select-convert-currency">
                    {currencyNames.map((convertCurrName, i) => {
                        return (
                            <option value={currencyAbbr[i]} key={`${convertCurrName}-${i}`}>{convertCurrName}</option>
                        )
                    })}
                </select>
                <br />
                <label htmlFor="amount">Amount: </label>
                <input type="number" name="amount" />
                <button type="submit">convert</button>
            </form>
        </div>
    )
}


export default CurrencyExchangeForm;