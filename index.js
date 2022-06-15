var express = require("express");
var app = express();
var { autor } = require("./models")
var { livro } = require("./models")

var cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/autor/:id/livro", async function (req, res){
  const resultado = await autor.findByPk(req.params.id, {include: 'livros'});
  res.json(resultado.livros);
});

app.get("/autor/:id", async function (req, res){
 const resultado =  await autor.findOne({where : {id:req.params.id}});
  res.json(resultado)
});

app.get("/", async function (req, res){
 const resultado =  await autor.findAll();
  res.json(resultado)
  
});

app.post("/autor", function (req, res){
 var resultado = autor.create(req.body);
  res.json(resultado);
});

app.put("/autor/:id", function (req, res){
 var resultado =  autor.update(req.body, {where : {id:req.params.id}});
 res.json(resultado) 
});

app.delete("/autor/:id", async function (req, res){
 var resultado =  await autor.destroy({where : {id:req.params.id}});
 res.json(resultado) 
});

/*Livro*/

app.get("/livro/:id/autor", async function (req, res){
  const resultado = await livro.findByPk(req.params.id, {include: 'autor'});
  res.json(resultado.autor);
});

app.get("/livro/:id", async function (req, res){
 const resultado =  await livro.findOne({where : {id:req.params.id}});
  res.json(resultado)
});

app.get("/livros", async function (req, res){
 const resultado =  await livro.findAll();
  res.json(resultado)
  
});

app.post("/livro", function (req, res){
 var resultado = livro.create(req.body);
  res.json(resultado);
});

app.put("/livro/:id", function (req, res){
 var resultado =  livro.update(req.body, {where : {id:req.params.id}});
 res.json(resultado)
});

app.delete("/livro/:id", async function (req, res){
 var resultado =  await livro.destroy({where : {id:req.params.id}});
 res.json(resultado) 
});

app.listen(3001, function(){
  console.log("O servidor esta em killing spree B)")
});
