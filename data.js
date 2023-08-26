import csv from 'csv-parser';
import fs from 'fs';
import { mean, std } from 'mathjs';

const deckData = [];

const winPercentageWeight = 0.45
const seenPercentageWeight = 0.35
const averageCubesWeight = 0.20

const normalizeData = (data, key) => {
  const minVal = Math.min(...data.map(item => item[key]));
  const maxVal = Math.max(...data.map(item => item[key]));
  return data.map(item => {
    return {
      ...item,
      [key]: (item[key] - minVal) / (maxVal - minVal),
    };
  });
};

const calculateStatistics = (data) => {
  const tierScores = data.map(deck => deck.tierScore);
  return {
    average: mean(tierScores),
    standardDeviation: std(tierScores),
    bestCardScore: Math.max(...tierScores),
  };
};

fs.createReadStream('table_data.csv')
  .pipe(csv(['Deck', 'Seen', 'Win', 'Cubes']))
  .on('data', (data) => {
    const tierScore = (winPercentageWeight * parseFloat(data.Win)) + (seenPercentageWeight * parseFloat(data.Seen)) + (averageCubesWeight * parseFloat(data.Cubes));
    deckData.push({ name: data.Deck, tierScore, avgCubes: parseFloat(data.Cubes) });
  })
  .on('end', () => {
    // first item in the array is the header row -- remove it
    deckData.shift();

    // normalize average cubes (some are negative)
    const normalizedDeckData = normalizeData(deckData, 'avgCubes');

    const stats = calculateStatistics(normalizedDeckData);

    // Sort based on tierScore
    normalizedDeckData.sort((a, b) => a.tierScore - b.tierScore);

    // Assign percentile ranks
    normalizedDeckData.forEach((deck, index) => {
      deck.percentile = (index + 1) / normalizedDeckData.length;
    });

    // Assign tiers based on percentile
    normalizedDeckData.forEach(deck => {
      let tier;
      if (deck.percentile >= 0.9) {
        tier = 'S';
      } else if (deck.percentile >= 0.7) {
        tier = 'A';
      } else if (deck.percentile >= 0.5) {
        tier = 'B';
      } else {
        tier = 'C';
      }
      deck.tier = tier;
    });
    normalizedDeckData.sort((a, b) => { return b.tierScore - a.tierScore })
    console.log(normalizedDeckData)
    return normalizedDeckData
  });
// const tierListFn = (data) => {



//   // todo: need to normalize average cubes -- I noticed some decks have a negative average cubes.

//   deckData.forEach(deck => {

//     let tierScore = (winPercentageWeight * deck.winPercentage) + (seenPercentageWeight * deck.seenPercentage) + (averageCubesWeight * deck.averageCubes)
//     console.log(tierScore, deck.name)
//   }
//   )
// }



