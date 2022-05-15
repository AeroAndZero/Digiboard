const app = require('express')()
const cors = require('cors')
const mysql = require('mysql2')

app.use(cors())

// Connect to database
const db = mysql.createConnection({
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'digiboard'
})

// Start backend server
app.listen(3001, () => {
    console.log('Backend server started at 3001');
})

// Path to near you billboards based on pincode
app.get('/Locate/nearYou/:pincode', (req,res) => {
    let sql = `select * from boards where pincode=${req.params.pincode}`;
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})

// Path to all billboards
// http://localhost:3001/Locate
app.get('/Locate', (req,res) => {
    let sql = `select * from boards`;
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})

// Path to popular billboard
// http://localhost:3001/Locate/Popular
app.get('/Locate/Popular', (req,res) => {
    let sql = `select * from boards where id>=4 and id<=7`;
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})

app.get('/Auction', (req,res) => {
    let sql = `select * from boards where pincode=380052`;
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})

app.get('/Product/:id', (req,res) => {
    let sql = `select * from boards where id=${req.params.id}`;
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})
