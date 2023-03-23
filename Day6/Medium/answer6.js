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
    
    for(const i of countries){
        const arr=[];
        arr.push(i);
        arr.push((i.slice(0,3)).toUpperCase());
        arr.push(i.length);
        console.log(arr);

    }