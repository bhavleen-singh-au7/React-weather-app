const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
  const cityDets = data.cityDetails;
  const weather = data.weatherDet;

  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
      </div>
  `;

  // Remove the d-none class if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

};

const updateCity = async (city) => {
  const cityDetails = await (getCity(city));
  const weatherDet = await (getWeather(cityDetails.Key));

  return {
    cityDetails: cityDetails,
    weatherDet: weatherDet
  };
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});