const CatsDao = require('../DAO/cats-Dao')

module.exports = (app,bd)=>{

    const DaoCats = new CatsDao(bd)

    app.get('pets/:cats', async (req,res)=>{
        const verCats = DaoCats.verCats()

        res.send(verCats)
    })
    app.get('pets/cats/:ID', async (req,res)=>{
        const id = req.params.ID
        const verUmCat = DaoCats.verUmCats(id)

        res.send(verUmCat)
    })

    app.post('/pets/cats', async (req,res)=>{
        
        try{
            const body = req.body;
            const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, body.GENERO, body.RUA, body.NUMERO, body.CIDADE,body.ESTADO,body.TELEFONE]
            const newCat = await DaoCats.newCat((infos))
            
            res.send(newCat)

        }catch(e){
            res.send(e)
        }
    })
    app.delete('/pets/cats/:ID', async (req,res)=>{
        try{
            const id = req.params.ID
            const deleteCat = await DaoCats.deleteCat(id) 
            res.json({deleteCat})
        }
        catch(e){
            res.json(e)
        }
    })
    app.put('/pets/cats/:ID', async (req,res)=>{
        try{
            const id = req.params.ID
            const body = req.body
            const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, body.GENERO, body.RUA, body.NUMERO, body.CIDADE,body.ESTADO,body.TELEFONE]
            const editarCat = await DaoCats.editCats(infos,id)

            res.json(editarCat)
        }
        catch(e){
            res.json(e)
        }
    })

}