// https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
    if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가

    const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]
    const visited = new Array(words.length).fill(false); // 방문 여부를 Boolean 배열로 관리

    while (queue.length > 0) {
        const [current, steps] = queue.shift();

        // target 단어에 도달하면 변환 횟수 반환
        if (current === target) return steps;

        // words 배열에서 현재 단어와 한 글자만 다른 단어를 탐색
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && checkDiff(current, words[i])) {
                visited[i] = true; // 방문 처리
                queue.push([words[i], steps + 1]);
            }
        }
    }

    return 0; // 변환할 수 없는 경우
}

// 두 단어의 다른 문자 개수가 1개인지 확인
function checkDiff(a, b) {
    let cnt = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] != b[i]) {
            cnt++;
        }
    }
    if (cnt == 1) {
        return true;
    }
    else {
        return false;
    }
}