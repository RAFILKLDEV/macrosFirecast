const teste = [4, 13, 20, 32, 44, 59, 61, 71, 75, 86, 88];

function countSubarrays(numbers, k) {
  let result = 0;

  numbers.forEach((element) => {
    if (element <= k) {
      result++;
    }
  });

  //   [1,2,3]

  for (let index = 0; index < numbers.length; index++) {
    const first = numbers[index];
    const second = numbers[index + 1];

    if (first * second <= k) {
      result++;
    }
  }

  let sum = numbers[0]; 

  for (let index = 0; index < numbers.length; index++) {
    if (sum < k) {
      result++;
    }

    sum = sum * numbers[index];
    if (sum < k) {
      result++;
    }
  }

  return result;
}

console.log(countSubarrays(teste, 567601));
