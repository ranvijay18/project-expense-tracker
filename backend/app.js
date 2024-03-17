const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const expenseRoute = require('./routes/expense');


app.use(expenseRoute);


sequelize.sync()
.then(() => {
    app.listen(8000);
})
.catch(err => console.error(err));

