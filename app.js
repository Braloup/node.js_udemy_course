const express = require('express');
const morgan = require('morgan');
const app = express();

const members = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Julie'
    },
    {
        id: 3,
        name: 'Jack'
    }
]

app.use(morgan('dev')) 

app.get('/api/v1/members/:id', (req ,res) => {
    res.json(succes(members[(req.params.id)-1].name))
})

app.get('/api/v1/members', (req, res) => {
    if(req.query.max != undefined && req.query.max > 0) {
        res.send(succes(members.slice(0, req.query.max)))
    }else if (req.query.max != undefined){
        res.json(error('Wrong max value'))
    }else {
        res.json(succes(members))
    }
    
    res.json(members)
})

app.listen(8080, () => console.log('Started on port 8080'))

function succes(result){
    return {
        status: 'succes',
        resusult: result
    }
}

function error(message) {
    return {
        status: 'error',
        message: message
    }
}