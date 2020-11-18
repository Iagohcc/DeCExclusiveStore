const express = require('express');
const mongoose = require('mongoose')
var cors = require('cors')
const app = express();

require('./models/home');
const Home = mongoose.model('Home');

require('./models/contato');
const Contato = mongoose.model('Contato');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Acess-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
})

mongoose.connect('mongodb+srv://Iagohcc:devihcc14789@clusterihcc-daflk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão realizada com sucesso!");
}).catch((err) => {
    console.log("Conexão não realizada: " + err);
});

app.get('/', (req,res) => {
   res.json({name: "Loja DeC Exclusive Store" });
});

app.get('/home', async (req,res) => {
    await Home.findOne({}).then((home) =>{
        return res.json({
            error: false,
            home
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum resgistro encontrado!"
        });
    });
 });

app.post('/home', async (req, res) => {

    const dados = {
      "topTitulo": "Temos a solução",
      "topSubtitulo": "Teste",
      "topTextoBtn": "Entre em contato",
      "topLink": "http://localhost:3000/",

      "serTitulo": "Serviço",
      "serSubtitulo": "Featured",
      
      "serUmIcone": "ECode",
      "serUmTitulo": "Serviço1",
      "serUmDesc": "Featured1",

      "serDoisIcone": "Laptop",
      "serDoisTitulo": "Serviço2",
      "serDoisDesc": "Featured2",

      "serTresIcone": "Mobile",
      "serTresTitulo": "Serviço3",
      "serTresDesc": "Featured3",

   }

 const homeExiste = await Home.findOne({});
 if (homeExiste){
    return res.status(400).json({
        error: true,
        message: "Erro: A página home já existe um registro."
    });
 } 
  await  Home.create(dados, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página home não cadastrado com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Conteúdo da página home cadastrado com sucesso!"
    })
});

app.post('/contato', async (req, res) => {
    await Contato.create(req.body, (err) => {
      if (err) return res.status(400).json ({
          error: true,
          message: "Contato não cadastrado"
      });  
    });
    return res.status(400).json ({
        error: false,
        message: "Contato cadastrado com sucesso!"
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});