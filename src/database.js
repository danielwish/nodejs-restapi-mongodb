import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/nodejs-restapi-mongodb-db", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('DB is Connected'))
    .catch(error => console.log(error))