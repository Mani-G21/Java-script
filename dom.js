let val;

val=document;

// val = document.all;
// val = document.all[9];

// val = document.all.length;
// val = document.all.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;  //this will only return a value if we are running on http or https protocol;

// val = document.URL;
console.log(val);
// val = document.characterSet;
// val = document.contentType;


// val  = document.forms;
// val = document.forms[1];
// val = document.forms[1].id;
// val = document.forms[1].method;
// val = document.forms[1].action;

// val = document.links;
// val = document.links[5];
// val = document.links[5].href;
// val =document.linksp[5].className;
// val = document.links[5].classList;
// val = document.links[5].classList[2];

// val = document.images;
// val = document.images[1].src;

// const scripts  =  document.scripts;

// HTMLCollection cannot be used with foreach, only arrays can be used with foreach


// scripts.foreach(function(script)
// {
//     console.log(script);
// });

// let scriptsArr = Array.from(scripts);   //idar agar ham function me scripts likhenge while pass to be chalega cuz basically script or scripts its one and the same thing
// scriptsArr.forEach(function(script){
//     console.log(script.src);
// });


// 1.              document.getElementById();

// const taskTitle = document.getElementById("task-title");

// console.log(taskTitle);
// console.log(taskTitle.tagName);
// console.log(taskTitle.id);
// console.log(taskTitle.className);

// taskTitle.className = 'some-class';

// we can change the style Also

// taskTitle.style.backgroundColor = 'green';
// taskTitle.style.padding = '10px';
// taskTitle.stytle.color = 'black';

// 2..                     changing the content of the element with the help of JSON

// taskTitle.textContent = 'Task-List';
// taskTitle.textContent = 'task<small>list</small>';

// 3..                    innerHTML

// taskTitle.innerHTML = 'task<small>list</small>';

// ***                 document.querySelector(); returns the first element matching the querySelector

// const collectionItem = document.querySelector('.collection .collection-item');
// collectionItem.style.backgroundColor = 'black';


// document.querySelector('.collection .collection-item:nth-child(3)').style.background = 'red';
// document.querySelector('.collection .collection-item:nth-child(odd)').style.background = 'black';
// document.querySelector('collection .collection-item:nthe-child(even)').style.backgroundColor = 'grey';

// ******************************MULTIPLE ELEMENTS*********************************************

// 1.              getElementsByClasName()

// const collectionItems = getElementByClassName('collection-item');
// console.log(collectionItems);
// Array.from(CollectionItems).forEach(function(item , index){
//     item.style.backgroundColor = (index % 2 ==0 ? 'grey': 'black');
// });

// 2..             getElementsByTagName()

// const lis = document.getElementsByTagName('li');
// console.log(lis);
// Array.from(lis).forEach(function(li){
//     li.style.color = 'black';
// });



// 3..              querySelectorAll(): returns NodeList of all elements matching the selector 
//                     HTMLCollections cannot be looped using forEach but NodeList can

//                     const deleteItems = querySelectorAll('.collections .delete-item');
//                     console.log(deleteItems);
//                     deleteItems.forEach(function(item){
//                         item.innerHTML = '<i class="fa fa-trash"></i>';
//                     });

// *********************************Traversing the DOM************************************

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('ul.collection-item');

// console.log(list);
// console.log(listItem);


// get the child Node

// val = list.childNodes;
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[1].nodeType;

// **********VALUES OF NODES****************
// 1. element
// 2. Attribute(deprecated);
// 3. Text Node
// 8. comment
// 9. Document itslef
// 10. doctype


// ********gET CHILDREN ELEMENT***************

// val = list.children;
// val = list.childred[1];

// *********CHILDREN OF CHILDREN**************
// val = list.children[1].childred[1].children;

// list.childred[1].children[0].innerHTML = '<i class="fa fa-trash"></i>';

// ************first CHILD***************
// val = list.firstChild;
// val = list.firstElementChild;

// ****************** last child
// val = list.lastChild;
// val = list.lastElementChild;

// ********************count child ElementInternal
// val = list.childElementCount;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>get the parent Node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement.parentElement;

// *******************get text sibling
// val = listItem.nextSibling;
// val = lisstItem.nextElementSibling.nextElementWSibling;

// ***************get the previois sibling
// val = listItem.previousSibling;
// val = listItme.previousElementSibling;

// val = list.nextElementSibling.nextElementSibling.children[0].previousElementSibling;



// *************************************** create element with JS
//                                         document.createElement();


// const LI = document.createElement('LI');



// LI.className = "collection-item";       // ye tab jab khali tag  me ek he class dalna hai
// LI.classList.add('collection-item');


// LI.innnerHTML = 'List item 6  <a href="" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>';

// const link  = document.addElement('a');
// link.className = "delete-item secondary-content";
// link.setAttribute('title', 'Remove');
// const icon = document.createElement('i');
// icon.className = "fa fa-trash";
// link.appendChild(icon);

// LI.appendChild(document.createElement("Task 6"));
// LI.appendChild(link);

// *************ADD THE DYANAMICALLY CREATED ELEMENT TO OUR DOMException
// const list = document.querySelector('.collection');
// link.appendChild(LI);

// console.log(LI);


// *********************************REMOVE/REPLACE THE ELEMENT FROM DOMException

// *****create the element
// const h2 = document.createElement('H2');
// h2.id = "task-title";
// h2.appendChild(document.createTextNode('Task List'));

// **********GET the refernece to the old element
// const oldHeading = document.querySelector("task-title");


// **********get the parent element whose child needs to be replaced

// const parentElement= oldHeading.parentElement;

// *******Now use replaceChild(new element, old element) on parent element to replace old element with the new one

// parentElement.replaceChild(h2, oldHeading);


// ********To remove any element from the dom ,just call remove() on the reference of that element

// const lastTask = document.querySelector('ul.collection .collection-item:last-child').remove();



// ***********************MEthods to deal with attributes

// 1. element.setAttribute('attrName', 'attrValue');
// 2. element.getAttribute('attrName');
// 3. element.hasAttribute('attrName');
// 4. element.removeAttribute('attrName');

// lastTask.removeAttribute('title');

// **************************EVENT HANDLLING IN JS*******************************************

// what is event?
// event is any action by user which triggers the code
// event handling: it is a mechanism to capture the event and write piiece of code which will be executed on the triggering of event
// syntax to handle event in js:

// element.addEventListener('typeOfEvent', callback function which will be executed);


// console.clear();
// const clearAllBtn = document.querySelector('.clear-tasks');
// clearAllButton.addEventListener('click',function(evt){     // we can use evt or e or event while passing an object of event
//     console.log('clicked');
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.className);
//     console.log(event.type);
//     console.log(event.timeStamp);

//     coordts of event relative to the window
//     console.log(event.clientX);
//     console.log(event.clientY);

//     ccordts of event relative to the element
//     console.log(event.offsetX);
//     console.log(event.offsetY);
// });




// *******************MOUSE EVENTS IN JS********************
// console.clear();
// const runAnEvent function(evt){
//     console.log(`event type: ${evt.type}`);
// }

// document.querySelector(".card").addEventListener('click', runAnEvent);
// document.querySelector(".card").addEventListener('dbclick', runAnEvent);
// document.querySelector(".card").addEventListener('mousedown', runAnEvent);
// document.querySelector(".card").addEventListener('mouseup', runAnEvent);
// document.querySelector(".card").addEventListener('mouseenter', runAnEvent);
// document.querySelector(".card").addEventListener('mouseleave', runAnEvent);
// document.querySelector(".card").addEventListener('mouseover', runAnEvent);
// document.querySelector(".card").addEventListener('mouseout', runAnEvent);
// document.querySelector(".card").addEventListener('mousemove', runAnEvent);


// *******************KEY EVENTS IN JS*************************

// const task = getElementById('task');
// const form = task.parentElement.parentElement;

// task.addEventListener('keydown',runAnevEvent);
// task.addEventListener('keyup',runAnevEvent);
// task.addEventListener('keypress',runAnevEvent);
// task.addEventListener('focus',runAnevEvent);
// task.addEventListener('blur',runAnevEvent);

// task.addEventListener('blur', function(evt){
//     const taskValue = evt.target.value;
//     if(taskValue === "")
//     {
//         evt.target.classList.add('invalid');
//     }
//     else{
//         evt.target.classList.remove('invalid');

//     }
// });

// task.addEventListener('cut',runAnEvent);
// task.addEventListener('copy',runAnEventDisabled);
// task.addEventListener('paste',runAnEventDisabled);

// function runAnEventDisabled(e){
//     e.preventDefault();
// }


// *****************retreiving the value of t4ext field on submit
// form.addEventListener('submit', function(e){
//     console.log(task);
//     console.log(task.value); // retrieves the value of input field
//     e.preventDefault();
// });

// **********************EVENT HANDLING

// document.querySelector('#task-title').addEventListener('click',function(evt){
//     console.log('task title clicked')
// });

// document.querySelector('.card-action').addEventListener('click',function(evt){
//     console.log('card action clicked');
// });

// document.querySelector('.card').addEventListener('click',function(evt){
//     console.log('card clicked');
// });

// *********************EVENT DELLEGATION

// document.querySelector('.collection').addEventListener('click',function(evt){
//     if(evt.target.classList.contains('delete-item'))
//     {
//         evt.target.parentElement.remove();
//     }
//     if(evt.target.parentElement.classList.contains('delete-item'))
//     {
//         evt.target.parentElement.parentElement.remove();
//     }
// });


// *******************Storage
// Application storage is suppoted by javascript with an objectb of localStorage

// It has 2 methods
// 1.  setItem('key','value');
// 2. getItem('key');

// localStorage.setItem('name', 'mani');
// console.log(localStorage.getItem('name'));
// localStorage.setItem('names', ['mani', 'random']);

// console.log(localStorage.getItem('names'));




// *************JSON: javascript OBJECT NoTATION

// this is nothing but a stringified version of JS objects
// for example:

// {
//     name: 'mahek',
//     gender: 'female',
// }

// JSON OF ABOVE OBJECT WOULD BE
// {
//     "name": 'mahek',
//     "gender": 'female',
// }

// WHY JSON STRINGIFIES???????
// as it can be again converted to js object, this is known as parsing

// localStorage.setItem('subjects', JSON.stringify(['DS', 'java', 'js']));
// console.log(JSON.parse(localStorage.getItem('subjects')));


// ********Session storage

// sessionStorage('name','param');


