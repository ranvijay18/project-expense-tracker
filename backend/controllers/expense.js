const Expense = require('../models/expense');


exports.getExpenses = async (req, res) => {
    const countAll = await Expense.findAndCountAll();
    const count = countAll.count;
    const page = req.params.page;
    const pageSize = req.params.item;
    console.log(pageSize);
    const expenses = await Expense.findAll({
        limit: +pageSize,
        offset: (page-1) * pageSize,
        order: [  ['createdAt', 'DESC'] ],
    })

    res.json({
        details: expenses,
        currentPage: page,
        hasNextPage: pageSize*page < count,
        hasPreviousPage: page > 1,
    });
}

exports.postExpense = async (req,res) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;

    console.log(req.body);

   const expense = await Expense.create({
        amount: amount,
        description: description,
        category: category
    })

    res.json(expense);
}