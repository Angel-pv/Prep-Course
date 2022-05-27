// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (asd = 0; asd < array.length; asd++) {
    array[asd] = array[asd] + 1
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  dsa = palabras[0]
  for (asd = 1; asd < palabras.length; asd++) {
    dsa = dsa + " " + palabras[asd]
  }
  return dsa
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (asd = 0; asd < array.length; asd++) {
    if (array[asd] === elemento) {
      return true
    }    
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  dsa = 0
  for (asd = 0; asd < numeros.length; asd++) {
    dsa = dsa + numeros[asd]    
  }
  return dsa
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  dsa = 0
  for (asd = 0; asd < resultadosTest.length; asd++) {
    dsa = dsa + resultadosTest[asd]    
  }
  return dsa / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  sad = 1
  for (asd = 0; asd < numeros.length; asd++) {
    if (numeros[asd] > numeros[sad]) {
      for (dsa = numeros.length - 1; dsa > asd; dsa--) {
        if (numeros[asd] > numeros[dsa]) {
          return numeros[asd]
        }        

      }
    }    
    sad++
  }  // nosewe no quedo pero funciona
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 1) {
    return arguments[0]
  }
  if (arguments.length === 0) {
    return 0
  }
  dsa = 1
  for (asd = 0; asd < arguments.length; asd++) {
    dsa = dsa * arguments[asd]    
  }
  return dsa
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  dsa = []
  for (asd = 0; asd < arreglo.length; asd++) {
    if (arreglo[asd] > 18) {
      dsa.push(arreglo[asd])
    }    
  }
  return dsa.length
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana"
  }
  else return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n === 9) {
    return true
  }
  else if (n > 89 && n < 100) {
    return true
  }
  else if (n > 899 && n < 1000) {
    return
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (dsa = 1; dsa < arreglo.length; dsa++) {
    if (arreglo[0] !== arreglo[dsa]) {
      return false
    }    
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  dsa = []
  for (asd = 0; asd < array.length; asd++) {
    if (array[asd] === "Marzo") {
      dsa.push(array[asd])
      for (sad = 0; sad < array.length; sad++) {
        if (array[sad] === "Noviembre") {
          dsa.push(array[sad])
          for (das = 0; das < array.length; das++) {
            if (array[das] === "Enero") {
              dsa.push(array[das])
              return dsa
                        }            
          }
                }        
      }
        }    
  }
  return "No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  dsa = []
  for (asd = 0; asd < array.length; asd++) {
    if (array[asd] > 100) {
      dsa.push(array[asd])
    }    
  }
  return dsa
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  dsa = []
  for (asd = 1; asd < 11; asd++) {
    sad = asd * 2
    dsa.push(numero + sad)
    if (dsa[asd - 1] === asd) {
      return"Se interrumpió la ejecución"
    }
  }
  return dsa
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  dsa = []
  for (asd = 1; asd < 10; asd++) {
    sad = asd * 2
    dsa.push(numero + sad)    
  }
  return dsa
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
