import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import CurrencyPage from './pages/CurrencyPage/CurrencyPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { CurrencyProps, ErrorProps } from './utils/interface';

function App() {
  const [currencies, setCurrencies] = useState<Array<CurrencyProps>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<ErrorProps>({
    isError: false,
    msg: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get('https://shan-crypto.herokuapp.com/')
        .then((response) => setCurrencies(response.data))
        .catch((error) => setErrorMsg({ msg: error.message, isError: true }));
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                currencies={currencies}
                isLoading={isLoading}
                setSearch={setSearch}
                search={search}
                errorMsg={errorMsg}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <CurrencyPage
                currencies={currencies}
                isLoading={isLoading}
                search={search}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
