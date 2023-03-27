function pedir() {
  var valor = prompt("Digite um valor de 1 a 4");

  //o prompt irá devolver como texto, uma string, temos que converter para number
  switch (Number(valor)) {
    case 1:
      alert("Opção escolhida 1 = Suco");
      break;
    case 2:
      alert("Opção escolhida 2 = Agua gelada");
      break;
    case 3:
      alert("Opção escolhida 3 = Sorvete");
      break;
    case 4:
      alert("Você chamou o garçom");
      break;
    default:
        alert("Opção inválida, escolha as opção acima");
        break;
  }
}
