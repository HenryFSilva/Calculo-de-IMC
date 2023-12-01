class Pessoa {
    #nome;
    #idade;
    #peso;
    #altura;

    constructor(nome, idade, peso, altura) {
        this.#nome = nome;
        this.#idade = idade;
        this.#peso = peso;
        this.#altura = altura;
    }
    calculaImc() {
        return (this.#peso / (this.#altura * this.#altura)).toFixed(2);
    }


    falar() {
        throw new Error("Método 'falar' deve ser implementado nas subclasses.");
    }
}


class Funcionario extends Pessoa {
    /**
     * Polimorfismo - Sobrescrita
     * Modifica o escopo do método/função de acordo com o desejado.
     */
    calculaImc() {
        return `O seu IMC é de: ${super.calculaImc()}`
    }
    /**
     * Polimorfismo - Sobrecarga
     * Permite que um determinado método/função tenha um comportamento distinto em função dos diferentes parâmetros que ele receba.
     * @param {String} cargo 
     * @returns 
     */
    falar(cargo) {
        return `Olá, meu cargo é ${cargo}`
    }
}

let func1 = new Funcionario('Gabriel', 25, 70, 1.70);
console.log(func1);
console.log(func1.calculaImc());
console.log(func1.falar('Analista de Sistemas'));

let func2 = new Funcionario('Nicollas', 27, 60, 1.50);
console.log(func2);
console.log(func2.calculaImc());

class Aluno extends Pessoa {
    /**
     * Polimorfismo - Sobrecarga
     * @param {Number} nPeso 
     * @param {Number} nAltura 
     * @returns 
     */
    calculaImc(nPeso, nAltura) {
        return (nPeso / (nAltura * nAltura)).toFixed(4);
    }

    falar(materia){
        return `Eu gosto de estudar ${materia}.`
    }

}

let aluno1 = new Aluno('Thiago', 20, 65, 1.70);
console.log(aluno1);
console.log(aluno1.calculaImc(100,1.8));
console.log(aluno1.falar('Matemática'));