import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import { crypto } from '../../redux/details/detailsSlice';
import { getCurrencies } from '../../redux/currency/currencySlice';
import './Home.css';

const CurrencyList = () => {
  const [search, setSearch] = useState('');
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

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const clickHandler = (cryptoName, cryptoImg, completeName, maxSupply) => {
    const payload = {
      cryptoName,
      cryptoImg,
      completeName,
      maxSupply,
    };
    dispatch(crypto(payload));
    navigate('/details');
  };

  const filteredCurrency = Object.values(currency).filter(
    (currencyItem) => currencyItem.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="searchCont">
        <input
          type="text"
          placeholder="Search your crypto..."
          className="search"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="btn" type="submit">
          <FaSearch />
        </button>
      </div>
      <div className="currenciesCont">
        {filteredCurrency.map((currencyItem) => {
          const currencyId = uuid();

          return (
            <div
              className="currencyCont"
              key={currencyId}
              role="button"
              tabIndex={0}
              onClick={() => clickHandler(
                currencyItem.symbol,
                currencyItem.icon_url,
                currencyItem.name,
                currencyItem.max_supply,
              )}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  clickHandler(
                    currencyItem.symbol,
                    currencyItem.icon_url,
                    currencyItem.name,
                    currencyItem.max_supply,
                  );
                }
              }}
            >
              <h3>{currencyItem.symbol}</h3>
              <img className="imgCurrency" src={currencyItem.icon_url} alt="" />
              <h2 className="cryptoName">{currencyItem.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrencyList;
