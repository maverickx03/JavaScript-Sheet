var month = prompt('Enter a month','Month');
month = month.toLowerCase();

switch (month){

    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(month,'has 31 days');
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(month,'has 30 days');
        break;
    case 'february':
        console.log(month,'has 29 days');
        break;
    default:
        console.log(month,'is not a Month in a year');
        break;                                                
}