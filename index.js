const strings = ["apple", "banana", "orange"];
const selected = "aplle";

const results = {};

for (let i = 0; i < strings.length; i++) {
  const str = strings.at(i);

  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (selected.includes(str.charAt(j))) {
      count++;
    }
  }

  results[str] = count;
}

const shorted = Object.entries(result).sort((a, b) => b[1] - a[1])[0];
const estimated = shorted[1] > 0 ? shorted[0] : null;

console.log(`Did you mean ${estimated}?`);
