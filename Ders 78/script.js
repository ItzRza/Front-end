// book ={
//     Title:"Header",
//     Pages:0,
//     addPages: function(n){
//         return this.Pages += n;
//     }
// }

// console.log(book.addPages(5))

// account ={
//     balance:0,
//     deposit: function(x){
//         return balance += x;
//     },
//     withdraw: function(x){
//         return balance -= x;
//     }
// }

// console.log(account.deposit(10))
// console.log(account.withdraw(10))

// student ={
//     name:"Rza",
//     grades:0,
//     timeschanged:0,

//     addGrade: function(x){
//         this.timeschanged += 1;
//         return this.grades += x;
//     },

//     average: function(){
//         return grades/timeschanged;
//     }
// }

// console.log(student.addGrade(5))
// console.log(student.addGrade(2))
// console.log(student.addGrade(3))
// console.log(student.average())

// calendar ={
//     events: 0,
//     timeschanged: 0,

//     addEvent: function(ad){
//         this.addEvent += ad;
//         this.timeschanged +=1;
//     },
    
//     countEvents: function(ad){
//         return this.timeschanged;
//     }
// }