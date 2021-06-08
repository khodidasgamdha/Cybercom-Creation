const { RESTDataSource } = require("apollo-datasource-rest");

class CountriesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://restcountries.eu/rest/v2";
    }

    async getAllCountries() {
        return this.get("/all");
    }

    async getCountryByName(name) {
        return this.get(`/name/${name}`);
    }

}

module.exports = CountriesAPI;
