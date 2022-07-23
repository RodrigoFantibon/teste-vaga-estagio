const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadastroClientes', 'root', 'sua senha',{
    host: "localhost",
    dialect: 'mysql'
})

const express = require('express');
const server = express();
const empresas = require('../src/data/empresas.json');
const bodyParser = require ('body-parser');
server.use (bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}))

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
    const cadastro = sequelize.define('cadEmpresas', {
        cnpj: {
            type: Sequelize.INTEGER,
        },
        NomeEmpresa: {
            type: Sequelize.TEXT
        },
        cep: {
            type: Sequelize.INTEGER
        },
        Endereco: {
            type: Sequelize.TEXT
        },
        Numero: {
            type: Sequelize.INTEGER
        },
        Bairro: {
            type: Sequelize.TEXT
        },
        uf: {
            type: Sequelize.TEXT
        },
        Cidade: {
            type: Sequelize.TEXT
        }
    })

     var busca  = async () => {
    const projeto = await cadastro.findAll();
    console.log(projeto)
    return res.json(projeto);
}
busca();
// return res.json(empresas) //mostrar os dados do json
})


server.post ('/empresas', (req, res, next) => {
    empresas.push(req.body);
    const cadastro = sequelize.define('cadEmpresas', {
        cnpj: {
            type: Sequelize.INTEGER,
        },
        NomeEmpresa: {
            type: Sequelize.TEXT
        },
        cep: {
            type: Sequelize.INTEGER
        },
        Endereco: {
            type: Sequelize.TEXT
        },
        Numero: {
            type: Sequelize.INTEGER
        },
        Bairro: {
            type: Sequelize.TEXT
        },
        uf: {
            type: Sequelize.TEXT
        },
        Cidade: {
            type: Sequelize.TEXT
        }
    })
        cadastro.create({
        cnpj: req.body.cnpj,
        NomeEmpresa: req.body.NomeEmpresa,
        cep: req.body.cep,
        Endereco: req.body.endereco,
        Numero: req.body.numero,
        Bairro: req.body.bairro,
        uf: req.body.uf,
        Cidade: req.body.cidade
        })
    
    res.status(201).json({mensagem: 'Empresa inserida'})
   });





server.listen(3000, () =>{
    console.log("servidor funcionando");
});




































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



