const alphaList = ['a', 'b', 'c'];

const numList = [1, 2, 3];

function zipList(list1, list2){
  const answer = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      answer.push(list1[i]);
      answer.push(list2[i]);
    }
  } else {
    console.log('Please use lists of equal lengths.');
  }
  return answer;
}

function zipListUnder(list1, list2) {
  return _.zip(list1, list2);
}

console.log(zipListUnder(alphaList, numList));
console.log(zipListUnder(alphaList, numList));
