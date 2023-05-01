//
let pessoa = {
  nome: "Silvio",
  sobrenome: "Junior",
  empresa: "Freelancer - Silvocasdev",
  cargo: "Programador frontend",
};

// console.log(pessoa.nome);
//console.log(pessoa.cargo);

// const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa;
// console.log("Nome da pessoa " + nomePessoa);
// console.log(sobrenome);
// console.log(empresa);
// console.log(cargo);

//Desconstruir um array

let nomes = ["Silvio", "Lucas", "Henrique"];

let [primeironome,segundonome] = nomes;
console.log(primeironome);
console.log(segundonome);