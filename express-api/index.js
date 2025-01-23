import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
    res.end('Response from test endpoint')
})

app.get('/',(req,res)=>{
    res.end('Response from main endpoint')
})


app.post('/login', (req, res) => {
    //login code
    const { username, password } = req.body
    console.log('username:', username)
    console.log('password:', password)
    //email exist 
    //password match
    //generate token=>return
    res.end('Response from login endpoint')
})



app.listen(3005, (err) => {
    if (err)
        console.log('Error: ', err)
    else
        console.log('Server is running on port 3005')
})
