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
    res.send(members[(req.params.id)-1].name)
})

app.get('/api/v1/members', (req, res) => {
    if(req.query.max != undefined) {
        res.send(members.slice(0, req.query.max))
    }else {
        res.send(members)
    }
    
    res.send(members)
})

app.listen(8080, () => console.log('Started on port 8080'))