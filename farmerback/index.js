const connectToMongo=require('./db')
const express = require('express')
connectToMongo();
var cors = require('cors')
const app = express()
const port = 5000
const { spawn } = require('child_process');
app.use(cors())
app.use(express.json());//middleware is necessary for link respose to perfrom json
//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/farmers',require('./routes/farmers'))
app.post('/api/crop', (req, res) => {
   const { n,p,k,t,h,ph,rain } = req.body;
 
   const childProcess = spawn('python', ['crop recommendation.py',n,p,k,t,h,ph,rain]);
 
   let output = '';
 
   childProcess.stdout.on('data', (data) => {
     output += data.toString();
   });
 
   childProcess.stderr.on('data', (data) => {
     console.error(data.toString());
   });
 
   childProcess.on('close', (code) => {
     console.log(`child process exited with code ${code}`);
     res.json({ output });
   });
 });
 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})