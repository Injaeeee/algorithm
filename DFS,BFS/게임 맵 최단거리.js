//https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    // 방향 벡터 (상, 하, 좌, 우)
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    // BFS 함수 정의
    const BFS = () => {
        let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        let needVisit = [[0, 0, 1]]; // 시작점 [x, y, distance]

        visited[0][0] = true; // 시작점 방문 처리

        while (needVisit.length > 0) {
            const [x, y, dist] = needVisit.shift(); // 큐에서 노드 꺼냄

            // 목적지 도착 확인
            if (x === rows - 1 && y === cols - 1) return dist;

            // 4방향 탐색
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                // 맵 범위 체크 및 방문 여부, 벽인지 확인
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true; // 방문 처리
                    needVisit.push([nx, ny, dist + 1]); // 큐에 다음 좌표 추가
                }
            }
        }

        // 목적지 도달 불가
        return -1;
    };

    // BFS 실행
    return BFS();
}
