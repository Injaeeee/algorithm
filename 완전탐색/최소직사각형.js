// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  var answer = 0;

  var garo = [];
  var sero = [];

  var garoMax = 0;
  var seroMax = 0;

  for (var i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      garo[i] = sizes[i][1];
      sero[i] = sizes[i][0];
    } else {
      garo[i] = sizes[i][0];
      sero[i] = sizes[i][1];
    }
  }

  for (var j = 0; j < garo.length; j++) {
    if (garo[j] > garoMax) garoMax = garo[j];
    if (sero[j] > seroMax) seroMax = sero[j];
  }

  answer = garoMax * seroMax;


  return answer;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

// Math.max , Math.min 사용해보자 for문을 한번만 쓸 수도 있음 
