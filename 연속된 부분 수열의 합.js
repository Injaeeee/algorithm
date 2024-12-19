//https://school.programmers.co.kr/learn/courses/30/lessons/178870
// 투포인터 알고리즘

function solution(sequence, k) {
    const answer = [];
    let start = 0;
    let sum = 0;

    for (let end = 0; end < sequence.length; end++) {
        sum += sequence[end];

        while (sum > k) { //왼쪽(start) 포인터를 이동해 구간을 줄이고 합을 감소
            sum -= sequence[start];
            start++;
        }

        if (sum === k) {
            answer.push([start, end]);
        }
    }

    return answer.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0]; // a의 범위 - b의 범위 -> 오름차순 : -1 나올시 그대로 +1 나올시 반전
}

console.log(solution([1, 2, 3, 4, 5], 7)); 
