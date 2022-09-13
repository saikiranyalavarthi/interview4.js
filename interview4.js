//question.6
let a=[1,2,3,4,5,6,8,10]
const mapnum=a.map(x=>x*4)
console.log(mapnum);
const filternum=a.filter(x=>x<2)
console.log(filternum);

//question no 7
//pass by value
let b=5;
let c=b;
 b=b+c;
console.log(b);
console.log(c);

//pass by referance
let object1={
    lname:"saikiran",
    age:23,
}
let obj2=object1;
console.log(obj2);