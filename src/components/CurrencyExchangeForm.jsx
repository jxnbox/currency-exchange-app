const CurrencyExchangeForm = ({onSubmit}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="select-base-currency">Base: </label>
                <select name="base-currency" id ="select-base-currency">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                <br />
                <p>TO</p>
                <br />
                <label htmlFor="select-convert-currency">Convert: </label>
                <select name="convert-currency" id ="select-convert-currency">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                <br />
                <label htmlFor="amount">Amount: </label>
                <input type="number" name="amount" />
                <button type="submit">convert</button>
            </form>
        </div>
    )
};

export default CurrencyExchangeForm;