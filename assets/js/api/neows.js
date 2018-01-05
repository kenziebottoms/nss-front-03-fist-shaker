"use strict";

const keys = require("./keys");

const search = (start, end) => {
    return new Promise((resolve, reject) => {
        $.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${keys.neows}`)
        .done(results => resolve(results))
        .fail(error => reject(error));
    });
};

const getRandomName = results => {
};

module.exports = {search, getRandomName};