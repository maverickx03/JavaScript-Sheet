function capitalizeArray(arr){
    const capital =[]
    for(let i=0; i<arr.length; i++){
    capital.push(arr[i].toUpperCase());
    }
    return capital;
}

const arr =['html','css','javascript','nodejs','reactjs'];
console.log(arr);
const capital = capitalizeArray(arr);
console.log(capital);