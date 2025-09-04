class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }


  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Shaolin", 40, "monge"),
  new Heroi("Hanzo", 25, "ninja")
];

for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
