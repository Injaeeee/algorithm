// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  var answer = 0;
  let visited = new Array(dungeons.length).fill(false);

  function DFS(hp, L) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && hp >= dungeons[i][0]) { // 방문하지 않고 현재 피로도 >= 최소피로도 여야지만 입장가능
        visited[i] = true; // 방문 !
        DFS(hp - dungeons[i][1], L + 1);
        visited[i] = false; // 방문 끝 !
      }
    }
    answer = Math.max(answer, L);
  }

  DFS(k, 0);
  return answer;
}
