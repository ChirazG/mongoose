const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//2 Create a person with this prototype:
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true //required 
    }, 
    age: Number,
    favoriteFoods: [String] //array of strings (*)
})

//const Person= mongoose.model('Person', PersonSchema)

/*const chiraz= new Person({ name: 'chiraz', age: 25, favoriteFoods: ['pizza','chips']})
console.log(chiraz)*/

module.exports = mongoose.model('Person', PersonSchema)