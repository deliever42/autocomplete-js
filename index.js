const strings = ["apple", "banana", "orange"];
const selected = "aplle";

const result = {};

for (let i = 0; i < strings.length; i++) {
  const string = strings.at(i);

  let count = 0;
  for (let j = 0; j < string.length; j++) {
    if (selected.includes(string.charAt(j))) {
      count++;
    }
  }

  result[string] = count;
}

const shorted = Object.entries(result).sort((a, b) => b[1] - a[1])[0];
const estimate = shorted[1] > 0 ? shorted[0] : null;

console.log(`Did you mean ${estimate}?`);
