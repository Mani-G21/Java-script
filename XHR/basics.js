const posts = [
    {id: 1, title: 'Title One', body: 'Body of title one'},
    {id: 2, title: 'Title two', body: 'Body of title two'},
];

function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const mimicError = false;
            if(mimicError){
                reject({status: 401, statusText: 'Unauthorized'});
            }
            posts.push(post);
            resolve('hey');
        },2000);
    });
}

function getPosts(){
    setTimeout(function(){
        console.log(posts);
    },1000);
}

const post = {id: 3, title: 'Title Three', body: 'Body of title three'};

createPost(post)
    // .then(function(){
    //     getPosts();
    // })
    // .catch(function(err){
    //     console.warn(err);
    // })

    createPost(post)
        .then(getPosts)
        .catch(function(err){
            console.warn(err);
        })