let a : string  = "123";
let nambo = <string> "Arpit";
let num : number = 0;
let age = <number>18;
let phone :any = 579;
let email = <any> "omagrahari55@gmail.com";
let legal : boolean = false;
console.log(a);
console.log(nambo);
console.log(num);
console.log(age);
console.log(phone);
console.log(email);
console.log(legal);
console.log(!legal);

// union typeScript

let value : string | number = 123;
console.log(value);
value = "Kya baat hai";
console.log(value);

// applying typeScript on the fuction

const multi = (n:number,m:number) :string=>{
    return String(n*m);
}

console.log(multi(5,6));
console.log(typeof(multi(5,6)));

// we can predefine the type and use in the code

type Fun = (n:number,m:number) => number | string;

const funfun : Fun = (n,m)  =>{
    return String(n*m);
}
console.log(funfun(5,8));

//doing the concatination of the number and the string

type Declaretype = (n:number , m:string) => string | number ; 

const concatenate : Declaretype = (n,m) =>{
    return (n+m)
}

console.log(concatenate(5,"6"));


// Array in typeScript

let arr1 : number[] = [5,7,8,9,7,3]; // method 1
let arr2 : Array<number> = [8,7,59,2,3,4,9]; // method 2
console.log(arr1)
console.log(arr2)

let arr3 : Array <number |string > = [8,7,9,8,1,3,5,"Arpit","Abhi","Rohit"]; 
console.log(arr3)
arr3[5] ="shivam";
console.log(arr3)

// objects in typeScript

// we can define the the object throw 1.type  and 2. interfaces
type objtype1 = {
    name:string,
    age:number,
    gender ? : boolean
}

let obj1 : objtype1 = {
    name:"Arpit",
    age:19,
    gender:true
}
console.log(obj1)

interface objtype2{
    name:string,
    age:number,
    gender ? : boolean,
}

interface objtype3 extends objtype2 {
    fun ? : (n:number,m:number)=>number;
}

const obj2 : objtype2 = {
    name:"Rohit",
    age:20
}
console.log(obj2)

const obj3 : objtype3 ={
    name:"Abhi",
    age:22,
    fun : (n,m)=>{
        return(n*m);
    }
}

console.log(obj3)
let x1 : number = 10;
let x2 = <number> 50;
console.log(`value of ${x1} X ${x2} = ${obj3.fun?.(x1,x2)}` )


// fuctions

type funcdec1  = (farr1: number[]) => void;
 
const parr1 : funcdec1 = (farr1)=>{
    console.log(farr1)
} 

parr1([5,7,8,9,7])


type fundec2 = (n:number, m:number ,l?: number) => number;

// if vaue is not send 
const nm1 : fundec2 = (n,m,l)=>{
    if (l==undefined) {
        return n*m;
    }
    return n*m*l;
}

console.log(nm1(5,10));
console.log(nm1(5,10,2));


// how to take the default value

const nm2 : fundec2 =(n,m,l=20)=>{
    return n*m*l;
}

console.log(nm2(5,10));
console.log(nm2(5,10,2));


type tfunarr1 = (...m:number[])=>number[];

const funarr1 : tfunarr1 =(...m)=>{
    console.log(typeof(m));
    return m;
}

console.log(funarr1(5,10,7,69));


// objects 

interface tfunobj1 {
    Customername: string;
    Productprice : number;
    image: string,
    paid:boolean,
    discount ? : boolean
}

type objfundec = (obj:tfunobj1) => void;

const ppobjfun1 : objfundec =(obj) =>{
    console.log(obj);
}

ppobjfun1({
    Customername: "Arpit",
    Productprice:5000,
    image:"product.jpg",
    paid:false
})
ppobjfun1({
    Customername: "Rohit",
    Productprice:9000,
    image:"product2.jpg",
    paid:true,
    discount:false
})

const form = document.getElementById("form") as HTMLFormElement;

form.onsubmit=(e:SubmitEvent)=>{
    e.preventDefault();
    const inp = document.querySelector('.input') as HTMLInputElement;   
    const inputvalue = Number(inp.value);
    const showvalue = document.querySelector(".showvalue") as HTMLElement;
    showvalue.innerHTML = String(inputvalue+20);
}

interface Person{
    name:string,
    course:string
};

const person1 : Person ={
    name : "Arpit",
    course : "B.tech"
};

const getdata =(key : keyof Person ) : string =>{
    return person1[key];
}

console.log(getdata("name"));

const genericfun = <T> (n:T) : T =>{
    return n;
}

const genans1 = genericfun(5)
const genans2 = genericfun("Arpit");
const genans3 = genericfun(true);
const genans4 = genericfun(person1)
console.log(`This is value of genericans4 - ${genans4.name}`)


interface genericusert{
    name:string,
    email:string,
    age:number
};

const groupofuser : Array<genericusert> =[
    {
        name : "Arpit",
        email:"arpit@gmail.com",
        age:19
    },
    {
        name : "Abhi",
        email:"abhi@gmail.com",
        age:22
    },
    {
        name : "Aman",
        email:"aman@gmail.com",
        age:20
    },
]

// console.log(groupofuser)
// console.log(groupofuser[0])
// console.log(groupofuser[0].name)
// console.log(groupofuser[1]["name"])


const filterbyname = <T,U extends keyof T > (arr: T[],target: U , value : T[U] ) : T[]=>{
    const val =arr.filter((item)=> item[target]===value)
    return val;
}

console.log(filterbyname(groupofuser,"name","Abhi"))
