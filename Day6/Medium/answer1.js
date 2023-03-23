    let l = prompt("Enter length of ID",'ID');
    var id = ""
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i=0; i<l; i++){
        id += char_list.charAt(Math.floor(Math.random()*char_list.length));
    }
    console.log(id);
