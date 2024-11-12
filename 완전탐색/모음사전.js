//https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {

    let result = [];

    answer = DFS(0, []);

    function DFS(cnt, current) {
        let value = ["A", "E", "I", "O", "U"];

        result.push(current.join(""));

        if (cnt == 5)
            return;

        for (let i = 0; i < 5; i++) {
            DFS(cnt + 1, [...current, value[i]]);
        }
    }

    return result.indexOf(word);
}

