# 원티드 **프리온보딩 프론트엔드 인턴십 사전 과제**

Wanted에서 진행하는 프리온보딩 프론트엔드 인턴십 사전 과제

진행 기간: 2023-03-31 ~

---

## 배포 링크

https://wantedtodo.vercel.app/

![데모영상](https://user-images.githubusercontent.com/83197138/230586236-a94174b9-bbca-4b6f-ae1f-10a3c1123f18.gif)


---

## 프로젝트 실행 방법

레파지토리 클론

```bash
$ git clone https://github.com/sangminlee98/wanted-pre-onboarding-frontend.git
```

패키지 설치

```bash
$ npm install
```

애플리케이션 실행

```bash
$ npm start
```

---

## 구현 사항

- 모바일, 태블릿, 데스크톱 사이즈에 맞는 반응형 UI 구현
- Lazy Loading을 적용하여 코드 스플리팅을 통해 초기 렌더링 시간 단축
- 컴포넌트를 분리하여 재사용성을 높히고 memo, useCallback 훅을 사용하여 불필요한 렌더링을 방지해 성능 최적화 구현
- custom hook, 공용 함수들을 분리해 함수의 재사용성을 높힘
- 엔터 키다운 이벤트, 네비게이션 바 등을 적용해 사용자에게 더욱 편리한 UX 경험 제공
- 정적 타입 언어인 Typescript을 사용하여 컴파일 단계에서 에러를 확인
- JWT 토큰을 사용한 로그인, 회원가입 로직 개발
  - 회원가입, 로그인 폼 작성 시 유효성 검사
  - 유효성 검사 여부에 따른 가입 및 로그인 버튼 비활성화
  - 로그인 여부에 따른 페이지 리다이렉팅
- API 스펙에 따른 Todo 애플리케이션 기능 개발
  - 페이지 마운트 시 회원의 Todo List를 렌더링하도록 구현
  - 추가 버튼을 눌러 새로운 Todo를 리스트에 추가
  - Todo 수정 시 input형태의 컴포넌트로 변경하여 수정 및 취소 기능 구현
  - 취소버튼을 누르면 수정한 내용을 초기화하고 수정모드 비활성화
  - 체크박스 체크를 통한 Todo 완료 여부 구현
  - 삭제 버튼을 눌러 Todo 삭제 기능 구현

---

## Tech Stack

<div align =center>

|     Area     |                                                                                                                                                                                                                                                                          Tech Stack                                                                                                                                                                                                                                                                          |
| :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245.svg?&style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?&style=for-the-badge&logo=Sass&logoColor=white"> |

</div>

- React
- Craco
- axios
- react-router-dom
- sass
- react-icons
- typescript

---

## API

[https://github.com/walking-sunset/selection-task#api](https://github.com/walking-sunset/selection-task#api)
