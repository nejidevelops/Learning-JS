export const getBMICategory = (bmi) => {
  // return 'Underweight';
  if (bmi <= 18.5){
    return 'Underweight'
  }
  else if (bmi < 25.0){
    return 'Normal weight'
  }
  else if (bmi < 30.0){
    return 'Overweight'
  }
  else{
    return 'Obesity'
  }
}
