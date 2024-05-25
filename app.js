const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const dataController = require('./controllers/dataController');
const loginController = require('./controllers/loginController');
const { log } = require('console');

const app = express();
const port = 3000;

// app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/new_meta', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });



  app.get('/about', (req,res) => {
    res.render('about.ejs')
  })

  app.get('/' , (req,res) =>{
    res.render('home')
  })

  // app.get('/home' , (req,res) =>{
  //   res.render('home')
  // })

  app.get('/contact' , (req,res) =>{
    res.render('contact.ejs')
  })

  app.get('/signup', (req, res) => {
    console.log("this is the signup route")
    res.render('index', { data: [] });    //issi se purana wla data bhi dikh rha h
  });

  // app.get('/login' , (req,res) =>{
  //   console.log("This is login page");
  //   res.render('login',{ data:[] });
  // })

app.post('/submit', dataController.submitData);
app.get('/display', dataController.displayData);

app.post('/login', loginController.login);
// app.get('/display', loginController.displayData);

app.get('/scene' , (req,res) =>{
  console.log("this is your scene");
  res.render('scene')
})

app.get('/checkout', (req, res) => {
  // Render the checkout.ejs template when /checkout is accessed
  res.render('checkout');
});

app.get('/payment' , (req,res) => {
  res.render("linkpe")
})


app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
