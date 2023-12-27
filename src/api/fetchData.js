import apikey from "./apikey";


const convertAmount = async (baseCurrency, convertCurrency, amount) => {
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${baseCurrency}&to=${convertCurrency}&amount=${amount}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${apikey}`,
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        return error;
    }
};

export default convertAmount;