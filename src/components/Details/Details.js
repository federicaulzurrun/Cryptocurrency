import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const selectedCrypto = useSelector((state) => state.details.data);

  if (!selectedCrypto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-main">
      <h3>{selectedCrypto.cryptoName}</h3>
      <img src={selectedCrypto.cryptoImg} alt={selectedCrypto.cryptoName} />
    </div>
  );
};

export default Details;
