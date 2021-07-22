import fetchForecast from './fetchForecast.js';

const searchForm = document.querySelector('.js-search-form');

var debounce = require('lodash.debounce');

searchForm.addEventListener('input', debounce(countrySearchInputHandler, 500));

function countrySearchInputHandler(e) {
  e.preventDefault();
  const searchQuery = e.target.value;

  fetchForecast
    .fetchForecast(searchQuery)
    .then(data => {
      console.log(data);
    })
    .catch(Error => {
      alert({
        text: 'You must enter query parameters!',
      });
      console.log(Error);
    });
}
