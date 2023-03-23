const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']; // answer_6

console.log(itCompanies); // answer_7

console.log(itCompanies.length); // answer_8

console.log(itCompanies[0],' ',itCompanies[parseInt(itCompanies.length/2)],' ',itCompanies[itCompanies.length - 1]); // answer_9

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);  // answer_10

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());  //answer_11

console.log(itCompanies.join(', '),'are Big IT companies');  // answer_12

let com = prompt('Enter a company','Com');
if(itCompanies.includes(com)){
    console.log(com);
}
else{
    console.log("Company not found");
}                                                    // answer_13

for(let i=0; i<itCompanies.length; i++){
    let count = 0;
    for(let j = 0; j<itCompanies[i].length; j++){
        if(itCompanies[i][j] === 'o'){
            count++;
        }
    }
    if(count>1){
        console.log(itCompanies[i]);
    }
}                                                   // answer_14

console.log(itCompanies.sort());                   //answer_15

console.log(itCompanies.reverse());                //answer_16

console.log(itCompanies.slice(0,3));               //answer_17

console.log(itCompanies.slice(itCompanies.length-3,));        //answer_18

mid = itCompanies.length/2;
mid = parseInt(mid);
console.log(itCompanies.slice(mid,mid+1));              //answer_19

console.log(itCompanies.splice(0,1));                   //answer_20

console.log(itCompanies.splice(mid-1,1,''));            //answer_21

console.log(itCompanies.pop());                         //answer_22

console.log(itCompanies.splice());                      //answer_23
