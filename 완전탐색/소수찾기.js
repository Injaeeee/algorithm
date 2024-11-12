//  r개를 뽑아서 일렬로 나열하는 것이 순열이고, 순서를 생각하지 않고 r개를 택하는 것이 조합 ([1,2] == [2,1])
// 중복은 [1,1] [2,2] 포함
// https://charles098.tistory.com/186

function solution(numbers) {
  const answer = new Set(); // 중복된 소수를 피하기 위해 Set 사용
  const num = numbers.split(''); // 문자열을 배열로 변환

  for (let i = 1; i <= num.length; i++) {
    permutation([], i, num);
  }

  function permutation(items, k, list) {
    if (items.length === k) {
     const n = Number(items.join(""));
      if (n > 1) { // 1보다 큰 경우만 소수 판별
        decimal(n);
      }
      return;
    }

    for (let i = 0; i < list.length; i++) {
      permutation(
        [...items, list[i]],
        k,
        list.filter((v, j) => j != i)
      );
    }
  }

  function decimal(n) { //약수 구하기
    if (n < 2) return; // 백트래킹

    for (let i = 2; i <= n / 2; i++) {
      // 약수는 절반을 넘을 수 없다 , 제곱근도 가능하기에 Math.sqrt(n)이 효율성이 좋음
      if (n % i == 0) {
        return;
      }
    }
 
    answer.add(n); // Set에 소수를 추가하여 중복을 피함
  }

  return answer.size; // 중복 없는 소수의 개수 반환
}


