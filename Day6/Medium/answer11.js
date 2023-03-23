const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

    len =0;
    for( const i of webTechs){
        if(i.length>=len){
            len=i.length;
        }

    }
    for( const i of webTechs){
        if(len==i.length){
            console.log(i);
        }
    }
    