/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - binds to the most global object(window)

* 2. Implicit binding - binds the object that is left to the dot of the function called

* 3. New binding - links a new variable to the parent using 'new' which keeps the context from 'this'

* 4. Explicit binding - 'this' is assigned via .call, .apply and .bind
*
* write out a code example of each explanation above
*/

// Principle 1

function simple(attr) {
  this.attr = "word";
  return this.attr;
}
console.log(simple());
// Principle 2

function Character(charAttr) {
  this.name = charAttr.name;
  this.ocupation = charAttr.ocupation;
  this.greet = function() {
    return `Hello my name is ${this.name} and my job is ${this.ocupation}`;
  };
}

// Principle 3

const Superman = new Character({
  name: "Superman",
  ocupation: "Saving the Universe"
});
console.log(Superman.greet());

// Principle 4

const Villian = {
  name: "Mojojo",
  age: 132
};

const hate = ["pineapple on pizza", "homework", "pencil sharpeners"];

function Intro() {
  return `HELLO I am ${this.name} and I hate ${hate}`;
}

console.log(Intro.call(Villian, hate));
