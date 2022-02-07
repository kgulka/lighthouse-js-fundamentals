const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let maxSubmitter = "";
  let maxMetric = 0;
  for (let vegetable of vegetables){
    if (vegetable[metric] > maxMetric){
      maxMetric = vegetable[metric];
      maxSubmitter = vegetable.submitter;
    }
  }
  return maxSubmitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

//returns "Old Man Franklin"