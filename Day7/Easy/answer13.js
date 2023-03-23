function BMI(weight, height){
    let BMI = weight / (height * height);
    return BMI;
}

let bmi = BMI(58, 1.64);

if(bmi < 18.5){
    console.log('Under Weight');
}
else if(bmi <= 24.9){
    console.log('Normal Weight');
}
else if(bmi <= 29.9){
    console.log('Over Weight');   
}
else if(bmi >= 30){
    console.log('Obese');
}
else{
    console.log('Invalid Input');
}
