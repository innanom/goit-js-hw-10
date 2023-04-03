export default class Countries {
    constructor() {
        this.inputNameCountry ='';
        this.officialName = 'name';
        this.capital = 'capital';
        this.population = 'population';
        this.flags = 'flags';
        this.languages = 'languages';
    }
    
    fetchCountries() {
     
    const url = `https://restcountries.com/v3.1/name/${this.inputNameCountry}?fields=${this.officialName},${this.population},${this.capital},${this.flags},${this.languages}`;
    
        return fetch(url).then(r => {
      if (!r.ok) {
        if (r.status === 404) {
          Notiflix.Notify.failure('Oops, there is no country with that name');
        }
        throw Error;
      }
    
      return r.json();
})
        
    }

    get nameCountry() {
        return this.inputNameCountry;
    }
    
    set nameCountry(newNameCountry) {
        this.inputNameCountry = newNameCountry;
    }
}