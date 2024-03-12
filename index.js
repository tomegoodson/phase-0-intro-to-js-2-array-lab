// Assign the initial value to the cats array
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat non-destructively
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat non-destructively
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat non-destructively
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat non-destructively
function removeFirstCat() {
  return cats.slice(1);
}
