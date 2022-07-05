const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog');
const { result } = require('lodash');

// express app
const app = express();

// connect to mongoDB
const dbURI = ''
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
   .then((result) => {
      app.listen(3000);
   })
   .catch((err) => {
      console.log(err)
   })

// register view engine
app.set('view engine', 'ejs');

// listen for request


// middleware and static files
app.use(express.static('public'))
app.use(morgan('dev'));


// Routes
app.get('/', (req, res) => {
   res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', {title: 'About'})
});

// Blog Routes
app.get('/blogs', (req, res) => {
   Blog.find().sort({ createdAt: -1 })
   .then((result) => {
      res.render('index', {title: 'All blogs', blogs: result})
   })
   .catch((err) => {
      console.log(err)
   })
})
app.get('/blogs/create', (req, res) => {
   res.render('create', {title: 'Create'})
})

app.use((req, res) =>{
   res.status(404).render('404', {title: '404'})
})