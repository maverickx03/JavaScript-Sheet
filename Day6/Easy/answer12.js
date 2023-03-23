let sum_even=0,sum_odd=0,i;

for(i=0;i<=100;i++){
    if(i%2==0){
        sum_even=sum_even+i;
    }
    else{
        sum_odd=sum_odd+i;

    }

}

let sum = [sum_even,sum_odd];
console.log(sum);