import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CurrencyChart from '../../components/CurrencyChart/CurrencyChart';
import './CurrencyPage.css';
import { CurrencyProps, CurrencyPageProps } from '../../utils/interface';
import CurrencyDetails from '../../components/CurrencyDetails/CurrencyDetails';

const CurrencyPage = (props: CurrencyPageProps) => {
  const { id } = useParams();
  const { currencies, setErrorMsg, errorMsg } = props;

  const currency = currencies.find((cur: CurrencyProps) => cur.id === id);

  return (
    <>
      <div className="currencypage__container">
        <div className="currencypage__container-left-side">
          <Link to="/">
            <div className="currencypage__back-button">Back to the home</div>
          </Link>
          <CurrencyDetails currency={currency} />
        </div>
        <div className="currencypage__container-right-side">
          <CurrencyChart setErrorMsg={setErrorMsg} errorMsg={errorMsg} />
        </div>
      </div>
    </>
  );
};

export default CurrencyPage;
