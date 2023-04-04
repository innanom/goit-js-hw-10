import './css/styles.css';
import Notiflix from 'notiflix';
import Countries from './fetchCountries';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box')
const listCoutryEl = document.querySelector('.country list')
const infoCountryEl = document.querySelector('.country-info')
      

inputEl.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));
const country = new Countries();
console.log(country)

function onSearchCountry(event) {
    event.preventDefault();

    country.inputNameCountry = event.target.value.trim();
    
    if (country.inputNameCountry === '') {
        return;
    }

    country
        .fetchCountries()
        .then(data => {
            if (data.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                listCoutryEl.innerHTML = '';
                infoCountryEl.innerHTML = '';
                return;
            } else
            if (data.length >= 2 && data.length <= 10) {
                infoCountryEl.innerHTML = '';
                const countryList = data.map(({ name, flags }) => `<li class=""><img class="country-list__img" src="${flags.svg}" alt="${flags.alt}" width="20p" height="20px"/><p>${name.official}</p></li>`).join("");
                listCoutryEl.innerHTML = countryList;
                
                return;
            }
            if (data.length === 1) {
                listCoutryEl.innerHTML = '';
                
                const countryInfo = data.map(({ name, flags, languages, capital, population }) => `<img class="country-info__img" src="${flags.svg}" alt="${flags.alt}" width="40px" height="40px"/><p class="country-info__name">${name.official}</p><p class="country-info__capital"><span>Capital:</span>${capital}</p><p class="country-info__population"><span>Population:</span>${population}</p><p class="country-info__languages"><span>Languages:</span>${Object.values(languages)}</p>`).join("");
                
                infoCountryEl.innerHTML = countryInfo;
                return;
            }
            
        })
            .catch(error => {
            error.message;
        });
}

