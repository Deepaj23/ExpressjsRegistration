const express = require('express')
const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.use((req, res, next) => {
    const { firstname, lastname, email, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
        res.status(401).send('Password do not match')
        next();
    }
    else {
        res.send({ firstname, lastname, email, password, confirmpassword })
    }
})

app.post('/register', (req, res) => {
    const { firstname, lastname, email, password, confirmpassword } = req.body;
    res.send({ firstname, lastname, email, password, confirmpassword })
})

app.listen(3000);