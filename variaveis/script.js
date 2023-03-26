var area = document.getElementById("area");

function entrar() {
  var nome = prompt("Digite seu nome");

  // comparando se a pessoa não digitar o nome ou clicar no botão de cancelar
  //se nome = "" e nome = cancelar faça senão prossiga...
  if (nome === "" || nome === null) {
    alert("Ops algo deu errado");
    area.innerHTML = "Clique no botão para acessar...";
  } else {
    area.innerHTML = "Bem vindo " + nome + " ";

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Logout";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
  }
}

function sair(){
    alert("Até mais");
    area.innerHTML = "Você fez o logout";
}
