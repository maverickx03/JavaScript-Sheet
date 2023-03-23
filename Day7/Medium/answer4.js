function showDateTime(){
    const now = new Date()
    const year = now.getFullYear()
    const month = ('0'+(now.getMonth()+1)).slice(-2) ;
    const date = ('0'+now.getDate()).slice(-2);
    const hours = ('0'+now.getHours()).slice(-2);
    const minutes = ('0'+now.getMinutes()).slice(-2); 
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
}

showDateTime();
