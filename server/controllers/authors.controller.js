const author = require('../models/authors.model')

module.exports.index = (req, res) => {  //We are exporting a key:val pair of index : function
    res.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}
module.exports.createAuthor =(req,res)=>{
        const {name} = req.body
        author.create({
            name:name
        })
        .then((newAuthor) => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
    }

module.exports.findAll= (req,res)=>{
    author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}
module.exports.findOneAuthor = (req,res)=>{
    author.findById(req.params.id)
        .then(singleAuthor => res.json(singleAuthor))
        .catch(err => res.json(err))
}
module.exports.updateAuthor = (req,res) =>{
    author.findByIdAndUpdate({
        _id:req.params.id
    },
    req.body,
    {new:true,runValidators:true}
    )
        .then(updateAuthor=> res.json(updateAuthor))
        .catch(err=>res.status(400).json(err))
}
module.exports.deleteAuthor = (req,res) =>{
    author.findByIdAndDelete(req.params.id)
        .then(results => res.json(results))
        .catch(err => res.json(err))
}