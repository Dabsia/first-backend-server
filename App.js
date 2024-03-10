const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tours.routes')
const userRouter = require('./routes/users.routes')


const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use((req, res, next) => {

    next()
})

// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({ message: 'Hello from this server' })
// })
// app.get('/tours', getAllTours)
// app.post('/tours', createNewTour)
// app.get('/tour/:id', getTour)
// app.patch('/tour/:id', updateTour)
// app.delete('/tour/:id', deleteTour)



app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)


module.exports = app