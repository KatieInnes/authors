const Author = require('../models/author.model');

module.exports = {
    createAuthor: (request, response) => {
        const { author } = request.body;
        Author.createAuthor({
            author: author
        })
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    }
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => {
            res.json(oneAuthor)
        })
        .catch(err => res.json(err));
}
    
module.exports.findAllAuthors = (req, res) => {
    Author.find().sort({authorName: 1})
        .then((allTheAuthors) => {
            res.json(allTheAuthors)
        })
        .catch(err => res.json(err));
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateAuthor => {
            res.json(updateAuthor)
        })
        .catch(err => res.json(err));
}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => {
            res.json(deleteConfirmation)
        })
        .catch(err => res.json(err));
}