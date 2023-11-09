console.log('Functions in JS')

/** 
 2 terms : 
 1 function Defination 
 2 function Call 

 Syntax: 
   

 function functionName() {
    //code that goes inside the function
 }


 **/



 function GreetingFunction(){
    console.log('####')
    console.log('i am running a greeting function now update')
    console.log('****')
    
 }


GreetingFunction()




//  type of different functions 
/**
 *    Normal function  : 
 *    Parameters function :
 * 
 *  Return function
 * or Non Returning function
 */


// Parametriezed function 

function GreetingR(){
console.log('GREEETING','ram')
}
function GreetingS(){
    console.log('GREEETING','Shyam')
    }


 
GreetingR()
GreetingS()

// function Greeting(name){
//     console.log('Your gretting ',name)

// }
function Greeting(name='Guest'){
    console.log('Your gretting ',name)

}
Greeting('RAJU')
Greeting('Roshan')
Greeting()
Greeting('Rohan')


// Modern JS  Arrow function or lambda function

const MYFUN = ()=>{

    console.log('you  are in my fun')
}
const MYFUN1 = (name)=>{
    console.log(name)

}



const myfuns = ()=>console.log('myfuns')




MYFUN()
MYFUN1(1)
myfuns()


// aDDtion function 

function add(a,b){
    // console.log('your add function',a+b)
    return a+b

}

const addfun = (x,y)=> x+y;

const adding = x => x+5;
value = addfun(2,4)
console.log(value)

console.log(adding(10))



// task : 

// similary : 
// cals: add sub mul division: 

// cm to mtrs 
// degee to farhen 


const cmtom = x => console.log(x/100)


cmtom(60)

