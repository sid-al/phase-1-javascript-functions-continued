// code your solution here

// function razzle(){
//     console.log('you are been razzeled');

// }

// razzle();

// function razzle(lawyer = 'billy', target = "'em"){
//     console.log(`${lawyer} razzle-dazzles ${target}` );

// }

// razzle();
// razzle('Methusela', "T'challah");



// function saturdayFun( roller = 'roller-skate'){
//     return `This saturday, I want to ${roller}!`;
// }

// console.log(saturdayFun());
// console.log(saturdayFun('bathe my dog!'));

// // const fn =  function ( ) {
// //     console.log('yet more razzling')
// // }

// // fn();


// const mondayWork = function (office = 'go to the office'){
//     return `This Monday, I will ${office}`;
// }

// console.log(mondayWork())
// console.log(mondayWork('work from home'))


// // (function(baseNumber){
// //     return baseNumber + 3;
// // })(2); // this is Immediate Invoked Function expression;


// // function-level scope

// function outer(greeting, msg = "It's a fine day to learn") {
//     // 2
//     const innerFunction = function (name, lang = "Python") {
//       // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     };
//     return innerFunction("student", "JavaScript"); // 5
//   }
  
//   console.log(outer("Hello")); // 1




function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}


let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }