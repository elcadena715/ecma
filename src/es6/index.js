function newFunction(name, age, country){
    var name  = name || "oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name, age, country);
}

//es6 1
function newFunction2(name = "Oscar", age = 32, country = "mx"){
    console.log(name, age, country);
}
newFunction2();
newFunction2("Ricardo", "23", "CO");


let hello = "Hello";
let world = "World";
let epicP = hello +" "+world;
console.log(epicP);
let epicP2 = `${hello} ${world}`;
console.log(epicP2);


let lorem = "lorem------------------------------------------------------- \n" + "lorem ------------------------------------"
//es6 2
let lorem2 = `lorem----------------------------------- --------------------------`;

console.log(lorem);
console.log(lorem2);


let person = {
    "name" : "oscar",
    "age"  : 32,
    "country" : "mx"
}
console.log(person.name, person.age, person.country);
//es6  3
let {name, age, country} = person;
console.log(name, age, country);


let team1 = ["oscar", "lulian", "ricardo"];
let team2 = ["Jessi", "Camila", "Franca"];
//es6 4
let education = ["David", ...team1, ...team2];

console.log(education);

