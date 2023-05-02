// Rest operator

// function convidados(...nomes) {

//   console.log("Seja bem vindos todos os convidados");
//   console.log(nomes);
// }

// convidados("João", "Maria", "Joaquim", "Ana")

function gerador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("O número gerado foi " + numeros[numeroGerado]);
}

gerador(1,4,5,15,25,90,20,18);