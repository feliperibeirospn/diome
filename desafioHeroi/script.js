let hero = { nome: 'joão', xp: '900' }

    switch (hero) {
        case hero.xp <= 1000:
            console.log(`O herói ${hero.nome} está no nível ferro`)
            break;
        case hero.xp <= 2000:
            console.log(`O herói ${hero.nome} está no nível Bronze`)
            break;
        case hero.xp <= 5000:
            console.log(`O herói ${hero.nome} está no nível prata`)
            break;
        case hero.xp <= 7000:
            console.log(`O herói ${hero.nome} está no nível Ouro`)
            break;
        case hero.xp <= 8000:
            console.log(`O herói ${hero.nome} está no nível Platina`)
            break;
        case hero.xp <= 9000:
            console.log(`O herói ${hero.nome} está no nível Ascendente`)
            break;
        case hero.xp <= 10000:
            console.log(`O herói ${hero.nome} está no nível Imortal`)
            break;
        case hero.xp > 10000:
            console.log(`O herói ${hero.nome} está no nível Radiante`)
            break;

    }




/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */