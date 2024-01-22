const http = new slhttp();

const URL = "https://jsonplaceholder.typicode.com/posts/";
// http.get(URL, function(data,err){
//     if(data){
//         console.log(data);
//     }
//     else{
//         console.warn(err);
//     }
// });

const post = {                // while using post in this file remove 87 from url
    userId: 206,
    title: "My diploma went very well",
    body: "Hello, this is random body text"
};
// http.post(URL,post, function(data,err){
//     if(data){
//         console.log("Record inserted succesfully");
//         console.log(data);
//     }
//     else{
//         console.warn(err);
//     }
// });

// http.put("https://jsonplaceholder.typicode.com/posts/87",post,function(data,err){
//     if(data){
//         console.log("Record updated succesfully");
//         console.log(data);
//     }
//     else{
//         console.warn(err);
//     }
// });

// http.delete("https://jsonplaceholder.typicode.com/posts/87",function(data,err){
//     if(data){
//         console.log("Record deleted succesfully");
//         console.log(data);
//     }
//     else{
//         console.warn(err);
//     }
// });



