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
    len =0;
    for( const i of countries){
        if(i.length>=len){
            len=i.length;
        }

    }
    for( const i of countries){
        if(len==i.length){
            console.log(i);
        }
    }
    