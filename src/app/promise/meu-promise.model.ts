/*export class MeuPromise{
    public status = false;

//construtor de promisse recebe uma função como parametro que possui como parametro duas funções, a resolve e a reject
public promise = new Promise ((resolve, reject) =>{
    setTimeout(() => {
        if(status) {
            resolve ('Promise retornado com Sucesso!!!');
        }else{
            reject('Promise retornado com Erro!!!');
        }
    }, 5000);
});

//O then ele aguarda a resposta da promise, se o promisse devolver resolve o then trata, se o promisse devolver reject o catch trata
//O then e catch recebe uma função e com ele o primeiro parametro é o resultado da ação
    promise
        .then(success => console.log(success))
        .catch(error => console.log(error));
console.log('fim');
}
*/