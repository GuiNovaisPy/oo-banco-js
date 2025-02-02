class casa {
    qtdQuartos;
    corExterna;
    corInterna;
    garagem;
    qtdVagasGaragem;

    definirGaragem(garagem){
        this.garagem = garagem;
        if (this.garagem == false && this.qtdVagasGaragem == undefined){
            this.qtdVagasGaragem = 0;
            console.log("sua casa foi criada sem pendencias de configuracao");
        }else{
            if(this.qtdVagasGaragem == undefined){
                console.log("qtd de vagas da garagem ainda não foi definida, porfavor defina.");
            }
            console.log("sua casa foi criada sem pendencias de configuracao");
            
        }
    }
}

const casa0 = new casa();
casa0.qtdQuartos = 3;
casa0.corExterna = 'cinza';
casa0.corInterna = 'branco';
casa0.qtdVagasGaragem = 1;
casa0.definirGaragem(true);
console.log("nossa primeira casa:",casa0);
