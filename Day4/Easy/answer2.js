var myage = 20;
var yourage =  prompt('Enter your age','Your Age');

if(myage>yourage){
    console.log('You are ',myage-yourage,' years younger than me');
}
if(myage==yourage){
    console.log('You share a same age with me');
}
else{
    console.log('You are ',yourage-myage,'older than me');
}