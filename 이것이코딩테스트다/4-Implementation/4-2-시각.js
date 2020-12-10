/*
문제 파악: 구현 - 완전탐색 
이유: "모든" 경우의 수를 다 순회해야 하기 때문에
key point: 제한 시간은 2초 
I: 숫자(이하 'n')
O: 00시 00분 00초 부터 n시 59분 59초까지 n이 포함된 갯수
*/ 

const solution = (n) => {
  if (n >= 10) {
    return ((n+1) * (60**2)) - (n * (59**2));
  }
  if (6 <= n && n <= 9) {
    return ((n+1) * (60**2)) - (n * ((60-n)**2));
  }
  if (1 <= n && n <= 5) {
    return ((n+1) * (60**2)) - (n * (45**2));
  }
  if (n === 0) {
    return ((n+1) * (60**2)) - 3600;
  }
};

console.log(solution(5));
