


// establezco la utilizacion de var de entorno
require('dotenv').config()



import express from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT



app.use(cors())
app.use(express.json())


app.get('/auth/login', (req, res) => {
    res.send('page login')
  })

app.get('/auth/register', (req, res) => {
    res.send('page register')
})

// app.use(router)
// app.use(notFound)
// app.use(handleError)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})





