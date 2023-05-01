//let primeiros = [1,2,3];

//let numeros = [...primeiros,4,5,10];

//console.log(numeros);

/*} let pessoa = {
    nome: "Silvio",
    idade: "30",
    cargo: "Frontend"
}

let novaPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "São Paulo/SP"
};

console.log(novaPessoa);*/

function novoUsuario(info) {
  let data = {
    ...info,
    status: "Ativo",
    inicio: "01/05/2023",
    codigo: "847"
  };
  console.log(data);
}

novoUsuario({ nome: "José", sobrenome: "dos Santos", cargo: "Developer" });
