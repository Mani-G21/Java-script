// adding async in front of the function will make the function return promise object implicitly

async function getHello(){
    return 'Hello';
}

// async function myFunc(){
//     setTimeout(() => 'Hello', 1000)
// }
// myFunc()
//     .then(data => console.log(data))

async function myFunc(){
    const promiseObject = new Promise((resolve, reject) =>{
        setTimeout(()=> resolve('Hello'), 1000)
    });

    const res = await promiseObject;
    return res;
}

myFunc()
    .then(data => console.log(data))

const getPosts = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if(res.ok){
        const data = await res.json();
        return data;
    }

    throw new Error("Error occured");
}

getPosts()
    .then(data => console.log(data))
    .catch(err => console.log(err))