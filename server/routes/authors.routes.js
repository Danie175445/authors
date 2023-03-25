const authorController = require('../controllers/authors.controller')
module.exports = (app) => {
    app.get('/api', authorController.index);
    app.post('/api/author',authorController.createAuthor)
    app.get('/api/author',authorController.findAll,)
    app.get('/api/author/:id',authorController.findOneAuthor)
    app.put('/api/author/:id',authorController.updateAuthor)
    app.delete('/api/author/:id',authorController.deleteAuthor)
}
