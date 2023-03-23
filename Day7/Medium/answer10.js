function sumOfNumbers(start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+=i;
    }
    console.log('Sum of all numbers in the range',start,'and',end,':',sum);
}

sumOfNumbers(50,60);