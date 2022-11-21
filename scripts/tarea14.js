///////////////////////////////////////////////////////



function tarea14reto1() {
  //datos ya definidos
  numUno = 43;
  numDos = 46;
  numTres = 81;
  numCuatro = 76;

  console.log({ numUno }, { numDos }, { numTres }, { numCuatro });

  //operaciones
  let sumaUnoDos = numUno + numDos;
  let restaCuatroTres = numCuatro - numTres;
  let resultadoFinal = sumaUnoDos * restaCuatroTres;

  console.log({ resultadoFinal });
  console.log({ sumaUnoDos }, { restaCuatroTres });
};




function tarea14act1() {

  //obtencion de valor de los inputs
  let total = document.getElementById('input1').value;
  let niños = document.getElementById('input2').value;
  let niñas = document.getElementById('input3').value;


  //cálculos
  let ninasPorcentaje = (ninas / total) * 100;
  let ninosPorcentaje = (ninos / total) * 100;

  //Se muestran los resultados
  let respuesta = `Los ${ninos} niños representan el ${ninosPorcentaje} % del salón y  las ${ninas} niñas representan el ${ninasPorcentaje}% del salón`;
  alert(respuesta);
  console.log(respuesta);
}


function tarea14act2() {
  let dineroTotal = document.getElementById('dineroTotal').value;
  let lugarPorcentaje = [['av la mar', 35], ['av abanay', 25], ['av 28 de julio', 10], ['av aviacion', 15], ['av tacna', (100 - (35 + 25 + 10 + 15))]];
  console.log({ lugarPorcentaje }); /* para comprobar si las sumas y restas funcionan en av tacna */

  //los valores [0] son el nombre de la av y los [1] son el porcentaje
  lugarPorcentaje.forEach(item => {
    let dineroQueCorresponde = ((dineroTotal * item[1]) / 100);
    let entonces = `a ${item[0]} le corresponden ${dineroQueCorresponde} soles ( ${item[1]}% de los ${dineroTotal} soles)`
    alert(entonces);
    console.log(entonces);
  })
}





function tarea14act3() {
  let entradaTipoA, entradaTipoB, entradaTipoC, arrayDeRecaudados = [];

  //este es un array de document.getelements
  let vendidasEntradas = [
    document.getElementById('input4').value,
    document.getElementById('input5').value,
    document.getElementById('input6').value
  ];
  console.log({ vendidasEntradas }); //comprobamos output

  let tiposEntradas = [['general', 150], ['para mayores de 65', 50], ['para menores de edad', 80]];
  //console.log({ tiposEntradas });  //esto imprime el array modificado

  tiposEntradas.forEach((tipo, indice) => {
    tiposEntradas[indice].push(vendidasEntradas[indice]); /* no se porque no puedo usar 'tipo', solo me funciona nombrando al array */
    /* ahora cada item del array tiene 3 valores en lugar de 2. mostramos el nuevo array en consola fuera del loop para no repetirlo: */
  });
  console.log({ tiposEntradas }); //esto imprime el array modificado

  //tiposEntradas[0] es el tipo de entrada
  //tiposEntradas[1] es el precio del tipo de entrada
  //tiposEntradas[2] es la cantidad vendida de cada una
  for (i = 0; i < tiposEntradas.length; i++) {
    let recaudado = tiposEntradas[i][1] * tiposEntradas[i][2];
    console.log(`las entradas de tipo ${tiposEntradas[i][0]} recaudaron ${recaudado} soles`);

    arrayDeRecaudados.push(recaudado); //cada valor es guardado en una array vacío que teniamos
  }
  console.log({ arrayDeRecaudados }); //comprobamos y luego los sumamos
  totalRecaudado = arrayDeRecaudados.reduce((a, b) => a + b, 0);
  let mensaje =`En total se recaudaron ${totalRecaudado} soles`;
  alert(mensaje);
  console.log(mensaje);

}