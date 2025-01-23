const http = require ('http')

const server = http.createServer((req, res) => {
    console.log('request:',req)
    const{url, method} = req
    console.log('url:',url)
    console.log('method:',method)
    if(url =='/'){
        console.log('home page') 
        res.end('response from end point')
    }
    else if(url == '/test'){
        console.log('test page')
        res.end('response from test end point')
    }
})

server.listen(3000, (err) => {
    if (err) {
        console.log('error',err)
    }
    console.log('Server is listening on port 3000')
})

//nodemon
