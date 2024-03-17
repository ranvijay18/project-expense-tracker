const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expense');

router.get('/get-expenses/:page/:item', expenseController.getExpenses);

router.post('/expense', expenseController.postExpense);


module.exports = router;