let hero = { nome: 'joão', xp: 5000 };

if (hero.xp <= 1000) {
  console.log(`O herói ${hero.nome} está no nível ferro`);
} else if (hero.xp <= 2000) {
  console.log(`O herói ${hero.nome} está no nível Bronze`);
} else if (hero.xp <= 5000) {
  console.log(`O herói ${hero.nome} está no nível prata`);
} else if (hero.xp <= 7000) {
  console.log(`O herói ${hero.nome} está no nível Ouro`);
} else if (hero.xp <= 8000) {
  console.log(`O herói ${hero.nome} está no nível Platina`);
} else if (hero.xp <= 9000) {
  console.log(`O herói ${hero.nome} está no nível Ascendente`);
} else if (hero.xp <= 10000) {
  console.log(`O herói ${hero.nome} está no nível Imortal`);
} else {
  console.log(`O herói ${hero.nome} está no nível Radiante`);
}

/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */