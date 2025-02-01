

// const cliente1Nome = 'Ricardo';
// const cliente1CPF = 111122233309;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;


// const cliente2Nome = 'Alice';
// const cliente2CPF = 948145614816;
// const cliente2Agencia = 1001;
// const cliente2Saldo = 0;


//
class Cliente { //classe || model
    nome;
    cpf;
    agencia;
    saldo;
}
//utilizando classe para criar um objeto
const cliente0 = new Cliente(); //objeto || instancia da classe()
const cliente1 = new Cliente(); 

cliente0.nome = 'Ricardo';
cliente0.cpf = 111122233309;
cliente0.agencia = 1001;
cliente0.saldo = 0;


cliente1.nome = 'Alice';
cliente1.cpf = 948145614816;
cliente1.agencia = 1001;
cliente1.saldo = 0;



console.log("Cliente 0:",cliente0)//exibe o objeto inteiro, com base no atributos que foram definidos
console.log("Cliente 1:",cliente1)