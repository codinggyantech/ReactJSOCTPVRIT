console.log('Start')

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

let overallFunction = async () => {
    let response = []
    let arrayData = {
        data: [1,2,3,4,5]
    }
    
for (let key in arrayData.data){
    let data = await fetchData('https://jsonplaceholder.typicode.com/todos/'+key)
    response.push(data)

}


return response;
}


let finalfunc = async () => {
    let res  = await overallFunction()
    console.log(res)
}

finalfunc()

console.log('end');