'use strict';

const bmi = window.prompt('27');
const p_element = document.querySelector('p');
console.log(`あなたのBMIは${bmi}：`);

if ( bmi >= 25){
    p_element.textContent += '肥満です';
}
 else if (bmi < 18.5){
    p_element.textContent += '低体重です';
}
  else{
    p_element.textContent += '適正体重です';
  }
