# Shake your fist at the sky

![](https://img.shields.io/badge/data-nasa_api-blue.svg)
![](https://img.shields.io/badge/data-foaas_api-blue.svg)
![](https://img.shields.io/badge/template-handlebars-orange.svg)
![](https://img.shields.io/badge/js-jquery-blue.svg)
![](https://img.shields.io/badge/modularity-browserify-yellow.svg)
![](https://img.shields.io/badge/css_preprocessor-scss-ff69b4.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-working-brightgreen.svg)
![](https://img.shields.io/badge/bonus-none-lightgrey.svg)

## Install locally

```
git clone git@github.com:kenziebottoms/nss-front-03-strfkr.git
npm install
grunt
```

## Requirements

Practice jQuery and Promises and optionally Handlebars
 
- [x] Accept two dates from the user (year, month, day) as a search parameter.
- [x] Use the [NASA API](https://api.nasa.gov/api.html#NeoWS) to make an Ajax call that will gather data about what objects will be close to our planet in the timeframe specified by the user's dates.
- [x] Using the data you get back from NASA (promises!), use [FOAAS](http://www.foaas.com/) to tell three of those asteroids to fuck off, by name.
    - [x] You can use whichever of the foaas message types you like.
- [x] Print these sky-fist-shaking statements to the DOM.
 
### Bonus: 

- [ ] Only tell those asteroids that are "potentially hazardous" to fuck off.
- [ ] Use different messages from foaas for the different asteroids.
- [x] Use Handlebars to print your three messages to the DOM.

### Should do:

- [ ] Person-friendly error if dates aren't entered.
- [ ] Person-friendly error if dates are more than 7 days apart.
- [ ] Set dates to today.
- [ ] Set second date to first date upon first date change.
