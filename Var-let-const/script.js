/*let pessoa = {
  nome: "Silvio",
  idade: 30,
  altura: 1.69,
  cargo: 'Programador frontend'
};

console.log(pessoa);*/

/*let usuarios = [
  {nome:"Silvio", cargo: "Desenvolvedor Frontend", status:"ativo"},
  {nome: "Maria", cargo: "Backend", status:"ativo"},
  {nome: "João", cargo: "RH", status:"ativo"}
];
console.log(usuarios);*/

// template strings
let nome = "Silvio";
let sobrenome = "Junior";
let idade = 30;

//modelo 1
// let mensagem = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos de idade";
//modelo 2
let mensagem = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`

console.log(mensagem);