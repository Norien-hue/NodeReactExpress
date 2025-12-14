const express = require("express")
const cors = require("cors")
const app = express() 

app.use(cors())
app.use(express.json())

//GET Sin endpoint con hola mundo

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

app.post('/api/saludo', (req, res) => {
    const {nombre} = req.body
    res.json({nombre: `muy bonito chicospor abandonarme el miercoles en procesos`})
})

app.get('/api/saludo/:nombre', (req, res) => {
    const {nombre} = req.params;
    res.json({mensaje: `Hola ${nombre}`})
})

app.get('/api/saludo/', (req, res) => {
    res.json({nombre: `Hola Pap`})
})