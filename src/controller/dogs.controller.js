const DogsDAO = require('../DAO/dogs-DAO')

module.exports = (app,bd)=>{

    const DaoDogs = new DogsDAO(bd)

    app.get('/pets/:dogs', async (req,res)=>{
        
        try{
          const verDogs = await DaoDogs.verDogs()
          res.send(verDogs)
        }catch(e){
            res.send()
        }
    })
    app.get('/pets/:dogs/:ID', async (req,res)=>{
        
        try{
            const id = req.params.ID
          const verUmDogs = await DaoDogs.verUmDog(id)
          res.send(verUmDogs)
        }catch(e){
            res.send(e)
        }
    })
    app.post('/pets/:dogs', async (req,res)=>{
        
        try{
            const body = req.body;
            const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, body.GENERO, body.RUA, body.NUMERO, body.CIDADE,body.ESTADO,body.TELEFONE]
            const newDog = await DaoDogs.newDogs(infos)

            res.send(newDog)

        }catch(e){
            res.send(e)
        }
    })
    app.delete('/pets/:dogs/:ID', async (req,res)=>{
        try{
            const id = req.params.ID
            const deleteDogs = await DaoDogs.deleteDogs(id) 
            res.json(deleteDogs)
        }
        catch(e){
            res.json(e)
        }
    })
    app.put('/pets/:dogs/:ID', async (req,res)=>{
        try{
            const id = req.params.ID
            const body = req.body
            const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, body.GENERO, body.RUA, body.NUMERO, body.CIDADE,body.ESTADO,body.TELEFONE]
            const editarDog = await DaoDogs.editDogs(infos,id)

            res.json(editarDog)
        }
        catch(e){
            res.json(e)
        }
    })

}