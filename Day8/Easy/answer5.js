function bark(){
    return 'woof woof';
}
const dog ={
    name : 'Duke',
    legs : 4,
    color : 'brown',
    age : 7,
    bark : bark()
}

dog.breed = 'German Shepherd'
dog.getDogInfo = function(){
    let statement = `${this.name} is a ${this.color} dog of ${this.breed} breed.\nIt has ${this.legs} legs.`
    return statement;
}
console.log(dog.getDogInfo());
