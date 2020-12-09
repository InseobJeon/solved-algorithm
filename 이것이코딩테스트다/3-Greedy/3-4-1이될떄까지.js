/*
[ 문제 ]

어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다.
단, 두 번째 연산은 N이 K로 나누어 떨어질 떄만 선택할 수 있다.

첫번쨰: N에서 1을 뺀다
두번쨰: N을 K로 나눈다 

예를 들어 N이 17, K가 4라고 가정하자. 이때 1번의 과정을 한 번 수행하면 N은 16이 된다. 
이후에 2번의 과정을 두 번 수행하면 N은 1이 된다. 
결과적으로 이 경우 전체 과정을 실행한 횟수는 3이 된다. 
이는 N을 1로 만드는 최소 횟수이다.

N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 
최소 횟수를 구하는 프로그램을 작성하시오.

---

I: N과 K 
O: 수행의 최솟값

---

일단은 greedy 를 의심
Q1. 각 실행에서 가장 최선의 선택을 하여도, 다음 시행에 영향을 미치지 않는가? -> 미치지 않는다 -> greedy 알고리즘이다
Q2. Q1 에 미치지 않는다고 대답한 근거는 무엇인가? -> 이번 시행에 나누기를 하든 빼기를 하든, 
그 시도로 인해 다음 시행에서 특정 경우의 시행이 "원천적으로" (조건에 부합하지 않으니 못한다가 아니라, 그냥 못한다는 식으로) 차단당하지 않기 대문이다
Q3. 각 시행에서 최적의 선택을 할 수 있는 방법을 위해 필요한 아이디어는?

일단은 두 번쨰 연산방식인 k로 나누기 가 첫 번째 연산방식인 1을 빼기보다 크기를 줄일 수 있다는 건 자명하다
그렇기 때문에, N % K === 0 인지를 먼저 검산하고, 만약 이 조건이 참이라면 K로 나누어준다 

그러나 이 조건이 참이 아니라면, N % K === 0 이 될 때까지 -1 을 해 준다

또 다른 생각: 
N/K 가 N-1 보다 큰 경우가 존재할까? 존재한다면, 어떤 경우일까?
N > K(N-1), 즉 N이 K(N-1) 보다 크다면 1을 뺴는 게 K로 나누는 것보다 효율이 좋은 상황이된다 

거꾸로 말해서, N < K(N-1) 인 경우는 K로 나누는게 더 효율이 좋다

---

*/

// 이렇게 1씩 빼주는 것도 좋지만, 숫자가 커서 연산의 횟수가 많아질때를 대비해서 한 번에 빼는 것도 좋다
const tillOne = (n, k) => {
    let counter = 0;
    while (n !== 1) {
        if (n%k === 0) {
            counter ++;
            n = n/k;
        }
        counter ++;
        n = n-1;
    }
    return counter;
};

// 그래서 나눠떨어질 때까지 1씩 한 번에 빼는 것도 만들어봤다
const tillOneUpdate = (n, k) => {
    let counter = 0;
    while (n !== 1) {
        if (n%k === 0) {
            counter ++;
            n = n/k;
            continue;
        }
        if (n - (n%k) > 0) {
            counter = counter + (n%k);
            n = n - (n%k);
            continue;
        } 
        counter = counter + 1;
        n = n-1;
    }
    return counter;
};

console.log(tillOne(25, 3));
console.log(tillOneUpdate(25, 3));