import {Pessoa} from './pessoa.model';

export class FuncaoSlice{
    public pessoa: Pessoa[] = [
            { nome: "Jackson", sobrenome: "Camara", idade: 20, sexo: "Masculino" },
            { nome: "Daiana", sobrenome: "Neves", idade: 22, sexo: "Feminino" },
            { nome: "Louise", sobrenome: "Moreira", idade: 5, sexo: "Feminino" },
            { nome: "Lorena", sobrenome: "Rodrigues", idade: 30, sexo: "Feminino" },
            { nome: "Moises", sobrenome: "Schneider", idade: 40, sexo: "Masculino" }
        ]
        
    //===================== FUNÇÃO Slice ======================== 
    //O método slice não modifica o próprio array
    public funcaoSliceArray() {
       return  this.pessoa.slice(1,3);
    }
}