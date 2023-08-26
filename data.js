const deckData = [
  { seenPercentage: 1.56, winPercentage: 64.1, name: 'Kitty Bounce', averageCubes: 1.24 },
  { seenPercentage: 1.94, winPercentage: 54.36, name: 'Invis Hela', averageCubes: 0.99 },
  { seenPercentage: 3.46, winPercentage: 61.1, name: 'Shuri Clone', averageCubes: 0.75 },
]

const tierListFn = (data) => {

  const winPercentageWeight = 1
  const seenPercentageWeight = 1
  const averageCubesWeight = 1

  // todo: need to normalize average cubes -- I noticed some decks have a negative average cubes.

  deckData.forEach(deck => {

    let tierScore = (winPercentageWeight * deck.winPercentage) + (seenPercentageWeight * deck.seenPercentage) + (averageCubesWeight * deck.averageCubes)
    console.log(tierScore, deck.name)
  }
  )
}

tierListFn(deckData)