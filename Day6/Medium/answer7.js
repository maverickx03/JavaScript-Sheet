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
        if(i.includes('land')){
            arr.push(i);
        }
    else{
        console.log('All these countries are without land');
    }    

    }
    console.log(arr);