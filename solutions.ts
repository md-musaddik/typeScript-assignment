//problem 1
function filterEvenNumbers(nums:number[]):number[]{
    return nums.filter((num)=> num % 2 === 0);
}

//problem 2
function reverseString(sentence:string):string{
    let reversed="";
    const length=sentence.length-1
    for(let i=length;i>=0;i--){
        reversed += sentence[i];
    }
    return reversed;
}

//problem 3
type StringOrNumber = string | number;

function checkType(value:StringOrNumber):string{
    if(typeof value === "string"){
        return "String";
    }else{
        return "Number";
    }
    
}

//problem 4
function getProperty<T, K extends keyof T>(object:T, key:K):T[K]{
    return object[key];
}


//problem 5
interface Book{
    title:string;
    author:string;
    publishedYear:number;
}

function toggleReadStatus(book:Book):Book & {isRead:boolean}{
    return {
        ...book,
        isRead:true
    };
}


//problem 6

class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade:string;

    constructor(name:string, age:number, grade:string){
        super(name, age);
        this.grade = grade;
    }

    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

//problem 7
function getIntersection(array1:number[], array2:number[]):number[]{
    return array1.filter(num => array2.includes(num));
}