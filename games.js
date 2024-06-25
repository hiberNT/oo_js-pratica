function Game(nome, compatibilidade, lançamento, tamanho) {
    this.nome = nome;
    this.compatibilidade = compatibilidade;
    this.lançamento = lançamento;
    this.tamanho = tamanho;
}

function Ps5(nome, compatibilidade, lançamento, tamanho, empresa, preço, preço_base) {
    Game.call(this, nome, compatibilidade, lançamento, tamanho);
    this.empresa = empresa;   
    let _preço = preço;
    this.preço_base = preço_base;

    this.getPreço = function() {
        return `o game ${this.nome} teve um aumento e ficou ${_preço}`;
        return _preço
    }

    this.setPreço = function(valor) { 
        if (typeof valor === 'number') {
            _preço = valor
        }
    }

    this.aumento = function() {
        const novoPreço = _preço * 1.5;
        _preço = novoPreço;
    }
}

function Xbox(nome, compatibilidade, lançamento, tamanho, empresa, preço, preço_base) {
    Ps5.call(this, nome, compatibilidade, lançamento, tamanho, empresa, preço, preço_base );
    let _preço = preço
    this.getPreço = function() {
        return `o game ${this.nome} teve um aumento e ficou ${_preço}`;
        return _preço
    }

    this.setPreço = function(valor) { 
        if (typeof valor === 'number') {
            _preço = valor
        }
    }

    this.aumento = function() {
        const novoPreço = _preço * 1.5;
        _preço = novoPreço;
    }
}


const spiderMan = new Ps5("Spider-Man", "compativel com PS5", 2023, "98GB","Sony", 300,300);
const starField = new Xbox("Starfield ", "compativel com XBOX", 2023, "125GB","Bethesda",100,100);

console.log(spiderMan);
spiderMan.aumento();
console.log(spiderMan.getPreço());

console.log(starField);
starField.aumento();
console.log(starField.getPreço());


