import React from 'react';

const ForecastCard = () => {

  return (
    <div className="card shadow-lg rounded d-none">
      <img src="https://via.placeholder.com/500x500" alt="weather-time" class='time card-img-top' />
      <div className="icon bg-light mx-auto text-center">
        <img src="" alt="weather-icon" />
      </div>

      <div className="text-uppercase text-center details">
        <h5 className="my-3">City Name</h5>
        <div className="my-3">Weather Condition</div>
        <div className="display-4 my-4">
          <span>temp</span>
          <span>&deg;C</span>
        </div>
      </div>
    </div>

  );
};

export default ForecastCard;