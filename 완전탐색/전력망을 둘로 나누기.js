// https://school.programmers.co.kr/learn/courses/30/lessons/86971
// discord
// 끊은 후 다시비교 , 
// 인접행열로 푸는것이 개인적으로 직관적인 것 같은데 여기선 리스트 ? 


function solution(n, wires) {
  let answer = n; // 최소 차이를 n으로 초기화

  // 그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);

  // wires 배열을 통해 그래프 생성
  for (const [v1, v2] of wires) {
      graph[v1].push(v2); // 양방향 연결이니까 
      graph[v2].push(v1);
  }

  function countNodes(node, visited) {
      visited[node] = true;
      let count = 1; // 현재 노드 포함
      
      for (const neighbor of graph[node]) {
          if (!visited[neighbor]) {
              count += countNodes(neighbor, visited); // 재귀 호출로 송전탑 개수 누적
          }
      }
      
      return count;
  }

  // 전선을 하나씩 끊어서 두 네트워크로 분할
  for (const [v1, v2] of wires) {
      // 전선 끊기
      graph[v1] = graph[v1].filter((node) => node !== v2);
      graph[v2] = graph[v2].filter((node) => node !== v1);

      // 방문 배열 초기화
      const visited = Array(n + 1).fill(false);

      // 한쪽 네트워크의 송전탑 개수 계산
      const count1 = countNodes(v1, visited);
      const count2 = n - count1; // 다른 네트워크의 송전탑 개수

      // 두 네트워크의 송전탑 개수 차이의 절대값
      const diff = Math.abs(count1 - count2);
      answer = Math.min(answer, diff); // 최소 차이 갱신

      // 전선 복구
      graph[v1].push(v2);
      graph[v2].push(v1);
  }


  return answer;
}
