const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


app = express()
app.use(express.json())
app.use(cors())



db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'projects'
})
app.post('/add',(req,res)=>{
    const projectName = req.body.projectName;
    const projectDue = req.body.projectDue;
    db.query('INSERT INTO savedprojects (name, Due) VALUES (?,?)', [projectName, projectDue], (err,result)=>{
        if(result.length>0){
            console.log('successful query')
        }
    })
})

app.listen(3307, ()=>{
    console.log('server started on PORT 3307')
})