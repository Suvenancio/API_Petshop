const request = require('supertest')

test('/pets/dogs', async ()=>{

    await request('http://localhost:3030')
    .get('/pets/:dogs')
    .expect(200)
    .then((res)=> console.log('Passou'))
})

test('/pets/dogs', async ()=>{

    await request('http://localhost:3030')
    .post('/pets/:dogs')
    .send(  {
        "ID": 1,
        "RACA": "affenpinscher",
        "FOTO": "https://images.dog.ceo/breeds/bluetick/n02088632_101.jpg",
        "IDADE": "0",
        "NOME": "Enes",
        "GENERO": "male",
        "RUA": "Rua Bela Vista ",
        "NUMERO": "2359",
        "CIDADE": "Trindade",
        "ESTADO": "Goiás",
        "TELEFONE": "(24) 7714-2033"
      })
    .expect(200)
    .then((res)=> console.log('Passou'))
})