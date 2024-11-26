
// https://school.programmers.co.kr/learn/courses/30/lessons/42746


function solution(numbers) {
    // 1. 모든 숫자를 문자열로 변환
    const nums = numbers.map(String);

    // 2. 정렬 기준을 정의 (x + y vs y + x)
    nums.sort((a, b) => (b + a) - (a + b));

    // 3. 정렬된 배열을 이어 붙이기
    const result = nums.join('');

    // 4. 결과가 '0'으로 시작하면 '0' 반환
    return result[0] === '0' ? '0' : result;
}