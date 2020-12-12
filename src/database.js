const mongoose = require('mongoose')

URI = ('mongodb+srv://patrickteste:patrickteste@cluster0.mg38a.mongodb.net/dadosteste?retryWrites=true&w=majority')

mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(db => console.log('base de dados conectada'))
    .catch(error => console.log(error))

module.exports = mongoose;