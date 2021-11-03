const express = require('express')
const app = express()
const port = 4040
const controller = require('./controllers/user-controller')
// app.use(express.json)
// app.use(express.urlencoded({ extended: false }));

app.use("/users", controller)

// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

app.listen(port, () => {
    console.log('Listening on port', port)
})