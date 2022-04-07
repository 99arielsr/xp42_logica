//Variável com nome completo:
const nomeCompleto = "Ariel da Silva Rodrigues";
console.log(`Meu nome completo é ${nomeCompleto}`);

//Soma de variáveis:
let numeroA = 10;
let numeroB = 20;
let resultado = numeroA + numeroB;
console.log(`O resultado de ${numeroA} + ${numeroB} é: ${resultado}`);

//função de saudação com chamada de variável contendo o nome:
function saudacao() {
  console.log(`Saudações, eu sou o ${nomeCompleto}`);
}
saudacao();

//Multiplicações em função:
function multiplica(a, b) {
  let resultado = a * b;
  console.log(`A multiplicação de ${a} x ${b} resulta em: ${resultado}`);
  return resultado;
}
multiplica(10, 10);

//Verificador de condicional:
function podeDirigir(idade) {
  if (idade >= 18) {
    console.log("Parabéns, você é maior de idade e pode dirigir. =)");
  } else {
    console.log("Que pena, você ainda não pode dirigir =|");
  }
}
podeDirigir(18);

//Contador de 0 a 20:
console.log("Contador de 0 a 20:");
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//Contador de 0 a 20 selecionando apenas números ímpares:
console.log("Contador de 0 a 20 (apenas ímpares):");
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Tabuada até x10 do valor de entrada:
function tabuada(n) {
  console.log(`A tabuada de ${n} é:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = n * i;
    console.log(`${n} x ${i} = ${resultado}`);
  }
}
tabuada(2);

//Conversor de minutos em horas:
function converterEmHoras(minutos) {
  let conversor = minutos / 60;
  console.log(`${minutos} minutos equivalem a ${conversor.toFixed(2)} horas.`);
}
converterEmHoras(200);
