const x = [100, 200, 300, 400];
const y = [1.1, 1.2, 1.3, 1.4];
const z = [10, 20, 30, 40];

let combinations = [];

// Generate all combinations
for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < y.length; j++) {
    for (let k = 0; k < z.length; k++) {
      combinations.push({
        x: x[i],
        y: y[j],
        z: z[k]
      });
    }
  }
}

// Function to rank combinations, giving priority to x (volume)
function rankCombination(combination) {
  return combination.x; // Higher volume means more important
}

// Sort combinations by volume in descending order
combinations.sort((a, b) => rankCombination(b) - rankCombination(a));

// Select top 25-30 combinations
const topCombinations = combinations.slice(0, 30);

// Output the top combinations
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = '<h2>Top Combinations:</h2>';
outputDiv.innerHTML += `<pre>${JSON.stringify(topCombinations, null, 2)}</pre>`;
