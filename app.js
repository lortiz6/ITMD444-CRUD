const express = require('express');
const dotenv = require('dotenv')



const app = express();


app.get('/', (req, res) => {
  res.send("WELCOME TO MY PAGE!")
});


app.get('/employees', (req,res) => {
  res.send('Employees');
})

app.listen(3000);