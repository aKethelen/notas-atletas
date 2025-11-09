# Projeto: Calculadora de Notas de Atletas (Ginástica Artística)

Este projeto em JavaScript implementa a lógica de avaliação de uma competição de ginástica artística.
O objetivo é calcular a média de desempenho de cada atleta com base nas notas de cinco jurados, seguindo a regra de desconsiderar a maior e a menor nota antes de calcular a média das três notas restantes.

## Objetivo

Criar uma função em JavaScript (calcularMediaAtletas) que receba uma lista de atletas e suas notas, aplique a regra de descarte e exiba o resultado final no console.

## Regras de Avaliação

Cada jurado atribui uma nota entre 1 e 10.

A média final é calculada com as três notas intermediárias, removendo a maior e a menor nota.

## Tecnologias Utilizadas

Linguagem: JavaScript (ES6+)

Ambiente de Execução: Node.js ou console do navegador

## Como Executar o Projeto

1. Clonar o Repositório
git clone github.com/aKethelen/notas-atletas.git

2. Abrir no VS Code

Abre o VS Code

Pressiona Ctrl + Shift + P

Digita Git: Clone, cola o link e escolhe a pasta de destino

Quando o clone terminar, clica em “Abrir repositório”

3️. Criar e Editar o Arquivo Principal

Dentro da pasta do projeto, cria o arquivo:

tarefas.js

E insere o código principal (exemplo abaixo).

## Rodar o Código

No terminal do VS Code (atalho: Ctrl + ') execute:

node tarefas.js

## Exemplo de Saída no Console

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333

## Estrutura da Solução (tarefas.js)

A função percorre todos os atletas e realiza:

Ordenação: sort((a, b) => a - b) para organizar as notas.

Filtragem: slice(1, 4) remove a maior e a menor nota.

Soma: reduce() soma as três notas centrais.

Média: soma ÷ quantidade de notas válidas.

Exibição: console.log() mostra o resultado formatado.

## Dados de Entrada

let atletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

## Resultado Esperado

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333

 Autor

Kethelen de Azevedo
Desenvolvedora em formação | Ciência da Computação
