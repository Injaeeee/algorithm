//https://school.programmers.co.kr/learn/courses/30/lessons/169199
//BFS // 최소경로

function solution(board) {
    var answer = 0;

    board = board.map(items => items.split(''));
    const n = board.length;
    const m = board[0].length;

    let visited = Array.from({ length: n }, () => Array(m).fill(false));

    // 상, 하, 좌, 우
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];

    // 시작점
    let sx, sy;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') {
                sx = i;
                sy = j;
            }
        }
    }

    const queue = [[sx, sy, 0]];
    visited[sx][sy] = true;


    while (queue.length) {
        const [x, y, count] = queue.shift();
        if (board[x][y] === "G") {
            answer = count;
            break;
        }

        for (let i = 0; i < 4; i++) {
            let nx = x, ny = y;

            // 미끄러지기 (한방향으로)
            while (0 <= nx + dx[i] && nx + dx[i] < n && 0 <= ny + dy[i] && ny + dy[i] < m && board[nx + dx[i]][ny + dy[i]] !== "D") {
                nx += dx[i];
                ny += dy[i];
            }

            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }

    }

    return answer === 0 ? -1 : answer;
}