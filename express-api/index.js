//error handling middleware

import express from 'express';

const app = express()
const port = 3005

app.get('/', (req, res) => {
    res.send('Hello World form Nodebackend!')
})

app.use((express.json()))

app.post('/test', (req, res) => {
    res.end('post request received from test')
})


app.listen(port, (error)=>{
    if(error){
        console.log('Something went wrong',error)
    }
    console.log('Server is running on port',port)
})