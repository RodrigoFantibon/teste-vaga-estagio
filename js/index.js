// const sequelize = require("../conexBD/conex");
const express = require('express');
const server = express();
const empresas = require('../src/data/empresas.json');
const bodyParser = require ('body-parser');
server.use (bodyParser.json());


//verificar se conectou no banco
// sequelize.authenticate().then(function(){
//     console.log("conectado com sucesso");
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+ erro);
// })
server.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,  Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,  OPTIONS');
    next();
   });



server.get('/empresas', (req,res) => {
    // res.sendFile("C:/Users/rodri/OneDrive/Documentos/desafio/cadastroDeUsuarios/html/index.html");  
return res.json(empresas)
})

server.post('/empresas', (req,res) => { 
return req.json(empresas)
})

// server.post ('/empresas', (req, res, next) => {
//     const empresas = req.body; 
//     console.log(empresas);
//     res.status(201).json({mensagem: 'Empresa inserida'})
//    });



server.listen(3000, () =>{
    console.log("servidor funcionando");
});


module.exports = server;



































// const btn = document.querySelector("#send");
// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     var cnpj = document.querySelector("#txtCNPJ");
//     var valueCNPJ = cnpj.value;

//     var nomeDaEmpresa = document.querySelector("#txtNomeEmpresa");
//     var valueNomeEmpresa = nomeDaEmpresa.value;

//     var cep = document.querySelector("#txtCEP");
//     var valueCEP = cep.value;

//     var Endereco = document.querySelector("#txtEndereco");
//     var valueEndereco = Endereco.value;

//     var nomeDaEmpresa = document.querySelector("#txtNomeEmpresa");
//     var valueNomeEmpresa = nomeDaEmpresa.value;

    
    
// })



