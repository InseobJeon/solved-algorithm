# 프로그래머스 레벨 1 All Clear 후기

# 개요

[프로그래머스 코딩테스트 연습 의 Javascript 로 풀 수 있는 레벨 1 문제 43개를 다 풀었다.](https://github.com/InseobJeon/solved-algorithm/tree/master/programmers-level1) 푸는데 걸리는 기간은 약 일주일 정도. 이제 레벨 2를 시작하기 전에, 일주일동안 문제들을 풀고 나서 느낀 점을 적어보려고 한다. 

# 알고리즘 실력이란

내가 이 말을 하는 것도 웃기지만, 알고리즘 실력이란 결국 **언어의 능숙도, 알고리즘의 기본과 유형, 그리고 사고력**의 복합적인 결과물이 아닌가 생각한다. **** 

## 첫째, 언어의 능숙도

사용하는 언어의 기본적인 이해도를 의미한다. 

구체적으로는 그 언어만의 규칙이나 메서드를 얼마나 잘 알고 적절하게 활용할 수 있는지이고, 내가 현재 사용중인 언어인 자바스크립트 기준으로는 변수를 선언할 때의 `let` 과 `const` 의 차이와 배열 메서드(`map`, `filter`, `reduce` 등)가 예시가 될 수 있겠다.

특히 가장 많이 느낀 점은 `map`, `forEach`, `for...of`, `for...in` 의 차이점을 알고 적절하게 사용해야 한다는 점이다. 같이 공부하는 분께서 피드백을 주신 내용은 아무리 시간제한 및 연산횟수 제한이 없더라도 시간복잡도를 고려하라는 점이었다. 

예를 들면 `map` 이나 `forEach` 는 배열의 모든 구성요소를 다 순회하며 `continue` 나 `break` 를 통하여 중간에 반복문을 종료할 수 없다. `map` 은 각 배열의 구성 요소에 특정한 연산을 거쳐 값을 return 해 새로운 배열을 만드는 메서드이고, `forEach` 는 각 구성요소를 그저 순회할 뿐 return value 가 존재하지 않는다. (정확히 말하자면, `undefined` 를 return 한다) 그래서 `Greedy` 같이 최적 조건을 만족하면 바로 연산을 종료하고 다른 연산으로 넘어가는 처리를 해 주어야 할 때 이 두 개의 배열 메서드는 적절하지 않다. 그 대신 중간에 연산 종료가 가능한 `for...of` 를 사용하고, 객체의 key 들을 iteration 해야 할 때는 `for...in` 을 사용하면 된다. 이 두 개는 중간에 `continue`, `break` 를 통해 연산을 멈추거나 생략할 수 있기 때문이다. 

## 둘째, 알고리즘의 기본과 유형

우선은 기본에 대해서. 다른 요소도 물론 많겠지만 개인적으로는 알고리즘의 기본이란 시간복잡도를 고려하는 걸 습관화 하는 것이라고 생각한다. 

그리고 내가 각 테스트에서 가용할 수 있는 자원, 혹은 연산 가능한 최대 횟수를 계산하고(프로그래머스는 그런데 그런 게 나오지 않아서 불가능하다만) 그 자원/횟수에 맞추어 최소한의 연산으로 알고리즘을 구현하는 걸 계속 하면서 그 기본이란 걸 좀 더 단단하게 쌓을 수 있는 듯 하다. 그렇게 하면 이 반복문이 굳이 필요한지, 혹은 이 변수 선언이 굳이 필요한지를 계속 의심해 보게 되고 더 나은 방법은 없을지 고민하게 되면서 조금 더 나은 코드를 만들 수 있는 거 같다. 

그 다음으로는 유형. 말 그대로 어떤 종류의 알고리즘을 써서 푸는 문제인지, 즉 문제 유형을 의미한다. 

나는 알고리즘의 유형을 하나도 몰랐고, 그래서 모 스타트업의 코딩 테스트에서는 문제를 풀어낸 갯수도 갯수지만 부분점수를 맞았더라도 출제자의 의도와 맞지 않게 문제를 풀어버렸다. 탐욕법으로 풀어야 하는  문제를 완전탐색으로 풀어버렸음에도 불구하고 부분점수를 맞았으니 그래도 됐다는 식으로 일단은 넘어갔고, 나중에서야 내가 문제를 잘못 풀었다는 걸 알게 되었다. 

어떻게 하면 더 나아질 수 있을까 하는 생각에 공부하는 사람들에게 조언도 구하고 스스로 찾아보기도 한 결과 일단은 유형을 공부하는 게 우선이라는 결론을 내렸고, 레벨 1의 문제들은 특정 유형을 알지 못 해도 풀 수 있는 언어의 능숙도를 점검하는 문제들이 대부분이었기 떄문에 레벨 1의 문제풀이와 알고리즘 서적을 통한 유형 공부를 병행하였다. 이제 레벨2 부터는 특정 알고리즘을 모르면 풀 수 없는 문제들이 나오기 때문에 유형 공부의 비중을 더 늘리고 문제 풀이 비중은 줄이려고 한다. 

## 셋째, 사고력과 독해력

사고력은 말 그대로 생각하는 능력이다. 알고리즘 문제를 푼다는 건 가장 적은 자원으로 가장 효율적인 결과를 도출하는 방법을 생각해내는 과정이다. 

그래서 무작정 코드부터 치는 건 의미가 없다고 생각한다. 코드는 그냥 내 생각을 컴퓨터가 이해할 수 있게 옮기는 것 뿐이기에 내가 생각을 잘 정리하고 어떻게 이 문제를 해결해야겠다는 결론을 내리면 (언어의 능숙도가 뒷받침 된다는 가정 하애) 코드를 작성하는 일 자체는 그렇게 어렵지 않은 일이다.

나 또한 어느 순간부터 코드보단 생각정리가 중요하다는 사실을 드디어 깨달았고, 이제는 문제를 보면 태블릿 PC의 노트필기 앱을 띄워놓고 펜으로 이 문제를 풀려면 어떻게 해야하는지 쭉 정리를 하고 있다. 지금은 그 생각하는 걸 습관으로 만들어야 한다고 생각해서, 모든 문제를 그렇게 정리 하고있다. 

독해력도 말 그대로 글을 정확하게 읽어낼 수 있는 능력이다. 특히 구현 유형 중 시뮬레이션이나 완전탐색은 문제를 정확히 읽지 않으면 접근 자체를 제대로 할 수 없다. 

> 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다. 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

1. 다트 게임은 총 3번의 기회로 구성된다.
2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
7. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

[레벨 1의 '다트 게임' 문제](https://programmers.co.kr/learn/courses/30/lessons/17682)이다. 카카오 공채 문제이고, 구현 중 시뮬레이션 유형이라고 볼 수 있다. 이 문제에서 특별한 알고리즘이 필요한 건 아니다. 문제 조건을 잘 읽고 그 조건대로 코드를 구현하여 상황에 따라 기대하는 값을 반환하면 된다. 당연하게도 이 문제 또한 지원자들의 변별을 위해 존재하는 문제이고, 그렇다는 건 특별한 알고리즘이 없어도 되는 만큼 문제의 조건이 생각보다 촘촘하게 짜여져 있다는 점이다. 그렇기 때문에 정확하게 문제를 읽어내지 못 하면 특정한 알고리즘을 응용하여 복잡한 상황을 가정하는 문제까지 가지도 못 하고, 특정한 알고리즘이 필요 없는 이 문제조차도 풀 수 없다. 그래서 독해력이 중요하다는 걸 정말 많이 느꼈다.

## 굳이 하나를 더 적자면

"수학적인" 사고방식이라고 생각한다. 굳이 수학적인 이라고 적은 이유는, 수많은 똑똑한 사람들이 수학적으로 접근하여 가장 좋은 해결책을 이미 내 놓은 경우가 많기 떄문이다. 지금은 React 등의 라이브러리조차도 제대로 사용하지 못 하는 상황이라 일은 더 벌리지 못 하겠지만, 나중에 취직을 하게 되면 이산수학 공부도 따로, 제대로, 반드시 해 보려고 한다. 

느낀점은 대략 이렇다. 혹시라도 이전의 나처럼 '알고리즘 공부를 해야 하는데 알고리즘 공부라는 건 뭐지? 그러면 알고리즘 공부를 잘 하려면 어떻게 해야하지?'' 조차도 감을 못 잡은 사람들이 이 글을 보고 도움을 받았으면 좋겠다는 마음 절반, 그리고 레벨 2 문제들에 도전하기 전에 내 공부를 잠시 돌아보면서 앞으로의 공부는 어떻게 해야할지에 대해 생각하기 전에 내 생각부터 정리해야 할 거 같다는 마음 절반으로 이 글을 작성하게 되었다.  

앞으로의 나와, 누군가에게 이 글이 도움이 되길 바라면서...