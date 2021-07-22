const baseUrl = 'https://goweather.herokuapp.com/weather/';

export default {
  fetchForecast(searchQuery) {
    return fetch(baseUrl + `${searchQuery}`).then(res => res.json());
  },
};
