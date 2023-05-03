// MAP = percorrer uma lista

// let lista = ["Silvio", "Lucas", "José"];

// lista.map((item, index) => {
//   console.log(`Passando: ${item} - Está na posição ${index}`);
// });

// Reduce = reduzir o array

let numeros = [5,3,2];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    console.log("================================")
    return acumulador += numero;
})

console.log("Total do reduce: " + total);