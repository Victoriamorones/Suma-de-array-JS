// OPCION 1. CICLO FOR PARA SUMA DE ARRAY

const numero= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sumar = 0;

for (let i = 0; i < numero.length; i++) {
    sumar += numero[i];
}
console.log(sumar);


// OPCION 2. FUNCION PARA SUMAR ARRAY

function sumararray(array_numeros){
let suma = 0;

array_numeros.forEach(function(numeros){
    suma += numeros;
});
return suma;

}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let suma= sumararray(numeros);
console.log(suma)