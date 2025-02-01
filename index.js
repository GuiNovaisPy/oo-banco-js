

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
    nome;//definindo atributos
    cpf;
}


class ContaCorrente {
    agencia;
    saldo;


    sacar(valor){ //criando um metodo || funcao 
        if (this.saldo >= valor){ // this aponta que o atributo que devemos utilizar é o do objeto que construimos
            this.saldo -= valor
        }else{
            console.log("valor de saque acima do saldo atual da conta")
        }
    
    }

}


//utilizando classe para criar um novo  objeto
const cliente0 = new Cliente(); //objeto || instancia da classe()
cliente0.nome = 'Ricardo';
cliente0.cpf = 111122233309;


const cliente1 = new Cliente(); 
cliente1.nome = 'Alice';
cliente1.cpf = 948145614816;


const contaCorrenteCliente0 = new ContaCorrente();
contaCorrenteCliente0.agencia = 1001;
contaCorrenteCliente0.saldo = 50;
contaCorrenteCliente0.sacar(100);// utilizando metodo para efetuar o saque


const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.saldo = 0;





console.log("Cliente 0:",cliente0, "informações da conta:", contaCorrenteCliente0);//exibe o objeto inteiro, com base no atributos que foram definidos
console.log("Cliente 1:",cliente1, "informações da conta:", contaCorrenteCliente1);