function split(wholeArray) {

  const firstHalf = [];
  const secondHalf = [];
  let midIndex = Math.floor(wholeArray.length / 2);
  // Up to, but not including midIndex for firstHalf; remainder in secondHalf
  wholeArray.forEach((value, i) => {
    if (i < midIndex) {
      firstHalf.push(value);
    } else {
      secondHalf.push(value);
    }
  });

  return [firstHalf, secondHalf];
}
