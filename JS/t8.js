console.log('Events IN JS ')


// selectors in js 

console.log(document)

let ele = document.getElementById('first')

ele = document.getElementsByTagName('h1')

ele = document.getElementsByClassName('cls')



// ele.innerText = 'Updating via JS'
console.log(ele)

// mouse events: 
function myclick (){
    console.log('you have clicked the button and myclick func runs')
}

function dblclick(){
    console.log('you have clicked the dbl func runs')
}



function mouseover(){
  console.log('mouseover called')
}

function mouseleave(){
    console.log('mouseleave called')
}


onke
function onkeypressfun(e){
    // console.log(e.target.value)
    console.log('events fired',e.target.value)
}

function myFunction() {
    console.log("You pressed a key inside the input field");
  }


  //windows events 
  function loadfun(){
    console.log('page loaded')
  }