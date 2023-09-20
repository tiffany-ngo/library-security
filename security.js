// {
//   truePositives: 1,
//   falsePositives: 4,
//   trueNegatives: 8,
//   falseNegatives: 2,
// }

function analyzeSecurity(objectArray) {
  const truePArray = _.map(objectArray, function (data) { return data.truePositive; });
  const falsePArray = _.map(objectArray, function (data) { return data.falsePositive; });
  const trueNArray = _.map(objectArray, function (data) { return data.trueNegative; });
  const falseNArray = _.map(objectArray, function (data) { return data.falseNegative; });
  const sumTP = _.reduce(truePArray, function (memo, num) { return memo + num; }, 0);
  const sumFP = _.reduce(falsePArray, function (memo, num) { return memo + num; }, 0);
  const sumTN = _.reduce(trueNArray, function (memo, num) { return memo + num; }, 0);
  const sumFN = _.reduce(falseNArray, function (memo, num) { return memo + num; }, 0);
  return {
    truePositives: sumTP, falsePositives: sumFP, trueNegatives: sumTN, falseNegatives: sumFN,
  };
}

console.log(analyzeSecurity([
  {
    truePositive: 1,
    falsePositive: 4,
    trueNegative: 8,
    falseNegative: 2,
  },
  {
    truePositive: 2,
    falsePositive: 4,
    trueNegative: 16,
    falseNegative: 1,
  },
]));
