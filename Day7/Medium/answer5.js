function swapValues(x,y){
    let temp = x;
    x=y;
    y=temp;
    console.log('After Swapping a:',x,'b:',y);
}

let a=4;
let b=5;
console.log('Before Swapping a:',a,'b:',b);
swapValues(a,b);