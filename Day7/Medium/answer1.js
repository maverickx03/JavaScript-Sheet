function solveLinEquation(a, b, c){
    for(let i=0; i*a<=c; i++){
        if((c-(i*a))%b==0){
        console.log("x =",i,", y =",(c-(i*a))/b);
        return;
        }
    }
    console.log('No Solution');
}

let a=2,b=3,c=7;
solveLinEquation(a,b,c);
