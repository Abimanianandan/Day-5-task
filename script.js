// 1.For the given JSON iterate overall forloops (for,for in, for of,for each)
const obj=[
    {
    "name":"Abimani",
    "age":"20",
    "degree":"Bca",
    "city":"Thanjavur",
    "hobby":"Movies"
}
]
// For loop:-
for(var i=0;i<obj.length;i++){
    console.log(obj[i]);
}

// For in loop:-
for(let i in obj){
    console.log(obj[i]);
}

//For of loop:-
for(let a in obj){
    console.log(obj[a]);
}

// For Each loop:-
const result=obj.forEach((ele)=>console.log(ele));


// 2.Create your own resume data in JSON format:-
const obj1=[
    {
    "name":"Abimani",
    "age":"20",
    "degree":"Bca",
    "skill":"Web developement",
    "city":"Thanjavur",
    "hobby":"Movies"
}
]
for(var i=0;i<obj1.length;i++){
    console.log(obj1[i]);
}
