//https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {

    // 포인트는 제한시간 내 입국심사를 받는 인원수가 n명이 되게끔 설정하는 것임

    times.sort((a, b) => a - b); // 오름차순으로 심사가 걸리는 시간 순으로 정렬
    let left = 0;
    let right = n * times[times.length - 1]; // 심사가 가장 오래걸리는 경우, 시간 범위를 크게 잡음
    let answer = right; // 최대값
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        times.forEach(value => {
            count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
            if (count >= n) { /// 처리 가능 횟수가 심사 인원보다 많다면
                answer = Math.min(mid, answer); // 최솟값
                return;
            };
        });

        // count = times.reduce((preValue, curValue) => {
        //     return preValue + Math.floor(cur / curValue);
        //   }, 0);

        if (count >= n) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return answer;
}