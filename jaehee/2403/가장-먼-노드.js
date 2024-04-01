function solution(n, edge) {
  let answer = 0;
  const counts = Array.from({ length: n + 1 }, () => Infinity);
  const maps = new Map();

  for (let vertex of edge) {
    const [from, to] = vertex;
    maps.has(from)
      ? maps.set(from, [...maps.get(from), to])
      : maps.set(from, [to]);
    maps.has(to) ? maps.set(to, [...maps.get(to), from]) : maps.set(to, [from]);
  }

  const q = [1];
  counts[0] = 0;
  counts[1] = 0;
  while (q.length) {
    const now = q.shift();

    for (let path of maps.get(now)) {
      if (counts[path] > counts[now] + 1) {
        counts[path] = counts[now] + 1;
        q.push(path);
      }
    }
  }

  const target = Math.max(...counts);
  for (count of counts) {
    if (count === target) answer++;
  }

  return answer;
}
/*
1. 알고리즘 or 자료구조 선택 이유
그래프

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.27ms, 33.5MB)
테스트 2 〉	통과 (0.43ms, 33.5MB)
테스트 3 〉	통과 (0.42ms, 33.7MB)
테스트 4 〉	통과 (0.89ms, 34.1MB)
테스트 5 〉	통과 (2.84ms, 35.3MB)
테스트 6 〉	통과 (11.46ms, 36.8MB)
테스트 7 〉	통과 (69.77ms, 62.3MB)
테스트 8 〉	통과 (135.77ms, 69.9MB)
테스트 9 〉	통과 (301.02ms, 71.3MB)

3. 기타 의견 

4. 참고 링크
  /
*/
