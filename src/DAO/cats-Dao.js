const { response } = require("express")

module.exports = class CatsDao{
    constructor(bd){
        this.bd =bd
    }

    verCats(){
        return new Promise((resolve,reject)=>{
            this.bd.all(`SELECT * FROM CATS`, (e, response)=>{
                if(e){
                    reject (`Erro ao acessar BD ${e}`)}
                else {
                    resolve (response)
                }

            })
        })
    }
    verUmCats(id){
        new Promise((resolve,reject)=>{
            this.bd.all(`SELECT * FROM CATS WHERE ID = (?)`, id, (e,response)=>{
                if(e) reject (`Erro ao acessar BD ${e}`)
                else resolve (response)
            })
        })
    }

    newCat(infos){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO CATS (RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [infos[0],infos[1],infos[2],infos[3],infos[4],infos[5],infos[6],infos[7],infos[8],infos[9]]
            this.bd.run(query, parametros, (e,res)=>{
                if(e)
                    reject (`Erro ao adicionar BD ${e}`)
                
                else resolve ('Cat adicionado com sucesso')

                
            })
        })
    }

    deleteCat(id){
        return new Promise((resolve,reject)=>{
            const query = 'DELETE FROM CATS WHERE ID = (?)'
            this.bd.run(query, id, (e,res)=>{
                if(e) reject(`Erro ao excluir BD ${e}`)
                else resolve('excluido com sucesso!')
            })
        })
    }
    

}