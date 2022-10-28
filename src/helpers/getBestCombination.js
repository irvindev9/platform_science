// Rules
// If the lenght of the destination is even, the base suitability score (SS) is the number of vowels in the driver’s name multiplied by 1.5.
// If the lenght of the destination is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.
// If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the SS is increased by 50% above the base SS.

function getBestCombination (drivers, destinations) {
  const SScores = [];

  for (let i = 0; i < Object.keys(destinations).length; i++) {
    for (let j = 0; j < Object.keys(drivers).length; j++) {
      SScores.push({
        driver: drivers[Object.keys(drivers)[j]].name,
        destination: destinations[Object.keys(destinations)[i]].name,
        SS: getSS(drivers[Object.keys(drivers)[j]], destinations[Object.keys(destinations)[i]])
      });
    }
  }
  // sort by SS
  SScores.sort((a, b) => b.SS - a.SS);
  return SScores[0];
}

function getSS (driver, destination) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let score = 0;

  if(destination.type === 'even') {
    score = driver.name.split('').filter(letter => vowels.includes(letter)).length * 1.5;
  } else {
    score = driver.name.split('').filter(letter => !vowels.includes(letter)).length;

    if (destination.length % driver.length === 0) {
      score *= 1.5;
    }
  }

  return score;
}

module.exports = getBestCombination;