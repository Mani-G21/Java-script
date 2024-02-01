const http = new slhttp();

// http.get('https://jsonplaceholder.typicode.com/posts')
//     .then(data => console.log(data))
//     .catch(err => console.warn(err))

const post = {
    userId: 1212,
    title: 'Post-one',
    body: `Some body of post one`
};

// http.post('https://jsonplaceholder.typicode.com/posts',post)
//     .then(data => console.log(data))
//     .catch(err => console.warn(err))

// http.put('https://jsonplaceholder.typicode.com/posts/56',post)
//     .then(data => console.log(data))
//     .catch(err => console.warn(err))


// http.delete('https://jsonplaceholder.typicode.com/posts/56')
//     .then(data => console.log(data))
//     .catch(err => console.warn(err))
