const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Peach",
    rating: 8,
    review: "Good Fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    // Relationship with fruitSchema
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    rating: 9,
    review: "Queen of Fruits"
})

mango.save();

const person = new Person ({
    name: "Shuvo",
    age: 32,
    // favouriteFruit: pineapple
});

Person.updateOne({name: "Shuvo"}, {favouriteFruit: mango}, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Updated Successfully");
    }
})

// person.save();



// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Best Fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 5,
//     review: "Sour"
// })

// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Yellow"
// });

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB!");
//     }
// });

// Fruit.find((err, fruits)=>{
//     if(err){
//         console.log(err);
//     } else {

//         // mongoose.connection.close();
        
//         console.log(fruits)
//         fruits.forEach((fruit)=>{
//             console.log(fruit.name);
//         });
//     }
// });

// Fruit.deleteOne({name: "Peach"}, (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully deleted");
//     }
// });

// Person.deleteMany({name: "SHUVO"}, err => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Person deleted successfully!");
//     }
// });

