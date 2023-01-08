export default function getNomeAleatorio() {
  let nome = "";

  for (let contadorLetra = 1; contadorLetra <= 5; contadorLetra++) {
    nome = nome + getLetraAleatoria();
  }

  return nome;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLetraAleatoria() {
  const listaLetras = "ABCDEFGHIJKLMNOPQRSTUVYWXZ";
  const numeroAleatorio = getRandomIntInclusive(0, 25);

  return listaLetras.substring(numeroAleatorio, numeroAleatorio + 1);
}
