// //1. Numbers divisible by 7 between 70 and 200
// for (let i = 70; i <= 200; i++) {
//     if (i % 7 === 0) {
//       console.log(i);
//     }
//   }

// //2. Check if a number is Prime
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   console.log(isPrime(10)); // Check


// // 3. Check if a number is a Palindrome
// function isPalindrome(num) {
//     let str = num.toString();
//     let len = str.length;
    
//     for (let i = 0; i < len / 2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isPalindrome(121)); // Example
  

//   //4. Check if a number is an Armstrong number
//   function isArmstrong(num) {
//     let sum = 0;
//     let temp = num;
//     let digitsCount = 0;
    
//     //digits nimber
//     while (temp > 0) {
//       temp = Math.floor(temp / 10);
//       digitsCount++;
//     }
  
//     temp = num;
    
//     // sum
//     while (temp > 0) {
//       let digit = temp % 10;
//       sum += Math.pow(digit, digitsCount);
//       temp = Math.floor(temp / 10);
//     }
    
//     return sum === num;
//   }
  
//   console.log(isArmstrong(153)); // Example


//   //5.   0, 4, 18, 48, 100
// for (let i = 1; i <= 5; i++) {
//   console.log((i ** 3) - (i ** 2));
// }

// //6.Leap Year
// function isLeapYear(year) {
//     return (year % 4 === 0)
//   }
  
//   console.log(isLeapYear(2024)); // Example

// //7.Max-Min in 50-300

// let minNum = 50;
// let maxNum = 50;

// for (let i = 50; i <= 300; i++) {
//   if (i > maxNum) maxNum = i;
//   if (i < minNum) minNum = i;
// }

// console.log('Max:', maxNum);
// console.log('Min:', minNum);

  
// //8.  Palindrone_STRING
// function isPalindrome(str) {
//         str = str.toLowerCase();
//         let len = str.length;
        
//         for (let i = 0; i < len / 2; i++) {
//           if (str[i] !== str[len - 1 - i]) {
//             return false;
//           }
//         }
//         return true;
//       }
      
//       console.log(isPalindrome("Madam")); // Example
  
// //9. Calculate the sum of two numbers without using a third variable
// let a = 5, b = 10;
// console.log('Sum:', a + b);

// //10.create a Temperature Converter .

// function cToF(celsius) {
//     return (celsius * 9/5) + 32;
// }
// function fToC(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }
// console.log(fToC(50));
// console.log(cToF(100));

// // 11.create a Currency Converter [INR to Doller].
// function inrToDollar(inr, conversionRate = 82) {
//     return inr / conversionRate;
//   }
  
//   console.log(inrToDollar(1000)); 


// //12.   area of rect & circle
// function areaOfRectangle(length, width) {
//     return length * width;
//   }
  
//   function areaOfCircle(radius) {
//     return Math.PI * radius * radius;
//   }
  
//   console.log(areaOfRectangle(5, 10)); // Example
//   console.log(areaOfCircle(7)); // Example
  
// //13.

// // Arrow Fn
// const add = (a, b) => a + b;

// // Normal Fn
// function addNormal(a, b) {
//   return a + b;
// }



// //14 sum(2,3) sum(2)(3)
// const sum= (a,b) => a+b
// console.log(sum(4,5)); //Example






// 15





// //18
// function strLength(str) {
//     let length = 0;
//     while (str[length]) {
//       length++;
//     }
//     return length;
//   }
  
//   console.log(strLength('Suman')); 



  
// const sum=a=b=()=>a+b;
// console.log(sum(2)(3))

var empDataSet = [
    { 'empno': 1001, 'ename': 'john', 'doj': '12-12-2012', 'sal': 12000 },
    { 'empno': 1002, 'ename': 'smith', 'doj': '23-12-2002', 'sal': 11000 },
    { 'empno': 1003, 'ename': 'michael', 'doj': '21-08-22', 'sal': 9000 },
    { 'empno': 1004, 'ename': 'Diana', 'doj': '01-01-23', 'sal': 22000 },
    { 'empno': 1005, 'ename': 'Anjan', 'doj': '12-08-21', 'sal': 14000 }
];
const salaryInRange = empDataSet.filter(({ sal }) => sal >= 12000 && sal <= 15000);
console.log('Employees with salary between 12000 and 15000:', salaryInRange);


