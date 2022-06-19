import React from 'react';
import { PopupProps, CurrencyProps } from '../../utils/interface';
import './Popup.css';

const Popup = (props: PopupProps) => {
  const { watchlist, setIsOpen } = props;
  const unquieWatchlist = Array.from(new Set(watchlist));

  return (
    <>
      <div className="popup">
        <div className="popup__content">
          <h1>Your Watchlist</h1>
          {watchlist.length > 0 ? (
            <ul className="popup__content-text">
              {unquieWatchlist.map((watch: CurrencyProps) => {
                return (
                  <li key={watch.id}>
                    <img src={watch.image} alt="logo" />

                    <h2>{watch.name}</h2>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h2>Add something to the watch list</h2>
          )}

          <div className="popup__content-button">
            <button
              className="popup__content-button-close"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
