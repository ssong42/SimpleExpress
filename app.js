const express = require('express');
const app = express()
const api = require('termux')

const port = 3000

app.get('/', (req, res) => {
    api.vibrate()
        .duration(1000)
        .run()
    console.log("Connected")
    res.send('Hello World!')
} )

app.listen(port, () => console.log(`Listening on port ${port}`));