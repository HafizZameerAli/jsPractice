
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
// console.log(count)


// const nestedArray = [
//     "level1",
//     42,
//     true,
//     [
//         "level2",
//         false,
//         99,
//         [
//             "level3",
//             123,
//             true,
//             [
//                 "level4",
//                 "deep",
//                 false,
//                 777,
//                 [
//                     "level5",
//                     1001,
//                     true,
//                     "end"
//                 ]
//             ]
//         ]
//     ]
// ];
// console.log(
//     [[[1],[2]]]
// )

// arrays methods

// var num = [1,2,3,4,5]
// num.splice(1,2,)
// console.log(num)

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
for (var i = 0; i <= 10; i++)
    var table = i * 2
console.log(table * i);




var arr = [1, 2, 3, 4, 5];
for (var i = 0; i <= 5; i++)
    console.log(arr);
