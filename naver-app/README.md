# Getting Started with Create React App


Install create react app:

```shell
$ npx create-react-app naver-app
$ npm start
```

Install packages:

```shell
$ npm i react-router-dom
$ npm i styled-components
$ npm i axios
```

Build:

```shell
$ npm run build
```

## Directory STructure

Atomic Design

- atoms: styled-component
- molecules: react-component(2~3), dropdown, item
- organisms: react-component(3+), modal, carousel, list
- templates
- pages

https://brunch.co.kr/@ultra0034/63


## 네이버 오픈 API 등록

Application > 애플리케이션 등록

- 애플리케이션 이름: 영화검색사이트
- 사용 API: 검색
- 비로그인 오픈 API: WEB 설정
- http://127.0.0.1:3000

Documents > 서비스 API > 검색 > 영화

## 프록시 설정 추가

package.json

```json
{
    "proxy": "https://openapi.naver.com"
}
```

Sample.jsx

```javascript
// axios.get("https://openapi.naver.com/v1/search/movie.json");
axios.get("v1/search/movie.json");
```
