// Define a classe, arma e ataque do Herói de acordo com o 'job'
class hero{
    // Define variáveis locais e valores padrão
    constructor(job){
        this.name = "fooName"
        this.age = 20
        this.job = job
        this.weapon = "fooWeapon"
        // Determina arma do Herói de acordo com 'job'
        if (this.job === "guerreiro") {this.weapon = "espada"}
        else if (this.job === "mago") {this.weapon = "magia"}
        else if (this.job === "monge") {this.weapon = "artes marciais"}
        else if (this.job === "ninja") {this.weapon = "shuriken"}
        else {this.weapon = "a cabeça"}
    }
    // Mensagem de ataque com classe e arma
    attack() {
        console.log(`O ${this.job} atacou usando ${this.weapon}.`)
    }
}

// Heróis instanciados pela 'class hero{}'
let hero1 = new hero("guerreiro")
let hero2 = new hero("mago")
let hero3 = new hero("monge")
let hero4 = new hero("nija")
let hero5 = new hero("indefinido")

// Invoca a função de ataque dos objetos criados
hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()
hero5.attack()