function asc(keySorting) {
  return (card1, card2) => {
    if (card1[keySorting] > card2[keySorting]) {
      return 1;
    }
    if (card1[keySorting] < card2[keySorting]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  };
}

function desc(keySorting) {
  return (card1, card2) => {
    if (card1[keySorting] > card2[keySorting]) {
      return -1;
    }
    if (card1[keySorting] < card2[keySorting]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  };
}

export default function(cards, sortParameter) {
  let cardsSorted;
  if (sortParameter === "asc") {
    cardsSorted = cards.sort(asc("name"));
  } else if (sortParameter === "desc") {
    cardsSorted = cards.sort(desc("name"));
  } else if (sortParameter === "ascCreated") {
    cardsSorted = cards.sort(asc("createdAt"));
  } else {
    cardsSorted = cards.sort(desc("createdAt"));
  }

  return cardsSorted;
}
