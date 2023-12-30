import apiKey from "./apikey";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};

const convertAmount = async (baseCurrency, convertCurrency, amount) => {
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${baseCurrency}&to=${convertCurrency}&amount=${amount}`;

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        return error;
    }
};

const getSymbols = async () => {
    const url = "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols";

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        return error;
    }
}

export {convertAmount, getSymbols};
