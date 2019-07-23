var url = 'https://restcountries.eu/rest/v1/name/';
var urlCapital = 'https://restcountries.eu/rest/v2/capital/';
var urlFlag = 'https://restcountries.eu/data/';
var countriesList = document.getElementById('countries');
var flagImg = document.getElementById('flag');

document.getElementById('search').addEventListener('click', searchCountries);

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

      var h2El = document.createElement('h2');
          h2El.innerText = 'Country: ' + item.name;
          countriesList.appendChild(h2El);

      var pEl = document.createElement('p');
          pEl.innerText = 'Capital: ' + item.capital;
          countriesList.appendChild(pEl);

      var populationEl = document.createElement('p');
          populationEl.innerText = 'Population: ' + item.population;
          countriesList.appendChild(populationEl);

      var subregionEl = document.createElement('p');
          subregionEl.innerText = 'Subregion: ' + item.subregion;
          countriesList.appendChild(subregionEl);

      var regionEl = document.createElement('p');
          regionEl.innerText = 'Region: ' + item.region;
          countriesList.appendChild(regionEl);

          // ***FLAG

          var svgId = item.alpha3Code;
          svgId = svgId.toLowerCase();
          flagSrc = urlFlag + svgId + ".svg";

          var flagId = svgId+'-flag'
          var imgEl = document.createElement('img');
          imgEl.setAttribute('id', flagId);
          imgEl.setAttribute('class', 'flag-img');
          imgEl.src = flagSrc;
          countriesList.appendChild(imgEl);
          // ENG FLAG***
    });

}
