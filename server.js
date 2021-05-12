const express = require('express')
const mongoose = require('mongoose')
const app= express()
const Person = require('./Models/personSchema'); //2 Create a person with this prototype:
//1 Installing and setting up Mongoose:
//connexion database with server (bsh njib ladress)
const mongoUrl = "mongodb+srv://chiraz123:chiraz123@cluster0.b0uuk.mongodb.net/db1?retryWrites=true&w=majority"
//parse the data
//ken man7outesh app.use(express.json()) moush 9a3ed yrecuperi fil valeur
app.use(express.json())

//app.use('/persons', require('./Routes/personRoutes'))

mongoose.connect( mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
    err? console.log(err) : console.log('database is connected')
})

const port = 5005
app.listen(port,(err)=>{
  err ? console.log(err) : console.log('server is running on port 5005')  
})

//3 Create and Save a Record of a Model:
const createAndSavePerson = (done) => {
  let faten = new Person({ name: 'faten', age: 25, favoriteFoods: ['sushi'] })
  faten.save((err, data) => {
      err ? console.log(err) : done(null, data)
  })
};
//4 Create Many Records with model.create()
let arrayOfPeople = [
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

};

//5 Use model.find() to Search Your Database
var findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, arrayOfResults) => {
      err ? console.log(err) : done(null, arrayOfResults)
  });
};

//6 Use model.findOne() to Return a Single Matching Document from Your Database
var findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: { $all: [food] } }, (err, result) => {
      err ? console.log(err) : done(null, result)
  })

}

//7 Use model.findById() to Search Your Database By _id
var findPersonById = (personId, done) => {
  Person.findOne(personId, (err, result) => {
      err ? console.log(err) : done(null, result)
  });
};

//8 Perform Classic Updates by Running Find, Edit, then Save
var findEditThenSave = (personId, done) => {
  var foodToAdd = 'hamburger';
  Person.findById(personId, (err, result) => {
      if (err) {
          console.log(err)
      }
      else {
          result.age = 25,
              result.favoriteFoods.push(foodToAdd),
              result.save((err, updatedRecord) => {
                  err ? console.log(err) : done(null, updatedRecord)
              })
      }
  })
};

//9 Perform New Updates on a Document Using model.findOneAndUpdate()
var findAndUpdate = (personName, done) => {
  var ageToSet = 20;
  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, (err, updatedRecord) => {
      err ? console.log(err) : done(null, updatedRecord)

  });
};

//10 Delete One Document Using model.findByIdAndRemove
var removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, deletedRecord) => {
      err ? console.log(err) : done(null, deletedRecord)
  });
};

//11 MongoDB and Mongoose - Delete Many Documents with model.remove()
var removeManyPeople = (done) => {
  var nameToRemove = 'Mary';
  Person.remove({ name: nameToRemove }, (err, jsonStatus) => {
      err ? console.log(err) : done(null, jsonStatus)
  });
};

//12 Chain Search Query Helpers to Narrow Search Results
var queryChain = (done) => {
  var foodToSearch = "burritos";
  Person.find({ favoriteFoods: { $all: [foodToSearch] } })
      .sort({ name: 'asc' })
      .limit(3)
      .select('-age')
      .exec((err, filteredResults) => {
          err ? console.log(err) : done(null, filteredResults)
      });
};

//sna3na server w sna3na database w connectinehom bib3athom
//mba3ed etape bsh nasna3 schema 