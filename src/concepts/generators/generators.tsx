//In JavaScript, a generator is a special type of function that can be paused and resumed,
//  allowing you to generate values lazily.
//  It is defined using the function* syntax and uses the yield keyword to pause execution.

// # Key Features of Generators:
// 1. Lazy Evaluation: Generators do not execute all at once; they produce values one at a time when requested.
// 2. Pausing and Resuming: The yield keyword pauses execution and returns a value, and execution resumes when .next() is called.
// 3. State Retention: Unlike regular functions, generators remember their execution state between calls.

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = numberGenerator();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true }

// # Using Generators for Infinite Sequences

function* infiniteNumbers(){
    let num =1;
    while(true){
        yield num++;
    }
}

const numGen = infiniteNumbers();

console.log(numGen.next().value); //1
//.... so on

// # Use Case: Generating unique IDs, paginated data fetching, etc.


// # Using return in Generators
//If return is used, the generator stops immediately:

function* test() {
    yield 1;
    return 2;
    yield 3; // This will never run
  }
  
  const t = test();
  console.log(t.next()); // { value: 1, done: false }
  console.log(t.next()); // { value: 2, done: true }
  console.log(t.next()); // { value: undefined, done: true }
  


