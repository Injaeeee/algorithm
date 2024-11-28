// https://school.programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
    var answer = 0;

    var connection = Array.from({ length: n+1 }, () => Array());

    for (let e of results ){
        connection[e[0]].push(e[1]);
    }

    console.log(connection);

    var visited = new Array(n+1).fill(0); 

    
 
    return answer;
}

console.log(solution(5,[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));