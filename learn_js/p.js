// let a=1
// let b=2
// console.log(a+b )
// if (7==7
// ){
//     console.log("condition is true")
// }
// or u can do
// console.log(8==9)
// console.log (null!=1)
// console.log("6"===6)//false === it check also type
// console.log(9>=8)//true is greater 
// console.log(77<=9)//false bcz 77 is greater 
// console.log(9>=9)//true 9 is equal  to 9
// console.log( 6===6)
// ******************stack or heap***********

let insta1= {                         //stack is primitive mtlb hame copy milta data ka 
                                       // heap is non primitive mtlb karenge
    id:"@karan89",                     //   wo original data  me bhi hoga 
  numb:7448479

}
let insta2=insta1
insta2.id="@raju"
console.log(insta1.id,insta2.numb);



let user1={
   snack:"samosa",
   sweet:"rasgola",
   drink:"pepsi"

}
let user2=user1
  user2.snack="Papad"
console.log(user1.snack,user2.snack)


