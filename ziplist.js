const alphaList = ['a', 'b', 'c'];

const numList = [1, 2, 3];

function zipList(list1, list2){
  const answer = [];
  for (let i = 0; i < list1.length; i++) {
    answer.push(list1[i]);
    answer.push(list2[i]);
  }
  return answer;
}

function zipListUnder(list1, list2) {
  let answer = _.zip(list1, list2);
  return _.union(answer[0], answer[1], answer[2]);
}

console.log(zipList(alphaList, numList));
console.log(zipListUnder(alphaList, numList));
