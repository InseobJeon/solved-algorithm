# Implementation

---

# 소개

구현이란, 머릿 속의 알고리즘을 코드로 바꾸는 과정 그 자체를 의미한다. 어떻게 보면 모든 코딩테스트의 유형은 결국 구현이고, 그렇기에 구현 "유형" 이란 건 어감이 이상할 수 있다. 그러나, 취업을 목표로 하는 코딩테스트에서는 구현이 중심이 되는 문제가 주로 출제되기 때문에 다른 알고리즘을 다루기 전 먼저 다뤄야 할 필요가 있다. 

# 특징

implementation 유형의 난이도를 결정짓는 요소들은 크게 

- 알고리즘은 간단하지만, 코드로 옮기려면 꽤 길고 복잡해 지는 경우
- "특정 소수점자리 까지 출력하기", "문자열을 한 문자 단위로 끊어서 배열(리스트) 에 넣기" 등의 추가조건
- 대표적인 유형으로는 **순열조합** 이 있다.
- 요구사항대로 구현하는 게 구현 알고리즘의 핵심인 만큼, 모든 경우를 다 실행하는 **완전탐색**, 문제에서 제시한 알고리즘을 한 단계씩 차례대로 수행하는 **시뮬레이션**도 구현 알고리즘의 하위 범주라고 할 수 있다.

# 유의사항

## 제약 조건에 주목하라

구현 문제는 대체적으로 엄청나게 많은 입력을 주고, 그걸 제한 안에 다 처리해야 하는 제약 조건을 준다. 그러나, 이는  드문 경우이고, python 이나 JS 같은 언어들은 동적으로 자료형의 사이즈를 변화시킬 수 있기 때문에 **메모리 사용량 제한보다 적은 크기의 메모리를 사용하여 문제를 해결해야 한다** 정도를 염두해두면 된다.

## 내가 가용할 수 있는 자원을 고려하여 생각한다

파이썬 기준 1초당 2,000만번의 연산이 가능하다. 그런 의미에서 1초라는 제한시간은 2,000만번 안으로 연산을 하여 그 문제를 해결하라는 의미이다. 

예를 들어, 입력받는 자료의 갯수가 100만개인 문제가 있고, 시간제한은 1초라고 가정해보자. 이 경우 Big O Notation 으로 계산을 한다면, $`O(n)`$ 은 100만, $`O(n^2)`$ 은 1억이니, 2,000만번 안으로 연산을 끝내려면 그 중간의 Time Complexity 인 $`O(N*logN)`$ 을 사용해야 한다는 이야기이다. 

## 문제의 설명이 길어도 절대 겁 먹을 필요 없다

구현 문제는 조건들이 많고, 문제 자체의 설명이 꽤나 긴 편이다. 그러나, 고차원적인 사고력은 요구하지 않는 편으로 문법에 익숙하고 문제를 잘 이해했다면 그렇게 어렵지 않기 떄문에 절대로 겁 먹지 말자. 

# 예시

## 상하좌우

[https://imgur.com/02uv49H](https://imgur.com/02uv49H)

[https://imgur.com/DPq6ebN](https://imgur.com/DPq6ebN)

# 알고리즘 추가 설명

기초적인 문제로, 말 그대로 시발점에서 입력받은 방향으로 이동하는 과정 자체를 따라서 그리면 되는 구현-시뮬레이션 유형이다. 

```jsx
const solution = (size, direction) => {

  let currentLocation = [1, 1];

  for (eachDirection of direction) {
    if (eachDirection === 'U') {
      if (currentLocation[0] - 1 < 1) {
        continue;
      }
      currentLocation[0] = currentLocation[0] - 1;
    }
    if (eachDirection === 'D') {
      if (currentLocation[0] + 1 > size) {
        continue;
      }
      currentLocation[0] = currentLocation[0] + 1;
    }
    if (eachDirection === 'L') {
      if (currentLocation[1] - 1 < 1) {
        continue;
      }
      currentLocation[1] = currentLocation[1] - 1;
    }
    if (eachDirection === 'R') {
      if (currentLocation[1] + 1 > size) {
        continue;
      }
      currentLocation[1] = currentLocation[1] + 1;
    }
  }

  return currentLocation;
};
```

# 팁

첫 째로는 문제의 조건을 오류 없이 정확하게 독해해 내는 것이다. 왜냐하면 문제를 완벽하게 독해해야 시뮬레이션이라면 시키는 대로 잘 구현하기 위해서이고, 완전 탐색이라면 조건의 누락, 그리고 순회 영역의 누락 없이 모든 영역을 탐색할 수 있기 때문이다. 

둘째로는 내가 가용할 수 있는 자원이 얼마나 되는지 정량적으로 측정하는 것이다. 대략 초당 2,000만번 정도로 잡고 연산가능 최대 횟수가 몇 번이지를 정확히 파악한다. 그 이후로는 "내가 어느 수준의 시간복잡도를 가진 알고리즘까지는 사용해도 되겠구나" 라는 윤곽을 잡고나서 알고리즘을 계산한다. 거기서 시간복잡도를 더 줄여야 한다면 그떄서야 줄이면 되는 것이다. "구현" 이니만큼 "무조건", "가장 효율적" 일 필요는 없다.

# 유념할 사항들

코딩테스트, 알고리즘 대회에서 가장 먼저 나오는 유형이다. 난이도가 그렇게 어렵지 않지만, 동시에 논리적 사고력과 기본적인 구현 능력을 확인할 수 있기 때문에 기본 난이도로 적합하기 때문이다. 따라서, "구현과 그디리는 맞추고 간다" 라는 마인드로 공부를 하자.

# 접근법

- 가용할 수 있는 자원 확인
- 알고리즘의 초안 작성 및 시간복잡도가 가용할  수 있는 자원 내에서 감당 가능한 수준인지를 확인