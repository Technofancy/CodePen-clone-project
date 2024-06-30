const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Namaste!")
})

app.listen(port, () => {
    console.log("App is listning on port", port);
    
})