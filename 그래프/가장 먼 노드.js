// https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {

    let answer = 0;
    // let connection = new Array(n + 1).fill(Array()); // [[2,0],[3,1],[4,2] ...]
    var connection = Array.from({ length: n + 1 }, () => Array());

    for (let e of edge) {
        connection[e[0]].push(e[1]);
        connection[e[1]].push(e[0]);
    }

    let queue = [];
    queue.push(1);
    const visited = new Array(n + 1).fill(0); // 방문 여부 및 거리 저장
    visited[1] = 1; // 시작 노드 방문 처리

    while (queue.length > 0) {
        let node = queue.shift();
        for (let v of connection[node]) {
            if (!visited[v]) {
                visited[v] = visited[node] + 1;
                queue.push(v);
            }
        }

    }

    let max = Math.max(...visited);
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === max) {
            answer++;
        }
    }

    return answer;
}


console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
