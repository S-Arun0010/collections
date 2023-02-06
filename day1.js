//concat() method
console.log("concat method");
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let arr3=['Eleven' ,'Twelve','thirteen','Fourteen','Fifteen'];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));

//copyWithin method
console.log("copyWithin method");
let copy = arr3.copyWithin(2,0,3);
console.log(copy);

//entries()
console.log("centries method");
let a = arr1.entries();
for (let x of a) {
    console.log(x);
}

//every() method
console.log("every method");
let res1= arr1.every(checknumber);
function checknumber(x)
{
    return x<=5;
}
console.log(res1);

//fill() method
console.log("fill method");
 let arr4 = ['He' ,'is','a','dog'];
arr4.fill('god');
console.log(arr4);
arr4.fill('god');
console.log(arr4,3,4);

//filter method
console.log("filter method");
let res2=arr2.filter(check);
function check(x)
{
    return x>7
}
console.log(res2);

//find method
console.log("find method");
let res3 = arr3.find(check1);
function check1(x)
{
    return x.charAt(0)=='F';
}
console.log(res3);

//findindex method
console.log("findindex method");
let res4=arr3.findIndex(check2);
function check2(x)
{
   return x.charAt(2) == 'i';
}
console.log("The index of the element is " + res4);

//foreach method
console.log("foreach method");
let arr5=[];
arr1.forEach (function(x)
{
    arr5.push(x*x);
})
console.log(arr5);

//from method
console.log("from method");
let s1="hey listen here";
let arr6=Array.from(s1);
console.log(arr6);

//includes method
console.log("includes method");
let arr7 =[9,8,7,6,5,4];
console.log(arr7.includes(7,2));

//indexOf method
console.log("indexOf method");
console.log(arr4.indexOf('a',1));

//isArray method
console.log("isArray method");
if(Array.isArray(s1))
{
    console.log(" its an array");
}
else
{
    console.log(" its not an array");
}
if(Array.isArray(arr1))
{
    console.log(" its an array");
}
else
{
    console.log(" its not an array");
}

//join method
console.log("join method");
let s2 = arr6.join();
console.log(s2);

//keys method
console.log("keys method");
let arr8=['A','B','C','D'];
let Keys = Object.keys(arr8);
 for( let x of Keys)
{
    console.log(x);
}

//lastindex method
console.log("lastindex method");
let arr9 = ['a','b','c','a','d','b','c','c'];
console.log(arr9.lastIndexOf('a'));

//lenght
console.log("length method");
let l = arr9.length;
console.log(l);
arr9.length=5
console.log(arr9);

//map method
console.log("map method");
let arr10 = [1,2,3,4,5,6,7,8,9];
let newarr10 = arr10.map(action);
function action(x)
{
    return x*x;
}
console.log(newarr10);

//pop method
console.log("pop method");
newarr10.pop();
console.log(newarr10);

//prototype
console.log("prototype method");
Array.prototype.square = function()
{
    for(let i=0;i<this.length;i++)
    {
        this[i] = this[i]*this[i];
    }
}
arr10.square()
console.log(arr10);

//push method
console.log("push method");
console.log("before push array length "  + arr10.length);
arr10.push(100,121);
console.log("after push array length "  + arr10.length);

//reduce method
console.log("reduce method");
let arr12 = [1000,400,100];
console.log(arr12.reduce(myfun));
function myfun(a,b)
{
    return a-b; 
}

//reduceright method
console.log("reduceright method");
console.log(arr12.reduceRight(myfunc));
function myfunc(a,b)
{
    return a-b; 
}

//reverse method
console.log("reverse method");
arr12.reverse();
console.log(arr12);

//shift method
console.log("shift method");
arr12.shift();
console.log(arr12);

//slice method
console.log("slice method");
let arr13  = [1,2,3,4,5,6,7,8,9,10,11,12];
let arr14 = arr13.slice(2,9);
console.log(arr14);

//some method
console.log("some method");
let res5 = arr13.some(checks);
function checks(x)
{
    return x>=12;
}
console.log(res5);

//sort method
console.log("sort method");
let anime = ['haikyu','naruto','one Piece','Huunter X Hunter','My hero Academica','Death note','boruto'];
let newanime = anime.sort();
console.log(newanime);

//splice method
console.log("splice method");
anime.splice(6,1);
console.log(anime);
anime.splice(6,0,"that time.......slime");
console.log(anime);

//tostring method
console.log("tostring method");
let new_anime = anime.toString();
console.log(new_anime);

//unshift method
console.log("unshift method");
anime.unshift("Chainshaw man", "bkue lock");
console.log(anime);

//value of method
console.log("value method");
anime.valueOf(anime);


