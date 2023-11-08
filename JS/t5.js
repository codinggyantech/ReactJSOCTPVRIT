console.log('IF ELSE in js')

/**
 * syntax of if simple : 
 * 
 *   if(condition){
 *    execute the code inside
 * }
 * else {
 *   execute the code inside
 * }
 * 
 */
let rain = false;

if(rain == true){
    console.log('i will not go to schoool',rain)
}
else{
    console.log('its not raining go to school ',rain)
}


// Grading system : 
let marks = 91;

if(marks>90){
    console.log('pass A+ ')
}
else if(marks>80){
    console.log('good keep going B')
}

else{
    console.log('fail F')
}

//  1. Exact Grading system :  A+  F : 
// -->  i want user to give you the marks  HINT : prompt



// 2.  Voting system :  | Driving System :  | input should be intaken from the user.
// age > 18 | eligible to vote | eligitble to drive 



//  Nested if else : 

/** 
if(condintion ){
    if(condintion){
        if(condintion){

        }
    }
}

 it is called if else ladder
if(condition){

}
else if(condition){

}
else if(condition){

}
else {

}
*/



// ternary operators 

rain = true;
if(rain){
//some code
}
else{
//some code 
}

rain ? console.log('go to school') : console.log('dont go to schoool')

50>6 ? console.log('true stmt') : console.log('false stmt')





console.log('************* OBJECT*******************')
console.log("***************METHOD*****************")

a = [23,35,55,35]

console.log(a.length)
a.push(9999)
a.push('ram')
a.pop()
a.pop()

a.shift()
a.shift()
a.unshift('start')
console.log(a.length)

console.log(a)
console.log(a.toString())

b = [[12,34],['ram','shyam']]
console.log(b.flat())