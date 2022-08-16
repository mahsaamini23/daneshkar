// const obj={
//     name:"ali",
//     age:23,
//     obj2:{
//         age:15,
//         obj3:{
//             name:'Ali',
//         },
//     },
// };

// let copy={};
// for (let key in obj){
//     if(typeof obj[key]==="object"){
//         copy[key]==={...obj[key]};
//     }else {
//         copy[key]=obj[key];
//     }
// };
// console.log(copy);
// console.log(copy===obj);
// console.log(copy.obj2===obj.obj2);
// console.log(copy.obj2.obj3===obj.obj2.obj3);

// let person ={
//     name:"ali",
//     age:18,
//     father:{
//         name:"arman",
//         age:45,
//         mother:{
//             name:"zahra",
//             age:30,
//         }
//     },
// };

// function deepCopy (person , copy={}){
//     for(let key in person){
//         if(typeof person[key]==="object"){
//             copy[key]={};
//             deepCopy(person[key],copy[key]);
//         }else{
//             copy[key]=person[key];
//         }
//     }
//     return(copy);
// }

// let copy = deepCopy(person);
// console.log(copy);
// console.log(copy.father===person.father);

//  const person={
//     first_name:"ali",
//     sayHello:function(){
//         console.log("hello" + this.first_name);
//     },
// };

// let obj2 = {...obj,first_name : "hassan"}
// obj2.sayHello();

// const obj ={
//     first_name:"hassan",
// };

// obj.sayHello = person.sayHello;
// console.log(obj);


// const counter ={
//     step:0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showStep(){
//         console.log(this.step);
//         return this;
//     }
// };

// // counter.up().showStep().down().up().showStep();

// function Person(first_name , last_name , age){
//     this.first_name = first_name;
//     this.last_name=last_name;
//     this.age=age;
//     this.sayHello =function (){
//         console.log("hello",this.first_name+" "+this.last_name);
//     };
// }

// const ali = new Person("zahra","goli",30); //میتونیم هر اسمی که میخوایم به ابجکت جدیدمون بجای person بدیم.
// console.log(ali);
// ali.sayHello();
// const obj ={
//     first_name:"ali",
//     address:{
//         city:{
//             province:"tehran",
//             city:"tehran",
//         }
//         street:"azadi"
//     }
// }

// obj.address=undefined;
// console.log(obj.address.city);
// if(obj .address){
//     console.log(obj.address.city.city);//اگر نباشه بهمون ارور بر میگردونه
// }
// راهکار برای مثال بالا
// console.log(obj?.address?.city?.city?? "we dont");//با این؟ چک میکنیم کهتعریف نشده نباشه ؟؟ یعنی در غیر این صورت
// console.log(obj[address]?.city);//اینطوری داخل براکت هم میشه 

// let number =[1,2,3,4,5,6,7,8,9];
// number.forEach((index)=>{
//     console.log(index);
// });

// const array=[0,1,2,3,4,5,6];
// const name=["amin","mohadese"];
// console.log(array.include[4]);;

// const array =[
//     {id:0,name:"ali",age:16},
//     {id:1,name:"amin",age:18},
//     {id:2,name:"akbar",age:21},
//     {id:3,name:"arman",age:54},
// ]

// let user = array.find((value)=>value.id===0 && value.name==="ali");
// console.log(user);

// const user2= array.filter((value)=>value.age>18);
// console.log(user2);

// const oldUser=array .map((value)=>({...value , age:value.age}));
// console.log(oldUser);

// const user3 = array.map((value)=>value.id===2 ?{ ...value,name:"ehsan"}:value);
// console.log(user3);

// const user= array.sort((a,b)=>{//** */
//     if(a.id>b.id){
//         return 1;
//     }else if (a.id===b.id){
//         return 0;
//     }else{
//         return -1;
//     }
// });

// const user2 = array.sort((a,b)=>b.id-a.id);//راه بهتر **
// console.log(user);
// console.log(user2);


// let user={
//     name:"mohadese",
//     age:27,
//     "last Name":"moradi",
// };
// user.isAdmin=true;
// delete user.age;
// let key="age";
// user[key]=27;
// console.log(user);

// function makeUser(name , age){
//     return{
//         name,
//         age:age,
//     };
// };

// let user = makeUser("ali" , 24);
// console.log(user.name);

// let user={
//     name:"ali",
//     last_name:"moradi",
//     age:26,
//     job:"teacher",
// }

// for(let key in user){
//     console.log(user[key]);
// }

// let clone = {};
// for(let key in user){
//     clone[key]=user[key];
// }

// console.log(clone);

// let user1={name:"arman",};
// let option1={lastName:"moradi"};
// let option2={age:30};
// let option3={job:"docter"};

// console.log(Object.assign(user1, option1, option2, option3));

// Object.assign(user, {name:"sara"});
// console.log(user);

// let person = {
//     name:"john",
//     sizing:{
//         height:180,
//         width:50,
//     },
//     age:32,
//     sayHi(){
//         console.log("Hello");
//     },
// };
// console.log(person.sizing.height);

// let clone = Object.assign({},person);

// console.log(object);


// let myArray=[ 4,1, 2 , 3 , 4 , 5 ];
// let Sum = myArray.reduce((sum=0 , item)=>sum +item);
// let multi=myArray.reduce((sum=1 , item)=>sum*item);
// let Average= myArray.reduce((sum=1,item)=>(sum+item)/myArray.length);
// let minimum=myArray.reduce((x=0 ,item)=>Math.min(item));
// let maximum=myArray.reduce((x=0, item)=>Math.max(item));

// console.log(Sum , multi , Average , minimum , maximum);

const persons = [
    {
      id: 1,
      first_name: "ali",
      last_name: "komijani",
      age: 31,
      isMarried: true,
      militaryService: true,
      gender: "man",
    },
    {
      id: 10,
      first_name: "hossein",
      last_name: "fazali",
      age: 30,
      isMarried: true,
      militaryService: false,
      gender: "man",
    },
    {
      id: 11,
      first_name: "mohammad",
      last_name: "fazali",
      age: 16,
      isMarried: false,
      militaryService: false,
      gender: "man",
    },
    {
      id: 2,
      first_name: "hassan",
      last_name: "hosseini",
      age: 21,
      isMarried: false,
      militaryService: false,
      gender: "man",
    },
    {
      id: 3,
      first_name: "zahra",
      last_name: "ahmadi",
      age: 19,
      isMarried: true,
      militaryService: false,
      gender: "woman",
    },
    {
      id: 3,
      first_name: "samira",
      last_name: "ahmadi",
      age: 16,
      isMarried: false,
      militaryService: false,
      gender: "woman",
    },
  ];
//   give me all:
//   all over 18 pepole
//   all married man
//   all single woman
//   all man that single and pass militaryService
//   all man that married and dont pass militaryService
//   new array with this shape {  id: 3,
//       full_name: "zahra ahmadi",
//       age: 19,
//       isMarried: true,
//       militaryService: false,
//       gender: "woman",
// let x=[];
  //over 18 people
// persons.map((person))/

// console.log(persons.filter((person)=>person.age>18));
// console.log(persons.filter((person)=>person.gender ==="man" && !person.isMarried));
// console.log(persons.filter((person)=>person.gender ==="women" && !person.isMarried));
// console.log(persons.filter((person)=>person.gender ==="man" && person.militaryService));
// console.log(persons.filter((person)=>person.gender ==="man"&& !person.militaryService));
const newPerson = persons.map((person)=>({full_name:person.last_name +" "+ person.last_name , age:person.age ,
 isMarried:person.isMarried , militaryService:person.militaryService , age:person.age ,gender:person.gender}));
console.log(newPerson);


  
