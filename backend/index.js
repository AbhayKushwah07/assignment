const connectToMongo = require('./db');
const express = require('express')

var cors = require('cors') 

connectToMongo();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())





//  Routes

 app.use('/user', require('./routes/user'))




app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})