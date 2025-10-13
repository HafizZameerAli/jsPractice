
// var cities = ["Hyderabad", "Karachi","Islamabad","Lahore"]
// for(var i = 0; i <=cities.length; i++){
//     console.log(cities[i])
// }

// var cities = ["Hyderabad", "Karachi","Islamabad","Lahore"]
// for(var i = cities.length-1; i >= 0; i--){
//     console.log(cities[i])
// }

// var num = [3,5,7,9];
// var sum = 3+5+7+9
// console.log(sum)

// var rNum = [2,8,16,32]
// var everage = rNum* 2
// console.log(everage)

// even & odd numbers

// var num = +prompt("write any number")
// if(num % 3){
//     alert("this is odd number")
// }
// else("this is even number")
// console.log(num)


// var num = +prompt("write any number")
// if(num % 2){
//     alert("this is odd number")
// }
// else("this is even number")
// console.log(num)

// var num = +prompt("write any number")
// if(num % 3){
//     alert("this is odd number")
// }
// else(alert("this is even number"))
// console.log(num)

//  making each number double

// var num = +prompt("write any number, it will be double")
// var num2 = num*2
// console.log(num2)

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var i = 0; i < num.lenth; i++)
//     console.log(num[i])


// largest & smallest number

// var numbers = [10, 40, 60, 50, 20, 100, 34];

// var largest = numbers[0]; 

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log(largest);

// var numbers = [10, 40, 60, 50, 20, 100, 34];
// var smallest = numbers[0];
// for (var i = 1; i > numbers.length; i++) {
//     if(numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }
// console.log(smallest);


// var numbers = [10, 40, 60, 50, 20, 100, 34];
// var smallest = numbers[0];
// var largest = numbers[0];
// for (var i = 1; i > numbers.length; i++) {
//     if(numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
//     if(numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// var result = [smallest, largest];
// console.log("smallest and largest" + result);

// not working below1 
// var num = +prompt("write any number")
// var count = 0;
// var numbers = [2,7,56,7,5,7,7,4,]
// for(var i =0; i <num.length; i++){
//     if(num == num[i]){
//         count = count =1
//     }
// }

// arrays methods

// var cities = ["Hyd","Karachi","Islamabad","Lahore","Multan"]
// cities.splice(4,1,"hyd")
// console.log(cities)

// var arr = [10,20,30,40,50];
// var arr2 = arr.slice(2, 5, 2)
// console.log(arr2)

// var arr = ["Muhammad","Ali","Ahmad","Raza"]
// arr.unshift("Imran",2);
// console.log(arr)

// var arr = ["UK","USA",3,"Pakistan","Dubai"];
// arr.shift(4)
// console.log(arr)


// for loops 

// for(var i =1; i <= 10; i++){
//     console.log(i)
// }

// for(var i =10; i >= 1; i--){
//     console.log(i)
// }

// for(var i=0; i<= 20; i++) {
//     if(i % 2===0)
//     console.log(i);
// }

// for(var i=0; i<= 20; i++) {
//     if(i % 2===1)
//     console.log(i);
// }
// for (var i = 0; i <= 10; i++)
//     var table = i * 2
// console.log(table * i);




// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i <= 5; i++)
//     console.log(arr);


// for(var i =1; i<=3; i++){
//     for(var j =1; j<=i; j++){
//         for(var k =0; k<=3; k++)

    
//         console.log(i+"*"+j+"="+i*j)
//      }   
// }


// for(var i =1; i<=3; i++){
//     var star = ""
//     for(var j =1; j<=3; j++){
//          star += "* "
//     }
//     console.log(star)
// }


// for(var i =1; i<=4; i++){
//     var star = ""
//     for(var j =1; j<=4; j++){
//          star += j
//     }
//     console.log(star)
// }  
    

// for(var i =1; i<=4; i++){
//     var star = ""
//     for(var j =1; j<=i; j++){
//          star += "* "
//     }
//     console.log(star)
// }
    
// for(var i =1; i<=5; i++){
//     var star = ""
//     for(var j =1; j<=5; j++){
//          star += j
//     }
//     console.log(star)    

// }


// for(var i =1; i<=4; i++){
//     var star = ""
//     for(var j =1; j<=i; j++){
//          star += j
//     }
//     console.log(star)    

// }

// for(var i =4; i>=1; i--){
//     var star = ""
//     for(var j =1; j<=i; j++){
//          star += "* "
//     }
//     console.log(star)
// }

// for(var i =1; i<=4; i++){
//     var row = ""
//     for(var j =1; j<=8; j++){
//         if((i + j ) % 2 === 0) {
//             row += "#";
//         } else{
//             row += ".";
//         }
//     }
//     console.log(row)    

// }
// var count = 1;
// for(var i =1; i<=3; i++){
//     var row = ""
//     for(var j =1; j<=3; j++){
//         row += count + " ";
//         count++
// }
//     console.log(row)
// }


// for(var i =5; i>=1; i--){
//     var row = ""
//     for(var j =1; j<=3; j++){
//         row += (i + (j - 1) * 3) + " ";
// }
//     console.log(row)
// }

// var twoDarray = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
//  var totalSum = 0; 
//  for(var i =0; i< twoDarray.length; i++){
//     for(var j =0; j<twoDarray[i].length; j++){
//         totalSum+= twoDarray[i][j]
//     }
//  }
//  console.log(totalSum);

//  var totalN = (10,20,30,40)
//  var average =0; 
//  for(var i =0; i< totalN.length; i++){
//     average += totalN [i]
//  }
//  var Average = sum / totalN.length
//  return Average
//  console.log(Average);


//  If & Else

// var age = 25;
// var hasLicense = true;
// var hasCar = false;

// if (age < 18) {
//   console.log("You are too young to drive.");
// } else if (age >= 18 && hasLicense && hasCar) {
//   console.log("You can drive your car!");
// } else if (age >= 18 && hasLicense && !hasCar) {
//   console.log("You can drive, but you don’t own a car.");
// } else {
//   console.log("You cannot drive.");
// }

// calculator

var input = prompt("input your birthdate")
var eTime = new Date().getTime() - new Date(input).getTime();
var calculate = Math.floor(eTime / (1000 * 60 * 60 * 24 * 30 * 12 ))
alert(calculate);

 
 
 


