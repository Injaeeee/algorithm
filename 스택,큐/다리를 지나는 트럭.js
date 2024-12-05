// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
  
    // 다리 위에 올라간 트럭 배열
    let bridge = Array.from({ length: bridge_length }, () => 0);
    // 현재 시점 다리에 걸린 하중
    let bridge_sum = 0;
  
  
    console.log(bridge)
    // 1초를 증가시키고, 맨 처음 트럭을 다리에 올린다.
    answer++;
    bridge.shift();
    bridge_sum += truck_weights[0];
    bridge.push(truck_weights.shift());
  
  
    while (bridge_sum > 0) {
      // 1초 증가
      answer++;
  
      // 큐의 맨 앞을 꺼내고,
      bridge_sum -= bridge.shift();
  
      // 만약 현재 시점 다리 하중에 다음 트럭의 무게를 더해도 다리가 버틸 수 있다면?
      if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
        // 다음 트럭을 다리 배열에 넣는다.
        bridge_sum += truck_weights[0];
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  
    return answer;
  }
  
  solution(2, 10, [7, 4, 5, 6]);
  