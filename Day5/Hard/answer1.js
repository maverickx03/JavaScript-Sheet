const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


ages.sort();
console.log(ages);
console.log('Min Age :',ages[0]);
console.log('Max Age :',ages[ages.length-1]);


let median;
if(ages.length % 2 === 0){
    median = (ages[ages.length/2] + ages[ages.length/2 - 1])/2;
}
else{
    median = ages[Math.floor(ages.length/2)];
}
console.log('Median :',median);


let sum = 0;
for(let i=0; i<ages.length; i++){
    sum += ages[i];
}
const average = sum/ages.length;
console.log('Average :',average);


const range = ages[ages.length-1] - ages[0];
console.log('Range :',range);


console.log(Math.abs(ages[0] - average));
console.log(Math.abs(ages[ages.length - 1] - average));