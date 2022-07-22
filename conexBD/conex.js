const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadastroClientes', 'root', '26273059',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = sequelize;

// verificar se conectou a banco
sequelize.authenticate().then(function(){
    console.log("conectado com sucesso");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro);
})

// const cadastro = sequelize.define('cadEmpresas', {
//     cnpj: {
//         type: Sequelize.INTEGER,
//     },
//     NomeEmpresa: {
//         type: Sequelize.TEXT
//     },
//     cep: {
//         type: Sequelize.INTEGER
//     },
//     Endereco: {
//         type: Sequelize.TEXT
//     },
//     Numero: {
//         type: Sequelize.INTEGER
//     },
//     Bairro: {
//         type: Sequelize.TEXT
//     },
//     uf: {
//         type: Sequelize.TEXT
//     },
//     Cidade: {
//         type: Sequelize.TEXT
//     }

// })

// cadastro.sync({force: true}) //rodar apenas uma vez para garantir a criação da tabela


// INSERINDO DADOS NA tabela, (teste)
// cadastro.create({
//     cnpj: "1111222333",
//     NomeEmpresa: "empresa55",
//     cep: "09909",
//     Endereco: "rua test",
//     Numero: "66",
//     Bairro: "vila test",
//     uf: "MG",
//     Cidade: "Minas Gerais"
// })