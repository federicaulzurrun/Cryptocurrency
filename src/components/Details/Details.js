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
        <h4 className="code">{selectedCrypto.cryptoName}</h4>
        <img src={selectedCrypto.cryptoImg} alt={selectedCrypto.cryptoName} />
        <h3 className="completeName">
          {selectedCrypto.completeName}
        </h3>
        <h4 className="supply">
          Max Supply:
          {' '}
          {selectedCrypto.maxSupply}
        </h4>
      </div>
    </div>
  );
};

export default Details;
