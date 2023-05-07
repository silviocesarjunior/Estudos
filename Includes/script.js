//includes, startsWith, endsWith;

let nomes = ["Silvio", "Cesar", "Junior"];

console.log(nomes.includes("Silvio"));

if (nomes.includes("Silvio")) {
  console.log("Está na lista");
} else {
  console.log("Não está na lista");
}

let nome1 = "Silvio";
console.log(nome1.startsWith("S"));

let nome = "Cesar";
console.log(nome.endsWith("r"));
