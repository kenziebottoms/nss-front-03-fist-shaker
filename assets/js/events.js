"use strict";

const neows = require("./api/neows");
const foaas = require("./api/foaas");

const activateDates = () => {
    $("#fuck-off").click(event => {
        let date1 = $("#date1").val();
        let date2 = $("#date2").val();
        neows.search(date1, date2).then(response => {
            let date = response.near_earth_objects[date1];
            date.forEach(object => {
                foaas.fuck(object.name);
            });
        });
    });
};

module.exports = {activateDates};