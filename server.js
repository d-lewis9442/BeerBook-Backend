const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const UserRouter = require('./routes/UserRouter')
const BeerRouter = require('./routes/BeerRouter')
const BeerListRouter = require('./routes/BeerListRouter')
const AuthRouter = require('./routes/AuthRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/user', UserRouter)
app.use('/beer', BeerRouter)
app.use('/beerlist', BeerListRouter)
app.use('/auth', AuthRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
