const express = require('express')
const app = express()
const PORT = 8000


const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    } ,
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
// the term 'name' is a query parameter it can be named rainbowunicorn if you wanted to.
app.get('/api/:name', (request, response)=>{
    let rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log('The server is now running on port ${PORT}! Betta Go Catch It!')
})