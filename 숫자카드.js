// https://school.programmers.co.kr/learn/courses/30/lessons/135807

function solution(arrayA, arrayB) {

    // 오름차 순 정렬
    arrayA.sort((a, b) => a - b)
    arrayB.sort((a, b) => a - b)

    // 최대 공약수를 찾는 함수, 반복의 시작값은 action 배열의 최솟값부터 1씩 낮아지며 탐색
    function findCommonDivisor(action, target) {
        for (let i = action[0]; i > 0; i--) {
            if (action.every(a => a % i === 0) && target.every(a => a % i !== 0)) return i
            // 배열의 모든 요소가 주어진 조건을 만족하는지 검사하는 메서드
        }
        return 0
    }
    // 철수 카드를 모두 나누고 영희 카드를 나누지 못하는 경우와 그 반대의 조건을 만족하는 경우 중 가장 큰 수
    return Math.max(findCommonDivisor(arrayA, arrayB), findCommonDivisor(arrayB, arrayA));

}


