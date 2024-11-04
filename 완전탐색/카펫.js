// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 노랑타일의 테두리 갈색의 숫자를 알기위해선
// 노랑타일의 주변 숫자 + 4 (모서리) = (노랑 가로 * 2 + 노랑 세로 * 2) + 4
function solution(brown, yellow) {
  let answer = [];

  let yellowWidth = 0;
  let yellowHeight = 0;

  // 노란색 타일의 약수 찾기
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      yellowWidth = yellow / i;
      yellowHeight = i;

      // 갈색 타일 수가 일치하는지 확인
      if (countBrown(yellowWidth, yellowHeight) === brown) {
        answer = [yellowWidth + 2, yellowHeight + 2];
        break;
      }
    }
  }

  return answer;
}

function countBrown(width, height) {
  return width * 2 + height * 2 + 4;
}
