let sum_even=0,sum_odd=0,i;

for(i=0;i<=100;i++){
    if(i%2==0){
        sum_even=sum_even+i;
    }
    else{
        sum_odd=sum_odd+i;

    }

}

console.log("Even Sum From 0 to 100 is:",sum_even);
console.log("Odd Sum From 0 to 100 is:",sum_odd);
