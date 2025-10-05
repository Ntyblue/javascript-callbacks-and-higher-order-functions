//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  // Start coding here
  return score > 70 ? true : false;
}

function atLeastFive(array, operation) {
  // Start coding here
  let isPass = 0;
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
    // console.log(array[i]);
    if (operation(array[i]) === true) {
      isPass++;
    } else {
      isPass = isPass;
    }
  }
  // console.log(isPass);
  return isPass >= 5 ? true : false;
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
ตอบ checkGradeOver70 เป็นcallback function เพราะถูกนำไปใช้เป็นagumentของอีกfunction(นั่นคือ atLeastFive function)

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
ตอบ atLeastFive เป็น higher order function เพราะรับfuctionอื่น(checkGradeOver70 function)มาเป็นพารามิเตอร์และfunctionนั้นถูกexcuteในตัวbodyของatLeastFive function
====================================
*/
