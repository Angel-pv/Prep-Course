// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  asd =[]
  objeto.forEach(element => {
    asd.push(element, objeto[element])
  });
  return asd + "no me acuerdo de como era xD y haci lo dejo xP"
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let asd ={}
  let dsa = string.split('').sort();
  for (let a = 0; a < dsa.length; a++) {
    if(!asd[dsa[a]]){
      asd[dsa[a]] = 1

    }
    else{
      asd[dsa[a]] = asd[dsa[a]] + 1

    }
  }
  return asd
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var as = ""
  var sa = ""
  for (var a = 0; a < s.length; a++) {
    if (s[a] === s[a].toUpperCase()) {
      as = as + s[a]
    }
    else{
      sa = sa + s[a]
    }
  }
  return as + sa
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var asd =[]
  for (var a = 0; a < str.length; a++) {
    asd.unshift(str[a])    
  }
  return asd.join("").split(" ").reverse().join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var asd = numero.toString().split("").reverse().join("")
  asd = parseInt(asd)

  if (numero === asd) {
    return "Es capicua"
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  asd = cadena.split("").filter(a => a !== "a" && a !== "b" && a !== "c")
  return asd.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (var a = 0; a < arr.length; a++) {
    for (var z = a + 1; z < arr.length; z++) {
      if (arr[a].length > arr[z].length) {
        var asd = arr[a]
        arr[a] = arr[z]
        arr[z] = asd
      }
    }    
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var asd = []
  for (var a = 0; a < arreglo1.length; a++) {
    for (var z = 0; z < arreglo2.length; z++) {
      if (arreglo1[a] === arreglo2[z]) {
        asd.push(arreglo1[a])
      }      
    }    
  }
  return asd
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

