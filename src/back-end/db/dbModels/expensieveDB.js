const {Pool} = require('pg')


const PG_URI = 'postgres://fllfdgdj:oeR4dm0nn_rqI8BnghS-nS2Vyu0ylC_p@baasu.db.elephantsql.com/fllfdgdj';

const pool = new Pool({
  connectionString: PG_URI
});

//REFER TO THE DOCS FOLDER FOR SCHEMA IMAGE

module.exports = {
  query: (text, params, callback) =>{
    console.log('query made:', text);
    return pool.query(text,params,callback)
  }
};