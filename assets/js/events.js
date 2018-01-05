"use strict";

const neows = require("./api/neows");
const foaas = require("./api/foaas");

const activateDates = () => {
    $("#fuck-off").click(event => {
        let date1 = $("#date1").val();
        let date2 = $("#date2").val();
        neows.search(date1, date2).then(response => {
            let date = response.near_earth_objects[date1];
            let object = date[parseInt(Math.random()*date.length)];
            let name = object.name;
            foaas.fuck(name);
        });
    });
};

module.exports = {activateDates};