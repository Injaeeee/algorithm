function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1) 좌표를 2배로 늘려 세부적인 경계 표현
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    let doubledRec = rectangle.map(rec => rec.map(point => point * 2));
    
    // 2) 방향 벡터 정의 (상, 하, 좌, 우)
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];
    
    // 3) BFS 탐색을 위한 초기 설정
    const start = [characterX, characterY, 0]; // 초기 좌표와 이동 횟수
    let queue = [start];
    
    // 4) 이동 가능 여부를 저장할 2차원 배열 초기화
    let range = Array.from({ length: 101 }, () => Array(101).fill(0));

    // 5) 직사각형의 테두리(1)와 내부(2) 표시
    doubledRec.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) { // x1 ~ x2 까지 x축 방향 순회
            for (let j = y1; j <= y2; j++) {
                if (i === x1 || i === x2 || j === y1 || j === y2) {
                    if (range[i][j] === 0) range[i][j] = 1; // 테두리
                } else {
                    range[i][j] = 2; // 내부
                }
            }
        }
    });

    // 6) 캐릭터의 시작 위치는 방문했으므로 0으로 설정
    range[characterX][characterY] = 0;
    
    // 7) BFS 탐색 시작
    while (queue.length > 0) {
        // 큐에서 현재 좌표와 이동 횟수를 꺼냄
        let [x, y, cnt] = queue.shift();
        
        // 도착 위치에 도달하면 이동 횟수를 반환 (2배 했으므로 다시 나눔)
        if (x === itemX && y === itemY) return cnt / 2;

        // 4방향으로 탐색
        for (let [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;

            // 이동 가능한 테두리(1)인 경우에만 탐색
            if (range[nx][ny] === 1) {
                queue.push([nx, ny, cnt + 1]); // 새로운 좌표와 이동 횟수 추가
                range[nx][ny] = 0; // 방문 처리
            }
        }
    }
    
    return 0;
}
