const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000

const server = express();
hbs.registerPartials(__dirname + '/views/partials');
server.set('view engine','hbs')
server.use(express.static(__dirname + '/public/'))

hbs.registerHelper('currentYear',()=>{
  return new Date().getFullYear()
})

hbs.registerHelper('upperCase',(text)=>{
  return text.toUpperCase();
})

server.get('/',(req,res)=>{
  // res.send('<h1>Hello express</h1>');
  res.render('home.hbs',{
    title : 'Home',
    currentYear : new Date().getFullYear(),
    projectName : 'node-web-server'
  })
})

server.get('/about',(req,res)=>{
  res.render('about.hbs',{
    title : 'All about About page',
    currentYear : new Date().getFullYear()
  })
})

server.get('/bad',(req,res)=>{
  res.send({
    result : 'error',
    message : '404!! file not found'
  })
})

server.get('/project',(req,res)=>{
  res.render('project.hbs',{
    title : 'My portfolio',
    projectNames : 'Node.js',
  })
})

server.listen(port,()=>{
  console.log(`Running on ${port}`)
})
