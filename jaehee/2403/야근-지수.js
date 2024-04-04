function solution(n, works) {
  let answer = 0;

  const allSum = works.reduce((acc, cur) => acc + cur);
  const newSum = allSum - n;
  if (newSum <= 0) return 0;

  const unit = Math.floor(newSum / works.length);
  const spares = newSum % works.length;

  answer += unit ** 2 * (works.length - spares);
  answer += (unit + 1) ** 2 * spares;

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
틀림

3. 기타 의견 
기본 세 개는 통과하는데, 테케에서 실패가 뜸...
BigInt 적용해봐도 안되고 풀이 뭐가 틀린건지 모르겠네... 맞는 방법이라고 생각하는데

4. 참고 링크

*/
