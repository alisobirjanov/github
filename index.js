const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('ali')
})

app.listen(3000)