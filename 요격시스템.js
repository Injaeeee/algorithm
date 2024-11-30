function solution(targets) {
    targets.sort((a, b) => b[0] - a[0]); // x 좌표를 내림차순으로 정렬



    let checkPoint = targets[0][0]; // 제일 마지막 시작점 좌표
    let answer = 1; // 위에서 정의한 체크포인트에서 이미 발사

    for (let i = 1; i < targets.length; i++) {
        const [start, end] = targets[i];
        if (end <= checkPoint) { // 전에 쐇던 포인트보다 지금 쏠 타겟의 끝 지점이 작냐? ( 겹쳤냐, 안 겹쳤냐 ) -> 안 겹쳤다면 쏘기
            checkPoint = start;
            answer++;
        }
    }

    return answer;
}

