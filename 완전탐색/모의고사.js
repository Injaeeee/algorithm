// https://velog.io/@livelikemovies/%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC

function solution(answers) {
  var answer = [];

  var s1 = [1, 2, 3, 4, 5];
  var s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var score = [0, 0, 0];

  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == s1[i % 5]) score[0]++;
    if (answers[i] == s2[i % 8]) score[1]++;
    if (answers[i] == s3[i % 10]) score[2]++;
  }

  const maxValue = Math.max(...score);

  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (maxValue == score[i]) {
      answer[index] = i + 1;
      index++;
    }
  }

  return answer;
}
