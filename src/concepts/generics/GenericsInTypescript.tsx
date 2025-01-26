// Typescript generics allows you to create reusable components that work with a variety of data types while preserving type safety.

//Generic Function:

function identity<T>(arg:T):T{
    return arg;
}

const result = identity<string>('Hey Anish');
console.log("Result", result);

//Generic Class:
class Box<T>{
    contents:T;
    constructor(value:T){
        this.contents = value;
    }
}


const numberBox = new Box<number>(10);
console.log("🚀 ~ numberBox:", numberBox);
const stringBox = new Box<string>('anix');
console.log("🚀 ~ stringBox:", stringBox);

//Generic Interface:
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
const kvp: KeyValuePair<string, number> = { key: 'Age', value: 30 };
console.log(kvp.key); // Output: Age
console.log(kvp.value); // Output: 30