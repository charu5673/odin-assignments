import { HashMap } from "./hashmap.js";
import { HashSet } from "./hashset.js";

let test=new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


test.set('kite','yellow');

test.set('moon', 'silver')


test.set('grape', 'black')

test.remove('grape');

console.log(test.entries());

let hset=new HashSet();

hset.set('apple')
hset.set('banana')
hset.set('carrot')
hset.set('dog')
hset.set('elephant')
hset.set('frog')
hset.set('grape')
hset.set('frog')
hset.set('ice cream')

console.log(hset.keys());

