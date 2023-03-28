// variable dom
let weightDOM = document.querySelector("#weight");
let heightDOM = document.querySelector("#height");
let calculatebtnDOM = document.querySelector("#calculate-btn");
let bmiDOM = document.querySelector("#bmi");
let bmiadviceDOM = document.querySelector("#bmi-advice");
let weight, height, bmi, bmiadvice;

calculatebtnDOM.addEventListener("click", findbmi);
// let weight = prompt("Your Weight (KG)");
// let height = prompt("Your Height (m)");
// let bmi = weight / (height * height);
// let bmiadvice;
function findbmi() {
  event.preventDefault();
  weight = weightDOM.value;
  height = heightDOM.value;
  bmi = weight / height / height;

  // variable value

  // psuedocode

  if (bmi >= 25) {
    //true statement
    bmiadvice = "Overweight: You need to exercise";
  } else if (bmi >= 18 && bmi <= 24.9) {
    bmiadvice = "Ideal: Good job for taking care of your health";
  } else {
    bmiadvice = "Underweight: You need to eat more or consult a doctor";
  }

  // insert variable value into DOM innerText
  weightDOM.innerText = weight;
  heightDOM.innerText = height;
  bmiDOM.innerText = bmi.toFixed(1);
  bmiadviceDOM.innerText = bmiadvice;
}
