const countries = [
    'Algeria',
    'Argentina',
    'Australia',
    'Belgium',
    'Brazil',
    'Canada',
    'China',
    'Denmark',
    'Germany',
    'Iceland',
    'India',
    'Poland',
    'Russia',
    'Sri Lanka',
    'Turkey',
    'Zimbabwe'
]

for(let i = 0; i<countries.length; i++){
    if(countries[i] === 'Ethiopia'){
        console.log('ETHIOPIA');
        break;
    }
    else if(i === countries.length - 1){
        countries.push('Ethiopia');
    }
}