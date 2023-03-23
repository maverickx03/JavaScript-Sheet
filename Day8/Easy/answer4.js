function bark(){
    return "woof woof";
}


const dog = {
    Name : 'Duke',
    Legs : 4,
    color : 'brown',
    age : 7,
    bark : bark()
};

console.log(dog.Name);
console.log(dog.Legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);