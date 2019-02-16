//Objects
const person={
    name:'Max',
    age:29,
    greet() {
        console.log('Hi i am '+ this.name);
    }
};
person.greet();
//Arrays
const hobbies=['Dancing','Singing'];
//for-of loop
for (const i of hobbies) {
    console.log(i);
}
//Map method
//Mostly used to change values in arrays
console.log(hobbies.map(hobby=>{return 'Hobby:'+hobby}));
console.log(hobbies);
//const are also editable as its just the pointer to the address which is saved
hobbies.push('Running');
console.log(hobbies);
//spread operator(... var) can be applied on arrays, obj anythong.
//It takes out all elements from the variable on which it is applied and stores them in the encasing outside the segment ie, (),{},[]etc.
const copiedArray=[...hobbies];
console.log(copiedArray);
const copiedPerson={...person};
console.log(copiedPerson);
//Arrow notation for functions

const summarizeUser=(username,userage,passion)=>{
    console.log('Name is '+username+' age is '+userage+' passion is '+passion);
};
summarizeUser('Nikhil',19,'Running');

//Rest operator is Syntatically same as Spread operator, its the place where you use it, that matters.
//Whether you use it to pull all elements from a var to an encasing or to push arguments in a var
//Rest in action:
const toArray = (...args) => {
    return args;
};
console.log(toArray(1,2,3,4));

//Destructuring
//Object Destructuring

//Normal Method Totally fine
/*
 const dogs={
    Petname:'Bruno',
    age:3,
    hello(){
        console.log('Hi I am '+this.Petname);
    }
};
const printName=(dogsData)=>{
    console.log(dogsData.Petname);
}
printName(dogs);
*/
//Destrtucturing in Action

const dogs={
    Petname:'Bruno',
    age:3,
    hello(){
        console.log('Hi I am '+this.Petname);
    }
};
const printName=( {} )=>{
    console.log(dogsData.Petname);
} 
printName(Petname);

 