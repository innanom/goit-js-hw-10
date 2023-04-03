export default class Countries {
    constructor() {
        this.inputNameCountry ='';
        this.officialName = 'name';
        this.capital = 'capital';
        this.population = 'population';
        this.flag = 'flag';
        this.language = 'languages';
    }
    
    fetchCountries() {
        console.log(this);
    const url = `https://restcountries.com/v3.1/name/${this.inputNameCountry}?fields=${this.officialName},${this.population},${this.capital},${this.flag},${this.language}`;
    fetch(url)
        .then(r => r.json())
        .then(console.log);
    }

    get nameCountry() {
        return this.inputNameCountry;
    }
    
    set nameCountry(newNameCountry) {
        this.inputNameCountry = newNameCountry;
    }
}