



// let a=10;
// let b=20;
// a=a+b
// b=a-b
// a=a-b
// console.log("a="+a);
// console.log("b="+b);
// a*=2;
// b*=2;
// console.log("a="+a);
// console.log("b="+b);

// let salary = 75000;
// switch (salary) {
//     case 10000:
//         console.log("you have very less salary")
//         break;

//     case 20000<:
//         console.log("you have less salary")
//         break;

//     case 50000:
//         console.log("you have good salary")
//         break;

//     case 70000:
//         console.log("you have very good salary")
//         break;

//     default:
//         console.log("can't get salary")
//         break;
// }

// let percentage = 99;
// if (percentage >= 40 && percentage <= 50) {
//     console.log("buy a pen");
// } else if (percentage > 50 && percentage <= 60) {
//     console.log("buy a book");
// } else if (percentage > 60 && percentage <= 70) {
//     console.log("buy a bag");
// } else if (percentage > 70 && percentage <= 80) {
//     console.log("buy a watch");
// } else if (percentage > 80 && percentage <= 90) {
//     console.log("buy a mobile");
// } else if (percentage > 90 && percentage <= 100) {
//     console.log("buy a bike");
// } else {
//     console.log("you are failed");
// }

// let num=14;
// if(num%2==0){
//     console.log("the given number is even");
//     num *=2;
//     console.log("double of the number is:",num)
// }else if (num%2!=0){
//     console.log("the given number is odd");
//     num +=2;
//     console.log("Adding 2 to the number results in:",num);
// }

// let num1 = prompt("Enter the 1st number");
// let operation = prompt("enter the operation")
// let num2 = prompt("enter the 2nd number");

// if (operation =="+") {
//     console.log(parseInt(num1) + parseInt(num2));
// } else if (operation == "-") {
//     console.log(parseInt(num1) - parseInt(num2));
// } else if (operation == "*") {
//     console.log(parseInt(num1) * parseInt(num2));
// } else if (operation == "/") {
//     console.log(parseInt(num1) / parseInt(num2));
// }

// for (let i = 0; i <6; i++) {
//     console.log(i)
// }

// let i=0;
// while(i<5){
// console.log(i);
// i++;
// }



// for(let i=0; i<5; i++){
//     console.log(i);
// }



// let sum=0;
// for (let i=1; i<=10; i++){
//     console.log(i);
//     sum+=i

// }
// console.log("1+2+3+...+10 ="+sum);

// let number=1;
// for(let i=5; i>=1; i--){
//     number=number*i;

// }console.log("given number is 5");
// console.log("5*4*3*2*1="+number);

// let names=["ganapathi", "suresh", "venu"];

//  console.log(names);

// let fruits=["banana","apple","orange"];
//     fruits.push("grapes");
//      console.log(fruits);

//  let fruits=["banana","apple","orange"];
//      fruits.pop();
//     console.log(fruits);

// let fruits=["banana","apple","orange"];
//     fruits.shift();
//      console.log(fruits);

// let fruits=["banana","apple","orange"];
//     fruits.unshift("grapes");
//      console.log(fruits);

// let fruits=["apple","banana","grapes","orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// let fruits=["apple","banana","grapes","orange"];
// for(let item of fruits){
//     console.log(item);
// }

// let num=5;
// result=0
// for(let i=1; i<=10; i++){
//     result=i*num;
//     console.log(num +"*"+i+"="+result)

//    } 

// objects

// let student={
//     name: 'ganapathi',
//     class: 10,
//     rollno: 19,
//     marks:[85,88,92,94]
// }
// // console.log(student);
// console.log(student.marks);


//  let car={
//     brand: "TATA",
//     name: "harrier",
//     engine: 'petrol',
//     price: 2500000,
//     milage: '20 kmpl'
//  }
//  console.log(car);
//  console.log("price:" + car.price)


// for of loop:

// let car=
//    [{ brand: "TATA",
//     name: "harrier",
//     engine: 'petrol',
//     price: 2500000,
//     milage: '20 kmpl'}]

// for(let item of car){
//     console.log(car);
// }


// for in loop:

// let car=
//    { brand: "TATA",
//     name: "harrier",
//     engine: 'petrol',
//     price: 2500000,
//     milage: '20 kmpl'}

// for(let item in car){
//     console.log(car[item]);
// }



// let list1 = [1, 4, 6,7,8, 9, 10];
// let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// for(let i=0; i<=list1.length; i++){
//     for(let j=0; j<=list2.length; j++){
//         if(list1[i]==list2[j]){
//             console.log(list1[i])
//         }
//     }
// }

// let num = 15;
// for(i=2; i<=num; i++){
//     console.log(i)

//     }if(num=num%i==0){ 
//         console.log("is not prime");
//         }else if(num=num%num==1){
//         console.log("is not prime");
//      }else{
//         console.log("it is prime")
//      }



// let num = 12;
// let numofdivisors = 0;
// if(num<2){
//     console.log("false")
// }else if(num>=2){
//     for(let i=1; i<=num; i++){
//         if(num%i == 0){
//             numofdivisors++
//         }

//        } if(numofdivisors==2){
//         console.log(num+"is a prime number")   
// }else{
//     console.log(num+" is not a prime number")
// }
//  }


// let num = [1,2,3,4,5,6];
// let reverse = []
// for(let i=num.length; i>=1; i--){
//     reverse==reverse.push(i)  
// }
// console.log(reverse)


// let a=10
// if(a%2==0){
//     console.log(" it is even")
// }else{
//     console.log("it is odd")
// }


// let num=2
// result=0
// for(i=1; i<=5; i++){
//     result=i*num
//     console.log(num+'*'+i+'='+result)
// }


// let array = [999,1,19,64,99,555,143,225]
// let max = [0]
// for(let i=0; i<array.length; i++){
//     if( array[i] > max ){
//         max = array[i]
//     }
// }console.log(array);
// console.log(max+" is the largest number ")


// const users = [
//     { id: 1, name: "A", age: 25 },
//     { id: 2, name: "B", age: 30 },
//     { id: 3, name: "C", age: 22 }
//   ];
//   let num1 = prompt("enter ID")
//   let ID = parseInt(num1);
//   let num2 = prompt("enter updated age")
//   let AGE = parseInt(num2);

// for(let i=0; i<users.length; i++){

//     if(users[i].id==ID){
//         users[i].age=AGE
//         console.log(users)
//     }else{console.log("user does not exist")}
//     }


// function getNextNum(a,b){
//     let c = a+b;
//     return (c)
// }
// let numstr = prompt("enter the number of terms")
// numofterms = parseInt(numstr);
// let num1 = 0;
// let num2 = 1;
// console.log(num1)
// console.log(num2)

// for(let i=1; i<=numofterms; i++){
//     result = getNextNum(num1,num2)
//     num1 = num2
//     num2 = result
//     console.log(result)
// }



// let userStr = prompt("enter the word")

//        function ispalindrome(userStr){
//         let start = 0;
//         let end = userStr.length-1;
//         while(start<end){
//             if(userStr[start]===userStr[end]){
//                 console.log(`given string is ${true}`)
//             }
//             else{
//                 console.log(`given string is ${false}`);
//             }
//             start++;
//             end--;

//         }
//        }
//        console.log(ispalindrome(userStr));

// let x=""
// let array="GANA"
// for(let i=0; i<=array.length; i++){

//     x=""
//     for(let j=0; j<array.length-i; j++){
//        x+=array[j]
//     }
//     console.log(x)
// }


// const areasquare = (side) =>{
//     let area = side * side;
//     return area;
// }
// const result = areasquare(40);
// console.log(result);


// var areaRectangle = (length,width) =>{
//     let area = length*width;
//     return area;
// }
// let result = areaRectangle(8,4);
// console.log(result)


// let perimetersquare = (side) =>{
//     let perimeter = 4 * side;
//     return perimeter;
// }
// let result = perimetersquare(12);
// console.log(result)


// var perimeterCircumference = (radius) =>{
//     let perimeter = 2* 22/7 * radius;
//     return perimeter;
// }
// let result = perimeterCircumference(10);
// console.log(result);


// swap the first and last numbers in the given array and print the array.

// let array = [10,1,12,9,3,2,15,17,8];

// let temp = array[0];
// array[0] = array[array.length-1];
// array[array.length-1] = temp; 
// console.log(array);

// let areaTriangle = (base,height) =>{
//     let area =1/2 * base * height;
//     return area;
// }
// let result = areaTriangle(5,9);
// console.log(result)


// PROFITS AND LOSSES

// const sellingPriceWithLoss = (sellingprice, profitPercent, lossPercent) => {

//     const percentageOfProfit = (profitPercent / 100) + 1;
//     const costPrice = sellingprice / percentageOfProfit;
//     const amountOf25percentage = sellingprice - costPrice;
//     const lossOf25Percentage = costPrice - amountOf25percentage;

//     return lossOf25Percentage;
// }
// const result = sellingPriceWithLoss(800, 25, 25)
// console.log(`selling price of article with loss of 25% is RS.${result}`)


// let name = "hello"
 
// function fun(a){
//     console.log("world")
//     return "hello"
// }
// name =fun(1)


