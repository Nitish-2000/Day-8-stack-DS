/*Stak datastucture implementation using array methode
=>creating a class and storing empty array
=>and top value as -1 and incrementng for every push
*/
// class Stcak{
//     constructor(){
//         this.arrvalue =[];
//         this.top = -1
//     }
//     push(data){
//         this.arrvalue.push(data);
//         this.top++;

//     }
//     pop(){
//         this.arrvalue.pop(this.top);
//         this.top--;
//     }
//     // peak(){             
//     //        console.log(this.arrvalue[this.top])
//     // }
// }

// let newarray = new Array();
// newarray.push(5);
// newarray.push(10);
// newarray.push(15);
// newarray.push(20);
// newarray.pop();
// //newarray.peak();

// console.log(newarray);

//----------------------------------------------
/* Recrusion is a function that calls itself*/

// function print(){
//     console.log("Talkies M N")
//     print() 
// }
// print();

//we can make million calls using using if but function calls will have limitations
//after certain execution will throw error like "RangeError: Maximum call stack size exceeded"


//fixing time of executions

// function print(n){
//     for(i=1;i<=n;i++){
//     console.log("Talkies M N")
//     print() 
// }
// }

// function print(n){
//     if(n==0)
//     return;
//     console.log("Talkies M N");
//     print(n-1);
//    // print() 
// }print(10);

//using recursion print N natural numbers:

// function natural(n){
//    if(n<1)
//    return;
// console.log(n);
// natural(n-1);
// }
// natural(6)

/*Output
6
5
4
3
2
1

-------------------------------
*/
// function natural(n){
//     if(n<1)
//     return;
//  //console.log(n);
//  natural(n-1);
//  console.log(n);
//  /*Before printing next function is called
//  so after all functions are orderly called then after the prining or next statements are executed

//  Making an function tree

//         n = 6 !< 1  //nect line is function call
//            n=5 !<1
//             n=4 !<1
//             so and so
//             n = 1 !<1
//              n = 0 = 0
//              retrun //this statement breakes only the current loging ie n = 0 and takes the control to 
//              above statement n = 1
//              then console.log(1) is executed 
//              then return takes control to n = 2 makes console.log(2)
//              then
//              they reach to top n = 6 and finds out of loop
// Output:
// 1
// 2
// 3
// 4
// 5
// 6

//  */
//  }
//  natural(6)
