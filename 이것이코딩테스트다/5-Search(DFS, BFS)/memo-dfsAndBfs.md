# DFS / BFS

---

# 소개

Depth-First Search 의 약자로, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘이다. 

## 간단한 용어 정리

![https://dzone.com/storage/temp/13817670-figure-1.png](https://dzone.com/storage/temp/13817670-figure-1.png)

Graph: 위처럼 Node 와 Edge 를 통해 각 Node 간의 관계를 표시한 걸 의미한다. 

Node(노드): 각 그래프의 지점을 이야기한다

Edge(간선, 혹은 그대로 '엣지'): Node 와 Node 를 이어주는 선을 이야기한다

Adjacent: 두 Node 가 Edge 를 통해 연결되어 있는 경우, 두 Node 는 Adjacent(인접) 하다 라고 말 할 수 있다.

## Graph 를 나타내는 방법

![how to describe a graph](./example.png)

이런 식으로 표를 통해 노드와 노드, 그리고 그 노드를 이어주는 간선에 번호를 매겨 표기할 수도 있다.

### 인접 행렬(Adjancency Matrix)

```jsx
const INF = 9999;

const graphExample = [
	[0, 7, 5],
	[7, 0, INF],
	[5, INF, 0],
];
```

이는 이렇게 이차원 배열을 통해서 나타낼 수 있다

### 인접 리스트(Adjancency List)

```jsx
const graphExample = [ [], [], [] ];

// 노드의 번호에 연결된 노드와 간선의 번호를 push 해준다
graphExample[0].push([1, 7]);
graphExample[0].push([2, 5]);

graphExample[1].push([0, 7]);

graphExample[2].push([0, 5]);
```

또한, 이렇게 각 노드마다 그 노드와 연결된 노드와 간선번호를 기록하는 Adjancency List 방법도 있다.

[두 방식의 비교](https://www.notion.so/c06c8fc12679438a9da481153e2f12bc)

# 직접 구현해보기

![example graph](./node.png)

위 노드를 각각의 방법(DFS, BFS)로 탐색해본다. 단, 적은 숫자의 노드부터 먼저 순회한다.

## DFS 를 통해 구현한다면...

```jsx
1, 2, 7, 6, 8, 3, 4, 5 
```

라는 순서대로 그래프를 탐색할 것이다. 

### stack 을 통한 구현 방법

1. stack 으로 사용할 배열 변수를 할당한다
2. 깊이 우선순으로 노드를 탐색하고, 탐색한 노드는 `stack.push()` 메서드를 통해 스택에 넣은 뒤, 방문 처리를 해 준다.
3. 만약 노드 밑의 하위 노드가 더 이상 존재하지 않는다면, `stack.pop()` 을 통해서 하위 노드가 존재하는 노드까지 방문한 역순으로 타고 올라간다.
4. 해당 과정을 방문한 적이 없는 노드가 없을 떄까지 반복한다. 

### 재귀를 통한 구현 방법

이는 자료구조 중 스택을 통해 구현할 수도 있지만, 재귀를 통해 구현할 수도 있다. 연결된 다른 노드 중 방문 이력이 없는 노드가 나온다면, 재귀함수를 통해 재귀적으로 방문하는 방식으로 처리하면 된다. (앞에 말했던 스택은 재귀로 치환될 수 있다는 말을 기억하자)

## DFS 를 통해 구현한다면...

```jsx
1, 2, 3, 8, 7, 4, 5, 6
```

라는 순서대로 그래프를 탐색할 것이다. 

### queue 를 통한 구현 방법

1. queue 로 사용할 배열 변수를 할당한다
2. 너비 우선순으로 노드를 탐색하고, 탐색한 노드는 `queue.push()` 메서드를 통해 큐에 넣은 뒤, 방문 처리를 해 준다. 
3. 만약 같은 depth 에 sibling 노드가 더 이상 존재하지 않는다면, `queue.shift()` 를 통해서 먼저 들어간 노드의 바로 밑 하위 노드를 방문 처리한 뒤 큐에 넣는다.
4. 방문하지 않은 노드가 더 이상 없다면 연산을 종료한다.

# 팁

2차원 배열에서의 탐색 문제를 만날 때, 그래프를 기준으로 풀어보는 것도 나쁘지 않다. 생각해보면 난 이미 너비우선탐색(이차원 배열의 한 column 의 element 들을 모두 탐색하고 난 뒤에서야 다음 column 으로 넘어갔으니)으로 이 문제를 풀고있었다는 사실도 깨달았다.