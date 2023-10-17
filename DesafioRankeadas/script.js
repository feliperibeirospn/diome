Rank(5,10)
function Rank(derrotas, vitorias){
  
  let saldoVitorias=(vitorias-derrotas)
  if (saldoVitorias <= 10) {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Ferro`);
  } else if (saldoVitorias <= 20) {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Bronze`);
  } else if (saldoVitorias <= 50) {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Prata`);
  } else if (saldoVitorias <= 80) {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Ouro`);
  } else if (saldoVitorias <= 90) {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Diamante`);
  } else if (saldoVitorias <= 100) {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Lendário`);
  } else {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Imortal`);
  }
  
}

/*Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal*/