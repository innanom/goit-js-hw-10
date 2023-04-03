import './css/styles.css';
import Notiflix from 'notiflix';
import Countries from './fetchCountries';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box')
const listCoutryEl = document.querySelector('.country list')
const infoCountryEl = document.querySelector('.country-info')
      

inputEl.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));
const countries = new Countries();
console.log(countries)

function onSearchCountry(event) {
    event.preventDefault();

    countries.nameCountry = event.target.value.trim();
    
    countries.fetchCountries();
 
    
}

