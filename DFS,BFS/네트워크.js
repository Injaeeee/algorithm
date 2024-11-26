//https://school.programmers.co.kr/learn/courses/30/lessons/43162


function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n.length).fill(false);

    function DFS(node) {
        visited[node] = true;
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) { // 노드가 연결되어있고 , 방문하지 않았다면 탐색
                DFS(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            DFS(i);
            answer++;
        }
    }

    return answer;
}