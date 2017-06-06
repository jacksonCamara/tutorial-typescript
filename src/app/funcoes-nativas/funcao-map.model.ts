import {Pessoa} from './pessoa.model';

export class FuncaoMap {
    public pessoa: Pessoa[] = [
            { nome: "Jackson", sobrenome: "Camara", idade: 20, sexo: "Masculino" },
            { nome: "Daiana", sobrenome: "Neves", idade: 22, sexo: "Feminino" },
            { nome: "Louise", sobrenome: "Moreira", idade: 5, sexo: "Feminino" },
            { nome: "Lorena", sobrenome: "Rodrigues", idade: 30, sexo: "Feminino" },
            { nome: "Moises", sobrenome: "Schneider", idade: 40, sexo: "Masculino" }
        ]


    public numeros = [1, 2, 3, 4, 5];

    //===================== FUNÇÃO MAP ========================
    //Chama uma função de retorno de chamada definida em cada elemento de uma matriz e retorna uma matriz que contém os resultados
    //percorre o array, e o valor retornado sera o valor repassado ao indice do novo array
    public funcaoMapMultiplica(mult: number): Array<number> {
        let resultado = this.numeros.map((num) => {
            return num * mult;
        });
        return resultado;
    }

    //===================== FUNÇÃO MAP COM PASSAGEM DE FUNÇÃO POR PARAMETRO ======================== 
    public auxConcatenador(item: any, index: number) {
        console.log(item, index);
        var fullname = [item.nome, item.sobrenome].join("-");
        return fullname;
    }

    public funcaoMapConcatenaString() {
        return this.pessoa.map(this.auxConcatenador);
    } 

    public funcaoMapConcatena() {
        return this.pessoa.map(p=>{
            return [p.nome, p.sobrenome].join("")
        });
    } 


        //===================== FUNÇÃO Slice ======================== 
    //O método slice não modifica o próprio array
    public funcaoMapSelecionaAtributo() {
       return  this.persons.slice(1,3);
    }

}