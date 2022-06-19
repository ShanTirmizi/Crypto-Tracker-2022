import React, { useState } from 'react';
import Currency from '../../components/Currency/Currency';
import ReactPaginate from 'react-paginate';
import Search from '../../components/Search/Search';
import logo from '../../assets/logo.png';
import './HomePage.css';
import {
  CurrencyProps,
  CurrenciesProps,
  HandlePageClickProps,
} from '../../utils/interface';
import Popup from '../../components/Popup/Popup';

const HomePage: React.FC<CurrenciesProps> = ({
  currencies,
  isLoading,
  setSearch,
  search,
  errorMsg,
}) => {
  const [watchlist, setWatchlist] = useState<Array<CurrencyProps>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [itemOffset, setItemOffset] = useState(0);
  const addToWatchlist = (currency: CurrencyProps) => {
    setWatchlist([...watchlist, currency]);
  };
  const itemsPerPage = 10;

  const displayCurrency = currencies
    .filter((currency) => {
      if (search === '') {
        return currencies;
      } else if (
        currency.name.toLowerCase().includes(search.toLowerCase()) ||
        currency.symbol.toLowerCase().includes(search.toLowerCase())
      ) {
        return currency;
      }
      return false;
    })
    .slice(itemOffset, itemOffset + itemsPerPage)
    .map((currency) => {
      return (
        <Currency
          key={currency.id}
          currency={currency}
          addToWatchlist={addToWatchlist}
        />
      );
    });

  const pageCount = Math.ceil(
    currencies.filter((currency) => {
      if (search === '') {
        return currency;
      } else if (
        currency.name.toLowerCase().includes(search.toLowerCase()) ||
        currency.symbol.toLowerCase().includes(search.toLowerCase())
      ) {
        return currency;
      }
      return false;
    }).length / itemsPerPage
  );

  const handlePageClick = (props: HandlePageClickProps) => {
    const { selected } = props;
    setItemOffset(selected);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : errorMsg.isError ? (
        <div>{errorMsg.msg}</div>
      ) : (
        <div className="hompage__container">
          <nav className="homepage__nav">
            <img className="homepage__logo" src={logo} alt="Logo" />
            <Search
              search={search}
              setSearch={setSearch}
              handlePageClick={handlePageClick}
            />
            <button onClick={() => setIsOpen(true)}>View watchlist</button>
          </nav>
          <section className="homepage__section">
            <table className="homepage__table">
              <thead className="homepage__table-head">
                <tr className="homepage__table-header">
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h %</th>
                  <th>Market Cap</th>
                  <th>Total Volume</th>
                  <th>Circulating Supply</th>
                  <th>Add to Watchlist</th>
                </tr>
              </thead>
              {displayCurrency}
            </table>
          </section>{' '}
          <section className="homepage__pagination-container">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={10}
              pageCount={pageCount}
              previousLabel="< previous"
              containerClassName="homepage__pagination"
              activeClassName="active"
            />
          </section>
        </div>
      )}
      ;{isOpen ? <Popup watchlist={watchlist} setIsOpen={setIsOpen} /> : null}
    </>
  );
};

export default HomePage;
