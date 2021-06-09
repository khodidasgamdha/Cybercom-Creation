const { RESTDataSource } = require("apollo-datasource-rest");

class CountriesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://cdn.syteapi.com/v1.1";
    }


}

module.exports = CountriesAPI;
