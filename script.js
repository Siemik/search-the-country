var url = 'https://restcountries.eu/rest/v1/name/';
var urlCapital = 'https://restcountries.eu/rest/v2/capital/';
var urlFlag = 'https://restcountries.eu/data/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
}
function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}
function showCountriesList(resp) {
  countriesList.innerHTML = '';
    resp.forEach(function(item) {
      var liEl = document.createElement('li');
          liEl.innerText = item.name;
          countriesList.appendChild(liEl);

      var pEl = document.createElement('p');
          pEl.innerText = item.capital;
          countriesList.appendChild(pEl);
    });

}
