"use strict";

const activateDates = () => {
    $("#fuck-off").click(event => {
        let date1 = $("#date1").val();
        let date2 = $("#date2").val();
        console.log(date1, date2);
    });
};

module.exports = {activateDates};