export class FuncaoFilter{
    public lista: Array<number> = [1,2,3,4,5,6,7,8,9,10]

    public funcaoMenorQueCinco(): Array<number>{
        let resultado: Array<number>;
        resultado = this.lista.filter(item =>
            item < 5
        )
        console.log(this.lista); //O array lista continua igual
        return resultado; // O array resultado recebe os valores filtrados
    } 
}