const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

        mongoose.connect('mongodb://127.0.0.1:27017/product-apis', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) =>
{
    console.log("Failed to connect database");
})
db.once('open', () =>
{
    console.log("Connected with database");
})
