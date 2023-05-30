import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../../redux/currency/currencySlice';
import './Home.css';

const CurrencyList = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency.crypto);
  const isLoading = useSelector((state) => state.currency.isLoading);
  const error = useSelector((state) => state.currency.error);

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  if (isLoading || currency === undefined || Object.keys(currency).length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="currenciesCont">
      {Object.keys(currency).map((currencyCode) => {
        const currencyItem = currency[currencyCode];

        return (
          <div className="currencyCont" key={currencyCode}>
            <h3>{currencyItem.symbol}</h3>
            <img className="imgCurrency" src={currencyItem.icon_url} alt="" />
            <h2>{currencyItem.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CurrencyList;
