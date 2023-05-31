import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import { crypto } from '../../redux/details/detailsSlice';
import { getCurrencies } from '../../redux/currency/currencySlice';
import './Home.css';

const CurrencyList = () => {
  const navigate = useNavigate();
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

  const clickHandler = (cryptoName, cryptoImg) => {
    dispatch(crypto({ cryptoName, cryptoImg }));
    navigate('/details');
  };

  return (
    <>
      <div className="">
        <input type="text" placeholder="Search.." />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
      <div className="currenciesCont">
        {Object.keys(currency).map((currencyCode) => {
          const currencyItem = currency[currencyCode];
          const currencyId = uuid();

          return (
            <div
              className="currencyCont"
              key={currencyId}
              role="button"
              tabIndex={0}
              onClick={() => clickHandler(currencyItem.name, currencyItem.icon_url)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  clickHandler(currencyItem.name, currencyItem.icon_url);
                }
              }}
            >
              <h3>{currencyItem.symbol}</h3>
              <img className="imgCurrency" src={currencyItem.icon_url} alt="" />
              <h2>{currencyItem.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrencyList;
