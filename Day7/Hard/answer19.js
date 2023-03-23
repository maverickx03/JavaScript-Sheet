function sevenRandomNumbers(){
    const arr = [];
    for(let i = 0;i<7;i++){
    let n = Math.floor(Math.random()*9)+1;
    arr.push(n);
    }
    console.log(arr);
}

sevenRandomNumbers();

