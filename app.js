const express = require('express');
const app = express()
var api = require('termux-api').default;

const port = 3000

app.get('/', (req, res) => {
    api.createCommand()
        .vibrate()
        .setDuration(1000)
        .build()
        .run();
    res.send('Hello World!')
} )

app.listen(port, () => console.log(`Listening on port ${port}`));