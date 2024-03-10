// To start our server
const app = require('./App')

const port = 3000

app.listen(port, () => {
    console.log(`Running on ${port}...`)
})