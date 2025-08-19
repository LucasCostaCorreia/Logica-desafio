rankedRated = sumCalc(135, 40)

function sumCalc(wins, loss) {
  subtraction = wins - loss
  return subtraction
}

function rankingSection(Rated){
  if (Rated <= 10) {
    ranking = "Ferro"
  } else if (Rated > 10 && Rated <= 20){
    ranking = "Bronze"
  } else if (Rated > 20 && Rated <= 50){
    ranking = "Prata"
  } else if (Rated > 50 && Rated <= 80){
    ranking = "Ouro"
  } else if (Rated > 80 && Rated <= 90){
    ranking = "Diamante"
  } else if (Rated > 90 && Rated <= 100){
    ranking = "Lendario"
  } else {
    ranking = "Imortal"
  }
  return ranking
}

classification = rankingSection(rankedRated)

console.log(`O Herói tem de saldo de ${rankedRated} vitorias e está no nível de ${classification}`)