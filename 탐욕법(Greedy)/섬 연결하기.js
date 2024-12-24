// https://school.programmers.co.kr/learn/courses/30/lessons/42861
// 최소신장트리 - 크루스칼

function getParent(parentArr, point) {
    // 특정 섬의 parent를 반환함
    if (parentArr[point] === point) return point;
    return (parentArr[point] = getParent(parentArr, parentArr[point]));
}

function setParent(parentArr, a, b) {
    // 해당 섬의 parent를 설정함
    const parentA = getParent(parentArr, a);
    const parentB = getParent(parentArr, b);
    if (parentA < parentB) return (parentArr[parentB] = parentA);
    return (parentArr[parentA] = parentB);
}

function solution(n, costs) {
    let answer = 0;

    // 해당 섬들의 parent를 저장하는 배열을 생성함
    let parentArr = Array(n)
        .fill()
        .map((obj, index) => index);

    // 모든 섬의 다리 건설 비용의 오름차순으로 정렬
    costs.sort((a, b) => {
        if (a[2] === b[2]) return a[0] - b[0];
        return a[2] - b[2];
    });

    // 해당 경로를 Union, Find 알고리즘을 활용하여 경로를 찾음
    for (const cost of costs) {
        if (getParent(parentArr, cost[0]) !== getParent(parentArr, cost[1])) {
            answer += cost[2];
            setParent(parentArr, cost[0], cost[1]);
        }
    }

    return answer;
}