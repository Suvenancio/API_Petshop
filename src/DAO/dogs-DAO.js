module.exports = class DogsDAO {

    constructor(bd){
        this.bd =bd;
    }

    verDogs(){
        return new Promise((resolve,reject)=>{
            this.bd.all(`SELECT * FROM DOGS`, (e, response)=>{
                if(e){
                    reject (`Erro ao acessar BD ${e}`)}
                else {
                    resolve (response)
                }

            })
        })
    }
    verUmDog(id){
        return new Promise((resolve,reject)=>{
            this.bd.all(`SELECT * FROM DOGS WHERE ID = (?)`,id, (e, res)=>{
                if(e)
                    reject (`Erro ao acessar BD ${e}`)
                else 
                    resolve (res)
                
            })
        })

    }

    newDogs(infos){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO DOGS (RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [infos[0],infos[1],infos[2],infos[3],infos[4],infos[5],infos[6],infos[7],infos[8],infos[9]]
            this.bd.run(query, parametros, (e,res)=>{
                if(e)
                    reject (`Erro ao adicionar BD ${e}`)
                
                else resolve ('Dog adicionado com sucesso')

                
            })
        })
    }

    deleteDogs(id){
        return new Promise((resolve,reject)=>{
            const query = 'DELETE FROM DOGS WHERE ID = (?)'
            this.bd.run(query, id, (e,res)=>{
                if(e) reject(`Erro ao excluir BD ${e}`)
                else resolve('Dog excluido com sucesso!')
            })
        })
    }
    editDogs(infos,id){
        return new Promise((resolve,reject)=>{
            const query = 'UPDATE DOGS SET RACA = (?), FOTO = (?), IDADE = (?), NOME = (?), GENERO = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [infos[0],infos[1],infos[2],infos[3],infos[4],infos[5],infos[6],infos[7],infos[8],infos[9], id]

            this.bd.run(query,parametros, (e, response)=>{
                if(e) reject(`Erro ao editar BD ${e}`)
                else resolve('Dog alterado com sucesso')

            })
        })

    }
}