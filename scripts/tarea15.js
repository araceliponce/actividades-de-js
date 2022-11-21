//RETO/////////////////////////////////////////////////////

//entrada
let notaParcial, notaExamen, notaPracticas, promedio, estado;
let btnDos = document.getElementById('calcular');
let resultadoDos = document.getElementById('resultadoDos');

//procesos
btnDos.addEventListener('click', () => {
  nombre = document.getElementById('nombre').value;
  notaParcial = document.getElementById('notaParcial').value;
  notaExamen = document.getElementById('notaExamen').value;
  notaPracticas = document.getElementById('notaPracticas').value;

  promedio = (+notaParcial + notaExamen * 2 + +notaPracticas) / 4; //encontre que puedes anteceder un '+' para convertir un objeto de tipo texto a numero
  promedio = promedio.toFixed(2); //reducimos los decimales aqui para no alargar la linea anterior
  console.log({ promedio })

  //salida basada en condicional
  if (promedio > 13) {
    estado = `${nombre} ha aprobado con un promedio de ${promedio}`;
  } else {
    estado = `${nombre} ha desaprobado con un pomedio de ${promedio}`;
  }
  resultadoDos.innerHTML = estado;
});





//entrada
let btnUno = document.querySelector('#btn');
let importeInicial, descuento, importeFinal, resultado1; //solo en cuando haga click al botón obtenemos los valores

btnUno.addEventListener('click', () => {
  importeInicial = document.getElementById('input1').value;
  resultado1 = document.getElementById('resultado1');
  descuento = 0;
  importeFinal;

  //procesos
  if (importeInicial >= 150) {
    descuento = (importeInicial * 0.12).toFixed(2);
    importeFinal = importeInicial - descuento;

    //salida
    resultado1.innerHTML = `Su importe final es ${importeFinal} (se le descontaron ${descuento} a su importe inicial)`;

  } else if (importeInicial > 0) {
    //salida
    resultado1.innerHTML = `Su importe final es ${importeInicial} (igual a su importe inicial)`;
  }
})


//ACTIVIDAD ASINCRONA/////////////////////////////////////////////////////


//ej 1
let nombre, sueldo, nHijos, boton, respuesta; //entrada de variables importantes ya mencionadas en html
let bonificacion;
let sueldoFinal; //variables a calcular
boton = document.getElementById('boton1');


boton.addEventListener('click', () => {
  console.log('click')
  nombre = document.getElementById('nombreT').value;
  sueldo = parseInt(document.getElementById('sueldoT').value);
  nHijos = document.getElementById('nHijosT').value;
  respuesta = document.getElementById('respuesta1');

  //calculos y respuestas
  if (nHijos > 0) {
    bonificacion = sueldo * 0.07;
    console.log({ bonificacion });
    sueldoFinal = sueldo + bonificacion;
    respuesta.innerText = `Usted obtiene una bonificación. Su sueldo final son ${sueldoFinal} soles.`
  } else {
    sueldoFinal = sueldo;
    respuesta.innerText = `Usted obtiene una bonificación. Su sueldo sigue siendo el mismo.`
  }
})


//ej. 2
//entrada
let numero;
let btn = document.getElementById('boton2');
let respuestaDos = document.getElementById('respuesta2');
let porcentaje;

btn.addEventListener('click', () => {
  numero = parseInt(document.getElementById('numero').value);
  //calculos y salida
  if (numero > 500) {
    porcentaje = (numero * 0.18).toFixed(3);
    respuestaDos.innerText = `el número es mayor que 500, su 18% es igual a ${porcentaje}`;
  } else {
    respuestaDos.innerText = 'el número no es mayor que 500'
  }
})


//ej. 3
    //entrada
    let unNumero;
    let respuesta3 = document.getElementById('respuesta3');
    let btn3 = document.getElementById('btn3');
    let factorial;

    //evento asociado a botón
    btn3.addEventListener('click', () => {
      unNumero = parseInt(document.getElementById('unnumero').value);

      let factorial = 1;
      //calculos
      for (i = 1; i <= unNumero; i++) {
        factorial = factorial * i;
        console.log(factorial);
      }
      //salida
      respuesta3.innerText = `el factorial de ${unNumero} es ${factorial}`;
    })
