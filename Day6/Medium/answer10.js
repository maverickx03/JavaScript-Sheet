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
        if(i.length==5){
        arr.push(i);
        }
    }
    console.log(arr);