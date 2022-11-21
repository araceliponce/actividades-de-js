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
