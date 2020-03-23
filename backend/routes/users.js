const router = require('express').Router();
const users = require('../models/users.model');

router.route('/').get((req, res) => {
    const usersList = users.map(u => ({id: u.id, username: u.username}))
    res.json(usersList)
});

router.route('/:id').get((req, res) => {
    const userId = req.path.match(/\d/gi).join('');
    res.json(users.find(u => u.id === userId))
}); 

module.exports = router;
