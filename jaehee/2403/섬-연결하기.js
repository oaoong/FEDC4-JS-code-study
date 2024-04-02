function solution(n, costs) {
  let answer = 0;
  if (n === 1) return 0;

  const maps = new Map();
  const check = Array.from({ length: n }, () => new Array(n).fill(false));

  for (let cost of costs) {
    const [from, to, pay] = cost;
    maps.has(from)
      ? maps.set(from, [...maps.get(from), [to, pay]])
      : maps.set(from, [[to, pay]]);
    maps.has(to)
      ? maps.set(to, [...maps.get(to), [from, pay]])
      : maps.set(to, [[from, pay]]);
  }

  let maxVal = -Infinity;

  for (let i = 0; i < n; i++) {
    let minVal = Infinity;
    let minNode = -1;
    const nodes = maps.get(i) ?? [];
    for (let node of nodes) {
      const [to, pay] = node;
      if (!check[i][to] && minVal > pay) {
        minVal = pay;
        minNode = to;
      }
    }
    check[i][minNode] = true;
    check[minNode][i] = true;
    if (maxVal < minVal) maxVal = minVal;
    answer += minVal;
  }

  return answer - maxVal;
}
/*
1. 알고리즘 or 자료구조 선택 이유
크루스칼

2. 시간 복잡도 or 결과

3. 기타 의견 
최소 비용 신장 트리 -> 크루스칼 -> 그리디

4. 참고 링크
  
*/
