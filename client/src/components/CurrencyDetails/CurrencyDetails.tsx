import React from 'react';
import { CurrencyDetialsProps } from '../../utils/interface';

const CurrencyDetails = (props: CurrencyDetialsProps) => {
  const { currency } = props;
  return (
    <>
      <div className="currencypage__container-data">
        <div className="currencypage__container-header">
          <img src={currency?.image} alt="Logo" />
          <h1>{currency?.name}</h1>
        </div>
        <div className="currencypage__container-body">
          <p>
            Price: <br />
            {currency?.current_price}
          </p>
          <p>
            Market Cap: <br />
            {currency?.market_cap}
          </p>
          <p>
            Volume: <br />
            {currency?.total_volume}
          </p>
          <p>
            Circulating Supply:
            <br /> {currency?.circulating_supply}
          </p>
          <p>
            Max Supply: <br />
            {currency?.max_supply}
          </p>
          <p className="minus">
            24h low: <br /> {currency?.low_24h}
          </p>
          <p className="plus">
            24h high: <br />
            {currency?.high_24h}
          </p>
          <p>
            24h change: <br />
            {currency?.price_change_percentage_24h}
          </p>
        </div>
      </div>
    </>
  );
};

export default CurrencyDetails;
