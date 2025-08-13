let name = "Lukarius"
let exp = 15000

if (exp < 1000) {
  level = "Ferro"
} else if (exp > 1000 && exp <= 2000 ){
  level = "Bronze"
}else if (exp > 2000 && exp <= 5000 ){
  level = "Prata"
}else if (exp > 5000 && exp <= 7000 ){
  level = "Ouro"
}else if (exp > 7000 && exp <= 8000 ){
  level = "Platina"
}else if (exp > 8000 && exp <= 9000 ){
  level = "Ascendente"
}else if (exp > 9000 && exp <= 10000 ){
  level = "Imortal"
}else  {
  level = "Radiante"
}

console.log(`O Herói de nome ${name} está no nível de ${level}`)