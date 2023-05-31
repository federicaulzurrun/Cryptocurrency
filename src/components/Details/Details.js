import React from 'react';
import { useSelector } from 'react-redux';
import './Details.css';

const Details = () => {
  const selectedCrypto = useSelector((state) => state.details.data);

  if (!selectedCrypto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-main">
      <div className="detailsInfo">
        <h3>{selectedCrypto.cryptoName}</h3>
        <img src={selectedCrypto.cryptoImg} alt={selectedCrypto.cryptoName} />

        <h4>
          Currency Code:
          {' '}
          {selectedCrypto.currency_code}
        </h4>
        <h4>
          Symbol:
          {' '}
          {selectedCrypto.symbol}
        </h4>
        <h4>
          Max Supply:
          {' '}
          {selectedCrypto.max_supply}
        </h4>
      </div>
    </div>
  );
};

export default Details;
