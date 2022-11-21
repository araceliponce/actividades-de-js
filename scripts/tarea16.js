function tarea16act3(){
  let numeroA = parseInt(prompt('introduzca un numero'));
  let numeroB = parseInt(prompt('introduzca un segundo numero'));
  
  //alertarSuma(numeroA, numeroB);
  console.log(alertarSuma(numeroA, numeroB));
  function alertarSuma(x, y) {
    return alert(x + y);
  };
}


function tarea16act2(){
  let pasaraFarenheit = (grado) => { return farenheit = (grado * 1.8) + 32; };

  var resultado = pasaraFarenheit(22); //71.6
  //alert(resultado);
  console.log({ resultado })
  
  let pasaraCelsius = (grado) => { return (grado - 32) / 1.8; };
  
  let temperatura = pasaraCelsius(72); //22.222222222222
  //alert(temperatura);
}



function tarea16act1(){
  let multiply = function (x, y) {
    return x * y;
  }
  let expon = function (x, y) {
    return Math.pow(x, y);
  }
  
  let suma = (x, y) => { return x + y };
  
  
  let resta = (x, y) => { return x - y };
  var result = resta(5, 2); //para acceder a 'resta' debe estar despues de que se inicialize let resta
  //alert(result);
  console.log({ result });
}

