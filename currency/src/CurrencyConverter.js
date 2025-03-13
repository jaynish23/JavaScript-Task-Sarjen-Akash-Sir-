import React, { useState, useEffect } from "react";

import axios from "axios";

import Select from "react-select";

import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState({
    label: "USD",
    value: "USD",
  });

  const [toCurrency, setToCurrency] = useState({ label: "EUR", value: "EUR" });

  const [exchangeRate, setExchangeRate] = useState(null);

  const [currencyOptions, setCurrencyOptions] = useState([]);

  const apiKey = "process.env.REACT_APP_API_KEY"; 

  useEffect(() => {
    axios

      .get(`https://api.currencyapi.com/v3/latest?apikey=process.env.REACT_APP_API_KEY`)

      .then((response) => {
        const rates = response.data.rates;

        const options = Object.keys(rates).map((currency) => ({
          label: currency,

          value: currency,
        }));

        setCurrencyOptions(options);

        setExchangeRate(rates[toCurrency.value]);
      })

      .catch((error) => console.error(`Error fetching the rates: ${error}`));
  }, [toCurrency, apiKey]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (selectedOption) => {
    setFromCurrency(selectedOption);
  };

  const handleToCurrencyChange = (selectedOption) => {
    setToCurrency(selectedOption);
  };

  const convertCurrency = () => {
    if (exchangeRate) {
      return (amount * exchangeRate).toFixed(2);
    }

    return "Loading...";
  };

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>

      <div className="converter-inputs">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="amount-input"
        />

        <Select
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          options={currencyOptions}
          className="currency-select"
          styles={{
            control: (provided) => ({
              ...provided,

              color: "black",
            }),

            singleValue: (provided) => ({
              ...provided,

              color: "black",
            }),

            menu: (provided) => ({
              ...provided,

              color: "black",
            }),
          }}
        />

        <span>to</span>

        <Select
          value={toCurrency}
          onChange={handleToCurrencyChange}
          options={currencyOptions}
          className="currency-select"
          styles={{
            control: (provided) => ({
              ...provided,

              color: "black",
            }),

            singleValue: (provided) => ({
              ...provided,

              color: "black",
            }),

            menu: (provided) => ({
              ...provided,

              color: "black",
            }),
          }}
        />
      </div>

      <h2>
        {amount} {fromCurrency.value} is equal to {convertCurrency()}{" "}
        {toCurrency.value}
      </h2>
    </div>
  );
};

export default CurrencyConverter;
