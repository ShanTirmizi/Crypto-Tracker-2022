import React from 'react';
import { Link } from 'react-router-dom';
import './Currency.css';
import '../..//pages/CurrencyPage/CurrencyPage.css';
import { CurrencyComProps } from '../../utils/interface';
import {
  currencyFormartter,
  Formatter,
  percentageFormatter,
} from '../../utils/utils';

const Currency = (props: CurrencyComProps) => {
  const { currency, addToWatchlist } = props;
  return (
    <>
      <tbody>
        <tr className="currency__table-container-data">
          <td className="currency__data name">
            <Link to={`/${currency.id}`}>
              <img src={currency.image} alt="Currency Logo" />
              <span> {currency.name}</span>
            </Link>
          </td>
          <td className="currency__data price">
            {currencyFormartter.format(currency.current_price)}
          </td>
          <td
            className={`currency__data price-percentage ${
              currency.price_change_percentage_24h <= 0 ? 'minus' : 'plus'
            } `}
          >
            {percentageFormatter.format(currency.price_change_percentage_24h)} %
          </td>
          <td className="currency__data market-cap">
            {currencyFormartter.format(currency.market_cap)}
          </td>
          <td className="currency__data total-volume">
            {currencyFormartter.format(currency.total_volume)}
          </td>
          <td className="currency__data supply">
            {Formatter.format(currency.circulating_supply)}
          </td>
          <td className="currency__data watchlist">
            <button
              className="currency__data-button"
              onClick={() => addToWatchlist(currency)}
            >
              Add to Watchlist
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Currency;
