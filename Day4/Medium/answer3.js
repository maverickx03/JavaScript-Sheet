var day = prompt('Enter a day','Day');

day = day.toLowerCase();

switch (day) {

    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(day,'is a working day');
        break;
    case 'saturday':
    case 'sunday':
        console.log(day,'is a weekend');
        break;
    default:
        console.log(day,'is a not a day of a week');                
}