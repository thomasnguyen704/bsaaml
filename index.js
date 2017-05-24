'use strict'
const express=require('express')
const http=require('http')
let app = express()
app.use(express.static('./assets'))
var options = {
  host: 'albh640283b',
  port: 3001,
  agent:false
};

const endpoints=[
    "/ageOfCases", "/timeToSar", "/alertPriorities"
]
endpoints.map(path=>app.get(path, (req, res)=>{
    const currOptions=Object.assign({}, options, {path})
    return http.get(currOptions, cRes=>{
        let body = '';
        cRes.on('data', (d)=>{
            body += d;
        });
        cRes.on('end', ()=>{
           res.send(body)
        });
    })
}));

app.listen(2999)