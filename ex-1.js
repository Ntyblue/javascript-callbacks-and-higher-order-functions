// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  for (let i = 0; i < employeeSalaries.length; i++) {
    employeeSalaries[i] += 5000;
  }
  return employeeSalaries;
}
// console.log(addSalary5000(employeeSalaries));

function forEach(array, operation) {
  // Start coding here
  return operation(array);
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
ตอบ addSalary5000 เป็นcallback functionเพราะถูกใช้เป็นargumentของforEach function

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
ตอบ forEach fucntionเป็น higher order function เพราะรับfunctionอื่น(addSalary5000)มาเป็นพารามิเตอร์และถูกexcuteในตัวbodyของforEach
====================================
*/
