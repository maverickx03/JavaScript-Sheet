const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]
    const arr=[];
    for(const i of countries){
        if(i.includes('ia',(i.length-2))){
            arr.push(i);
        }
    else{
        console.log('These are countries ends without ia');
    }    

    }
    console.log(arr);