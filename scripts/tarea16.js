function tarea16act3() {
  let numeroA = parseInt(prompt('introduzca un numero'));
  let numeroB = parseInt(prompt('introduzca un segundo numero'));

  let laSuma = alertarSuma(numeroA, numeroB);
  alert(`La suma de los dos números es ${laSuma}`)
  console.log(`La suma de los dos números es ${laSuma}`);
  function alertarSuma(x, y) {
    return alert(x + y);
  };
}


function tarea16act2() {
  let pasaraFarenheit = (grado) => { return farenheit = (grado * 1.8) + 32; };

  let gradosUsuario = +prompt('Introduzaca una temperatura en Farenheit para convertirla en grados Celsius')

  var resultado = pasaraFarenheit(22); //71.6
  console.log({ resultado })

  let pasaraCelsius = (grado) => { return (grado - 32) / 1.8; };

  let temperatura = pasaraCelsius(gradosUsuario); //22.222222222222

  alert(`${gradosUsuario} grados Fahrenheit equivalen a ${temperatura} grados Celsius`);
}


function tarea16act1() {
  let multiply = function (x, y) {
    return x * y;
  }
  let expon = function (x, y) {
    return Math.pow(x, y);
  }

  let suma = (x, y) => { return x + y };

  // funcion resta creada
  let resta = (x, y) => { return x - y };

  // numeros obtenidos de prompts
  let numX = +prompt('ingrese un primer número');
  let numY = +prompt('ingrese un segundo número');

  var result = resta(numX, numY);
  let mensajeResta = `La resta de ${numX} y ${numY} es ${result}`
  alert(mensajeResta);
  console.log({ mensajeResta });
}

