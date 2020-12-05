# 201840110 김소진
## movie_app_2020
React JS Fundamentals Course 2020

## 12월 4일 

- 기말평가

## 12월 1일

1. 애플리케이션 만들기 (props와 state를 사용)
2. reactjs.org에서 state를 사용하여 입력한 텍스트, 할 일 목록 관리하기
3. JSX 사용
4. key 학습


## 11월 27일 
1. cdn 이용하기
2. 시간 움직이는 타이머 예제 실습
3. this.props 이용하기


## 11월 20일 
1. navigation 컴포넌트를 이용하여 영화 데이터 추가
2. movie 컴포넌트에 link 추가
3. detail 컴포넌트 추가
4. route 컴포넌트 추가
5. detail 컴포넌트 함수형에서 클래스형 컴포넌트로 변경하기
6. push() 함수 사용하기

## 11월 13일 
1. 시놉시스 180자로 제한하기
2. 영화 앱 제목 살펴보고 바꾸기
index.html 에서 title 수정
3. react-router-dom 설치 => npm install react-router-dom
4. components 폴더에 movie 컴포넌트 옮기고, routes 폴더에 라우터가 보여줄 화면 만들기 => routes 폴더에 Home.js, About.js 파일 생성
5. App.js 의 코드를 Home.js로 복사 후 class home과 export default home 부분을 모두 바꿔주고 import
6. 라우터는 사용자가 입력한 url를 통해 컴포넌트를 불러주는 역할을 함.
예를들어 사용자가 localhost:3000/home 을 입력하면 home컴포넌트를~/about 이라고 입력하면 about컴포넌트를 불러주게 된다.
localhost:3000/#/about

## 11월 6일
1. app 컴포넌트에 html 추가하기
2. 영화 포스터 이미지를 추가한다. img tag를 그 아래에 추가해서
src 속성에는 poster props를 alt 속성에는 title props를 전달한다.
3. style 속성으로 title 스타일링 하기
6. css 파일 생성 (App.css , Movie.css)
7. App,Movie 컴포넌트에 CSS 파일 import 하기.

## 10월 30일

1. consoloe.log() 함수로 영화 데이터를 출력
console.log(movies);
2. movie state에 영화 데이터 저장하기.
3. 앱을 실행하면 여전히 Loading만 출력된다.
we are ready를 출력하려면 isLoading state에 true를 false로 변경
결과 = loading 이 화면에 나타났다가 we are ready로 변경되는 것을 볼 수 있음
4. yts.lt/api#list_movies 에 접속 후 Endpoint parameters에 sort_by라는 parameter를 사용해봄.
5. movies 컴포넌트에서 props를 추가하여 출력

## 10월 23일
- 중간평가

## 10월 16일 

1. 누르면 숫자 증감하는 버튼 만들기
2. constructor() 함수 알아보기. 
3. componentDidMount() 함수 알아보기. 
4. componentWillUnmount() 함수 알아보기
5. 영화 데이터 로딩 상태 표시해 주기.

## 10월 7일

1. prop-type 설치하기
2. isRequired 살펴보기
3. State 알아보기
4. render() 함수 사용해보기

## 9월 25일
1. image 삽입하기
2. key props 추가하기

## 9월 18일
1. 컴포넌트가 무엇인지 알아보고, JSX를 학습.
2. JSX는 단지 HTML과 자바스크립트를 조합한 문법이다.
3. 컴퍼넌트 이름의 첫자는 반드시 대문자로 해야한다.
4. 컴퍼넌트에 데이터를 전달 할 때는 props를 사용한다.
6. 리액트는 다수의 컴포넌트로 이루어지거나, 최종적으로는 하나의 컴포넌트만 사용한다.

## 9월 11일
1. Dothome에 indexfile 수정하기
2. readme.md 수정 후 github에 push하기