function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const arvore01 = {
    nome: 'Ipê Amarelo',
    idade: 20
};

const arvore02 = {
    nome: 'Bálsamo',
    idade: 1
};

const animal01 = {
    nome: 'Gato',
    idade: 3
};

const animal02 = {
    nome: 'Cachorro',
    idade: 1
};

console.log(calculaIdade.call(arvore01, 3))
console.log(calculaIdade.apply(animal02, [9]))