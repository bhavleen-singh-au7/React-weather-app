import React, { Fragment, useState } from 'react';
import SearchBox from './components/SearchBox';
import ForecastCard from './components/ForecastCard';
import './App.css';

function App() {

  const [val, setValues] = useState({
    searchField: ""
  });

  const OnSearchChange = (event) => {
    setValues({ [val.searchField]: event.target.value });
  };

  return (
    <Fragment>
      <div className="container my-4 mx-auto">
        <h1 className="text-center my-4">React Weather App</h1>
        <SearchBox searchChange={OnSearchChange} />
        <ForecastCard />
      </div>
    </Fragment>
  );
}

export default App;
