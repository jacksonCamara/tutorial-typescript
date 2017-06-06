export class FuncaoReduce{
    public lista: Array<number> = [1,2,3,4,5,6,7,8,9,10]

    public funcaoReduceSoma(){
       return this.lista.reduce((acc, item)=>{
            return acc + item;
        }, 0)
    }
}