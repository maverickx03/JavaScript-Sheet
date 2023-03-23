const fruits = ['banana', 'orange', 'mango', 'lemon'];
const arr = [];
let i,n = 0;
for( i = fruits.length-1 ; i>=0;i--){
    arr[n]=fruits[i];
    n++;
}
console.log(arr);