const express = require('express');
const path = require('path');
const app = express();
const PORT = 1414;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//Connect to DB


//Server Dependencies
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());

//Serve main page
app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../../index.html')); //Update to use build html file later**
})

//Page Not Found Error
app.use((req,res)=>{
  res.status(404).send('Error: Page Not Found');
});

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//Listen to Port
app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
})