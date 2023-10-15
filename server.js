const bodyParser = require('body-parser');
require('./utils/db')
const productRoutes = require('./routes/productRoutes')
const express = require('express')
const app = express();
const PORT = 3005;

app.use(bodyParser.json());

// apiis
app.use('/api', productRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to the my website');
});

app.get('/welcome', (req, res) => {
    res.send('Welcome to the Muhammad Moazam website');
});

app.listen(PORT, () =>
{
    console.log("Server is running on port" + PORT);    
}
)

