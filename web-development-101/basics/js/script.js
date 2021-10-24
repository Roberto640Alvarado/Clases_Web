// Obtenemos el contenedor por clase
var container = document.getElementsByClassName('container')[0];

// Obtenemos el boton por id
var btn = document.getElementById('change-color');
var btnBg = document.getElementById('change-bg-color');

// Colocar una funcion a ejecutar cuando se escuche el evento click
// Event Handler

// Sintaxis de funcion explicita
btn.onclick = function() {
    // Intercambiar la clase seleccionada a un elemento de HTML
    container.classList.toggle('text-white');
}

// Sintaxis arrow
btnBg.onclick = () => {
    container.classList.toggle('bg-dark');
}

// Diferencia entre var y let
// El alcance de var es global (o a nivel de archivo)
// for(var i = 0; i < 10; i++)
//     console.log('salu2')

// Let solo existe en el contexto declarado
// for(let j = 0; j < 10; j++)
//     console.log('salu2')

// console.log(`${i} imprimiendo i`)
// console.log(`${j} imprimiendo j`)

// Operaciones con arreglos
var baseArray = [
    'walter',
    'manuel',
    'juan',
    'xiomara',
    'elmer',
    'samuel',
    'melvin',
    'erick'
]

function isVowel(a) {
    return a == 'a' || a == 'e' || a == 'i' || a == 'o' || a =='u'
}

// Filter
// Metodo que recibe un predicado y retorna un arreglo con los elementos
// que cumplen el predicado
// Predicado: Funcion que retorna un valor de verdad

var vowel = baseArray.filter((it) => isVowel(it[0]))
console.group('Filter');
console.log(vowel);
console.groupEnd();

// Includes
// Para saber si un elemento existe dentro del arreglo
console.group('Includes');
console.log(baseArray.includes('walter'))
console.log(baseArray.includes('tuprima'))
console.groupEnd();

// Join
// Junta todos los elementos como una cadena de texto, separados por un delimitador
console.group('Join');
console.log(baseArray.join(','))
console.log(baseArray.join(' y tambien '))
console.groupEnd();

// Push
console.group('Push');
console.log(baseArray)
baseArray.push('Nuevo al final')
console.log(baseArray)
console.groupEnd();

// Unshift - Agregar elemento al inicio
console.group('Unshift');
console.log(baseArray)
baseArray.unshift('Nuevo al inicio')
console.log(baseArray)
console.groupEnd();

// Shift - Eliminar elemento al inicio
console.group('Shift');
console.log(baseArray)
baseArray.shift()
console.log(baseArray)
console.groupEnd();

// indexOf - Obtener el indice donde se encuentra un elemento
console.group('Index of');
var samuelIndex = baseArray.indexOf('samuel')
console.log(samuelIndex)
console.groupEnd();

// Splice - Eliminar el elemento en una posicion (rangos)
console.group('Splice');
baseArray.splice(samuelIndex, 1)
console.log(baseArray)
console.groupEnd();

// Map 
// Convertir un elemento a otro
console.group('Map');
var mappedArray = baseArray.map((it) => it[0])
console.log(mappedArray)

var objArray = [
    { name: 'walter', age: 21 },
    { name: 'samuel', age: 20 },
    { name: 'erick', age: 18 },
    { name: 'xiomara', age: 19 },
    { name: 'jonathan', age: 22 },
    { name: 'melvin', age: 23 },
]

var mappedObjArray = objArray.map((it) => `${it.name}, ${it.age}`)
console.log(mappedObjArray)

console.groupEnd();

// ForEach
// Recorrer los elementos de un arreglo
console.group('For each');
baseArray.forEach((it) => {
    console.log(it)
})
console.groupEnd();

// Objetos
// Propiedades, variables, funciones, arreglos, u otros objetos
var obj = {
    num: 10,
    printData: (a) => {
        console.log(a)
    },
    subObj: {
        subNum: 20,
        subPrintData: (b) => {
            console.log(b)
        }
    }
}

console.log(obj.num);
console.log(obj.subObj.subNum);
obj.printData('salu2');
obj.subObj.subPrintData('salu2 sub');

var { num, subObj } = obj;
console.log(num);
console.log(subObj);