"use strict";

const getPseudoRandomFuckEndpoint = (fuckee) => {
    let fucker = "Kenzie";
    const endpoints = [
        `/off/${fuckee}/${fucker}`,
        `/name/${fuckee}/${fucker}`,
        `/linus/${fuckee}/${fucker}`,
        `/king/${fuckee}/${fucker}`,
        `/deraadt/${fuckee}/${fucker}`,
        `/chainsaw/${fuckee}/${fucker}`,
        `/blackadder/${fuckee}/${fucker}`,
        `/back/${fuckee}/${fucker}`,
    ];
    return endpoints[parseInt(Math.random()*endpoints.length)];
};

const fuck = (fuckee) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `http://foaas.com${getPseudoRandomFuckEndpoint(fuckee)}`,
            headers: {
                Accept: "application/json"
            }
        })
        .done(results => {
            const fuckTemplate = require("../../templates/fucktron.hbs");
            $("#fuck").html(fuckTemplate(results));
            resolve(results);
        })
        .fail(error => reject(error));
    });
};

module.exports = {fuck};