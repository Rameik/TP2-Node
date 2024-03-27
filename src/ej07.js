import { getCurrencyAbbreviation } from 'currency-map-country';

const obtenerMoneda = (pais) => {
    return getCurrencyAbbreviation(pais)
}

let monedaDelPais, codigoPais;
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'USZ';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

