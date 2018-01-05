"use strict";

const neows = require("./api/neows");

const activateDates = () => {
    $("#fuck-off").click(event => {
        let date1 = $("#date1").val();
        let date2 = $("#date2").val();
        neows.search(date1, date2).then(response => {
            console.log(response);
        });
    });
};

module.exports = {activateDates};