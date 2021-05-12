/*const express = require('express');
const router = express.Router();
const Person = require('../Models/personSchema');*/
//3 Create and Save a Record of a Model:
/*const createAndSavePerson = (done) => {
    let faten = new Person({ name: 'faten', age: 25, favoriteFoods: ['sushi'] })
    faten.save((err, data) => {
        err ? console.log(err) : done(null, data)
    })
};*/

//add person @Post
/*router.post('/newperson', (req, res)=>{
    let newPerson= new Person(req.body)
    newPerson.save( (err, data)=>{
        err? console.log(err) : res.send('person was added')    })
})*/

//4 Create Many Records with model.create()
/*let arrayOfPeople = [
    { name: 'John', age: 105, favoriteFoods: ['salad', 'burritos'] },
    { name: 'Mary', age: 30, favoriteFoods: ['salad', 'burritos'] },
    { name: 'chahrazed', age: 23, favoriteFoods: ['spaghetti','salad',] },
    { name: 'salah', age: 26, favoriteFoods: ['mechwi', 'burritos'] },
    { name: 'mahmoud', age: 15, favoriteFoods: ['salad', 'pizza'] }
];

var createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, createdPeople) => {
        err ? console.log(err) : done(null, createdPeople)
    });

};*/

//5 Use model.find() to Search Your Database
/*Person.find({ name: 'chahrazed' }, (err, data) => {
    err ? console.log(err) : console.log(data)
  });*/

//get persons @Get
/*router.get('/', (req, res)=>{
    Person.find({}, (err, data)=>{
        err? console.log(err) : res.json(data) 
    })
})*/

//6 Use model.findOne() to Return a Single Matching Document from Your Database
/*Person.findOne({favoriteFoods:{$all: ['salad']}}, (err,data)=>{
    err? console.log(err) : console.log(data) 
})*/


//7 Use model.findById() to Search Your Database By _id
/*Person.findById({ _id: '5' }, (err, data) => {
    err ? console.log(err) : console.log(data)
})*/

//get person by id @Get
/*router.get('/:id', (req, res)=>{
    Person.findById({_id: req.params.id}, (err, data)=>{
        err? console.log(err) : res.json(data)  
    })
})*/

//8 Perform Classic Updates by Running Find, Edit, then Save
/*Person.findOne({ name: 'chahrazed' }, (err, result) => {
    if (err) {
        console.log(err)
    }
    else {
        result.age = 25,
        result.favoriteFoods.push('cheesecake'),
        result.save((err, updatedRecord)=>{
            console.log(updatedRecord)
        })
    }
})*/


//9 Perform New Updates on a Document Using model.findOneAndUpdate()
/*Person.findOneAndUpdate({ name: 'chahrazed' },{name: 'chahra', age:25},{new: true} ,(err, data) => {
    err ? console.log(err) : console.log(data)
    
})*/

//updta person by id @Put -> modify
/*router.put('/update/:id', (req, res)=>{
    Person.findByIdAndUpdate({_id: req.params.id}, {...res.body} ,(err, msg)=>{
        err? console.log(err) : res.json({msg: "person is updated"}) 
    })
})*/

//10 Delete One Document Using model.findByIdAndRemove
/*Person.findOneAndRemove({name: 'mahmoud' }, (err, deletedRecord) => {
    if (!err) {
        console.log(deletedRecord)
    }
})
Person.findByIdAndRemove('5', (err, deletedRecord) => {
    if (!err) {
        console.log(deletedRecord)
    }
})*/

// delete person by id @Delete
/*router.delete('/deleteperson/:id', (req, res) => {
    Person.findByIdAndRemove({ _id: req.params.id }, (err, msg) => {
        err ? console.log(err) : res.json({ msg: 'person was removed' })

    })
})*/

//11 MongoDB and Mongoose - Delete Many Documents with model.remove()
/*Person.remove({age: {$gt:25}},(err, data) => {
    err ? console.log(err) : console.log(data)    
})*/

//12 Chain Search Query Helpers to Narrow Search Results
/*Person.find({favoriteFoods:{$all: ['salad']}})
.sort({age: 'asc'})
.limit(3)
.select('name')
.exec((err, data)=>{
    if (!err) {
        console.log(data)
    }
})*/

module.exports = router