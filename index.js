const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hv1pn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
   try{
       await client.connect();
       const productCollection = client.db('emaJohn').collection('product');

       
   }
   finally{

   }
}
run().catch(console.dir);


app.get('/',(req, res)=>{
   res.send('John is running for Ema')
});
app.listen(port,()=>{
    console.log('John is running on port', port)
}) 