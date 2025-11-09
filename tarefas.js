// Função para calcular média removendo a maior e a menor nota
function calcularMediaValida(notas) {
  let maior = Math.max(...notas);
  let menor = Math.min(...notas);

  // Remove a maior e a menor nota
  let notasValidas = notas.filter(nota => nota !== maior && nota !== menor);

  // Caso todas sejam iguais e acabe removendo todas, evita erro:
  if (notasValidas.length === 0) notasValidas = notas;

  let soma = notasValidas.reduce((a, b) => a + b, 0);
  return (soma / notasValidas.length).toFixed(2);
}

// Função para registrar o atleta
function registrarAtleta(nome, notas) {
  let media = calcularMediaValida(notas);

  console.log(`Atleta: ${nome}`);
  console.log(`Notas Obtidas: ${notas.join(", ")}`);
  console.log(`Média Válida: ${media}`);
  console.log(""); // linha em branco entre atletas
}

// 🏋️‍♂️ Exemplo de uso
registrarAtleta("Cesar Abascal", [10, 9.34, 8.42, 10, 7.88]);
registrarAtleta("Fernando Puntel", [8, 10, 10, 7, 9.33]);
registrarAtleta("Daiane Jelinsky", [7, 10, 9.5, 9.5, 8]);
registrarAtleta("Bruno Castro", [10, 10, 10, 9, 9.5]);
