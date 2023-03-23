const sum = (...args) => {
    let sum = 0;
    for (const element of args){
        sum += element
    }
    return sum;
}

console.log(sum(1, 2, 3, 4)) 
console.log(sum(10, 20, 13, 40, 10)) 
console.log(sum(15, 20, 30, 25, 10, 33, 40)) 