const express = require('express')
const app = express()
const mongoose = require('mongoose')
const education = require('./models/educationModel')

//middleware
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send('Hello Node Api')
})

app.get('/info', (req, res) =>{
    res.send('Hello info 2')
})

app.post('/education', async(req, res) => {
    try {
        const education = await education.create(req.body)
        res.status(200).json(education);

    } catch {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('')
.then(() =>{
    console.log('conected to mongoDB')
    app.listen(3000, () => {
        console.log("The Server is running on port 3000")
    })
}).catch((error) =>{
    console.log('error:', error.message)
}) 