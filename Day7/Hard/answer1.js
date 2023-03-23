function userIdGeneratedByUser() {
    len= prompt("Number of Characters of Id to be generated",'');
    n= prompt("Number of Id required ","");
    const char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
   
    for(i=0;i<n;i++){
        let id = '';
        for (let i = 0; i < len; ++i) {
            id += char.charAt(Math.floor(Math.random() * char.length));
        }
        console.log(id);
    }
    

}

userIdGeneratedByUser();