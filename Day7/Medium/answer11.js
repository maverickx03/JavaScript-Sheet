function sumOfOdds(start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        if(i%2!=0)
        sum+=i;
    }
    console.log('Sum of all odd numbers in the range',start,'and',end,':',sum);
}

sumOfOdds(10,30);