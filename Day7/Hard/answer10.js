function isEmpty(str){
    if(str.length == 0){
        return true;  //If empty
    }
    else{
        return false;  // if not empty
    }
}

const str = '';
console.log(isEmpty(str));
const x = "Hello";
console.log(isEmpty(x));