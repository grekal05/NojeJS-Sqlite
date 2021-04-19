//const http = require('http')

const express = require('express')
const app = express() 
const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('postgres://postgres:example@db:5432/toti')
const User = require ('./models/user')


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database_development.db'
  });
  
  const users = User (sequelize, DataTypes)

app.set('view engine', 'ejs')

app.get ('/fotos', async (req, res) =>{
//res.send('<html><body><h1> Cheguei na rota de fotos, Oba !</h1></body></html>')
const user = await users.findByPk(2)
res.render('fotos',{nome: user.name, descricao: user.description})
//res.render('fotos',{nome:req.query.nome})

})

app.get('/cachorros', (req, res)  =>{
    res.send('<html><body><h1> Cheguei na rota dos cachorros </h1></body></html>')
})

app.post('/', (req,res) =>{
    res.send('Respondendo requisicao POST!')
})

app.post('/cachorros',(req, res) =>{
    res.send ('Adotando cachorros ')
})
app.listen("8080",() => {
    console.log('Inciando o servidor express')
})

/*const server = http.createServer(req, res) => {
    if(req.method === 'GET'){
        if(req.url === '/fotos'){
            res.writeHead(200)
            res.end('<html><body><h1> Cheguei na rota de fotos</h1></body></html>')
        } else if (req.url ==='/cachorros'){
            res.writeHead(200)
            res.end('<html><body><h1> Cheguei na rota dos cachorros </h1></body></html>')

        }else{
            res.writeHead(404)
            res.end('<html><body><h1> Não encontrei a rota  </h1></body></html>')
        }
    }else if (req.method === 'POST'){
        res.writeHead(200)
        res.end('Respondendo requisicao POST !')
    } else if (req.method === 'PUT'){
        res.writeHead(200)
        res.end('Respondendo requisicao PUT !')

} else if (req.method ==='DELETE'){
    res.writeHead(200)
    res.end('Respondendo requisicao DELETE !')
} else {
    res.writeHead(400)
    res.end (`Nao sei tratar esse metodo HTTP: ${req.method}`)
}
}

server.listen(8080)*/