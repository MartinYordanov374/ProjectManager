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
    const projectStatus = req.body.projectStatus;
   db.query('INSERT INTO savedprojects (name, Due, isFinished) VALUES (?,?,?)', [projectName, projectDue, projectStatus], (err,result)=>{
        if(result.length>0){
            console.log('successful query')
        }
    })
})
app.post('/delete',(req,res)=>{
    const name = req.body.projectID;
    console.log(name)
    db.query('DELETE FROM savedprojects WHERE id=?', name, (err,result)=>{
    })
})
app.post('/getProjects',(req,res)=>{
    db.query('SELECT * FROM savedprojects',(err, result)=>{
        if(err){
            console.log(`An error occurred while querying the database - ${err}`)
            
        }
        else{
            res.send(result)
        }
        
    })
})
app.post('/finishProject',(req,res)=>{
    const projectID = req.body.projectID;
    db.query('UPDATE savedprojects SET isFinished = 0 WHERE id = ?', projectID,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('successful query')
        }
    })
})
app.listen(3307, ()=>{
    console.log('server started on PORT 3307')
})