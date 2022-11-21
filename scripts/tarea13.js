///////////////////////////////////////////////////////

function ej1(){
  let numUno = +prompt('Ingrese un primer numero');
  let numDos = +prompt('Ingrese un segundo numero');
  let suma = numUno + numDos;
  let producto = numUno * numDos;
  console.log(`La suma de tus números ${numUno} y ${numDos} es ${suma} y su producto es ${producto}`);
}




let numEntero = +prompt('Ingrese un numero entero');
let porcentaje = numEntero * 0.2;
console.log(`El 10% de ${numEntero} es ${porcentaje}`);


let nMetros = +prompt('Ingrese un número de metros');
let equivCM = nMetros * 100;
let equivMM = equivCM * 10;

console.log(`${nMetros} metros es igual a ${equivCM} cm y es igual a ${equivMM} milímetros`);



let base = +prompt('Ingrese la base');
let altura = +prompt('Ingrese la altura');
let area = base * altura / 2;


console.log(`el área del triángulo es ${area}`);
console.log({ base }, { altura }, { area });



let nDolares = +prompt('número de dólares');
let nSoles = nDolares * 3.38;

console.log(`equivalen a ${nSoles}`);
console.log({ nDolares });



let nPulgadas = +prompt('número de pulgadas');
let nMilimetros = nDolares * 25.4;

console.log(`equivalen a ${nMilimetros} mm`);
console.log({ nPulgadas });


let otroNumero = prompt('un número de tres cifras');

let digits = otroNumero.split('');
console.log({ digits });
let digitsN = digits.map(Number); //https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits para volverlos numeros
console.log({ digitsN });

let otraSuma = digitsN.reduce((a, b) => a + b, 0);
let resultadoFinal = otraSuma ** 2 //es igual a Math.pow(otraSuma);

console.log(`la suma de sus tres cifras es ${otraSuma} y esa suma al cuadrado es ${resultadoFinal}`);




let monto = +prompt('Ingresa un monto');

let paraA = monto * 0.3;
let paraB = monto * 0.2;
let paraC = monto * 0.5;

console.log(`Al socio A le corresponden ${paraA}, al socio B ${paraB} y al socio C ${paraC}`);



const igv = 0.19;
let precioBase = +prompt('ingrese el precio base');
let igvPrecioBase = (precioBase * igv).toFixed(2);

let precioFinal = precioBase + igvPrecioBase;

console.log(`el precio final por pagar es ${precioFinal}`);
console.log({ precioBase }, { igvPrecioBase }, { precioFinal });



let tiposEntradas = [['general', 150], ['para mayores de 65', 50], ['para menores de edad', '80']];
let cuantas;
let recaudado;
let recaudados = [];
let totalRecaudado;

preguntarCalcularRecaudaciones();
function preguntarCalcularRecaudaciones() {
  tiposEntradas.forEach(tipo => {
    cuantas = +prompt(`¿cuantas entradas del tipo '${tipo[0]}' se vendieron?`);
    recaudado = cuantas * tipo[1];
    console.log(`las ${cuantas} entradas de tipo ${tipo[0]} (a ${tipo[1]} soles cada una) recaudaron ${recaudado} soles `);

    recaudados.push(recaudado);
  })
  console.log({ recaudados });
  totalRecaudado = recaudados.reduce((a, b) => a + b, 0);
  console.log(`En total se recaudaron ${totalRecaudado} soles`);
}














