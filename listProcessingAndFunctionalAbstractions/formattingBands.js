/*
Write a function that can process the input band Array and return an Array that contains the fixed information:
- The band countries are wrong: all the bands should have 'Canada' as the country.
- The band name should have all words capitalized.
- Remove all dots from the band names.

INPUT: an array of objects
RETURN; an array with the information fixed
RULES:
- to fix we need to:
  - reassign each country's value to 'Canada';
  - uppercase the band names; and
  - remove all dots from band names

ALGORITHM:
- iterate through each band and for each band and index:
  - reassign band.country to 'Canada'
  - reassign band.name to uppercased band name
  - remove all dots from band names

*/


let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(bands) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name
                  .split(' ')
                  .map(word => capitalizeString(word))
                  .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]