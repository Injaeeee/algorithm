// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];
  for (i = 0; i < commands.length; i++) {
    A(commands[i]);
  }

  function A(command) {
    let cut = array.slice(command[0]-1, command[1]);
    //array.slice(start, end)는:
    //start는 포함(포함하는 첫 번째 요소의 인덱스).
    //end는 제외(마지막으로 포함하지 않는 요소의 인덱스). 이기에 command[1]은 -1을 해주지 X

    let result = cut.sort((a, b) => a - b);
    answer.push(result[command[2]-1]);
  }

  return answer;
}
