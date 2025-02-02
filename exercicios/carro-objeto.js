class Carro {
    aroRodas;
    rodas;
    corExterna;
    corBancos;
    qtdPortas;
    marca;
    modelo;
    ano;
}

const carro0 = new Carro();
console.log("objeto antes de mutar os atributos:",carro0);
carro0.aroRodas = 17;
carro0.rodas = 'orbital';
carro0.corExterna = 'prata';
carro0.corBancos = 'preto';
carro0.qtdPortas = 2;
carro0.marca = 'vw';
carro0.modelo = 'gol bola';
carro0.ano = '1996';
console.log(carro0);
