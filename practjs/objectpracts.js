const student1 = {
    name: "gullu don",
    school: "ds college",
    rollno: 420,
    mobnumber: 9326754600,
    father: "munnabhai",
    mother: "chinki",
    email: "gulludon1@gmail.com",
    Class: "X",
    freinds: ["kalia", "bhola", "sanju", "dawood", "tamcha"],
    Income: function () {
        return 80000;
    },
    gang: function () {
        console.log(`GangName-Aligarh Don\n
                   Gangmessage-JHUK NE KA NHI\n
                             Member:${this.freinds}`)
    }
}
student1.greeting = function () {
    console.log(`Hello ${this.name} Tommorow  is PTM `)
}
// console.log(student1.greeting());

// output 
//Hello gullu don Tommorow is PTM 
//undefined
/* The undefined output happens because the greeting method doesn’t explicitly return a value. 
In JavaScript, if a function doesn’t return anything, it implicitly returns undefined.*/

student1.greeting();//To avoid seeing undefined, just call the method without console.log:
// output---Hello gullu don Tommorow is PTM 
console.log(student1.freinds[4]);//tamcha
console.log(student1.Income());//80000
student1.gang();