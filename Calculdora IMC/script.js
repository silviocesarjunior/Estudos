var peso;
var altura;
var resultado;
var imc;

function calcular(event) {
  //o event.preventDefault não apaga os campos após rodar o programa
  event.preventDefault();
  // como o resultado vem como string por padrão eu coloco value para transformar em numero
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);
  resultado = document.getElementById('resultado');

  if (imc < 17) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " +
      imc +
      "<br/> Você está muito abaixo do peso";
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal";
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está acima do peso";
  }else if(imc >= 30){
    resultado.innerHTML =
      "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está obesidade";
  }
// depois de rodar o script todo ele limpa os campos
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';

}
