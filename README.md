# 🏁 [Circuit](https://elicesw2-project2.github.io/circuit)
### 엘리스 수강생들을 위한 익명 커뮤니티

<br>

## :white_check_mark: 서비스 소개
####  👩‍👩‍👧‍👦 수강생들의 정보 공유 및 교류를 위한 커뮤니티 서비스
  - 익명으로 글을 작성하거나 댓글을 등록할 수 있습니다.
#### 🙋 마이페이지
  - 마이페이지에서 사용자의 정보를 수정하고 작성한 게시글을 관리할 수 있습니다.

<br>

## 🛠️ 기술 스택

<p>
    <img src="https://img.shields.io/badge/React-v18.0.0-blue?logo=Reac"/>
    <img src="https://img.shields.io/badge/node.js-v16.13.0-green?logo=Node.js"/>
    <img src="https://img.shields.io/badge/eslint-%5E8.14.0-yellow?logo=eslint"/>
    <img src="https://img.shields.io/badge/mysql-v2.18.1-%234479A1?logo=Mysql">
  <img src="https://img.shields.io/badge/Nodemon-v2.0.15-76D04B?logo=Nodemon"/>
  <img src="https://img.shields.io/badge/Express-v2.0.15-000000?logo=Express"/>
</p>

<br>

## 📌 [기술 및 스크럼 - WIKI](https://github.com/elicesw2-project2/circuit/wiki)

<br>

## 🚗 주요 기능
|로그인|메인페이지|마이페이지|
|-----|------|------|
|<img width="956" alt="로그인" src="https://user-images.githubusercontent.com/72402014/169438358-629ed697-a4bf-4a21-bdd8-c0094d264fba.png">|<img width="955" alt="메인" src="https://user-images.githubusercontent.com/72402014/169438392-cb4121c7-7f1b-445d-a59e-fc9ad883df76.png">|<img width="951" alt="마이" src="https://user-images.githubusercontent.com/72402014/169438415-fe3c1a43-731d-42ef-a2fd-da22dc181473.png">|
<br>

## ⚙️ 프로젝트 구동 방법
우선 Repository clone 한다.

### 백엔드 환경변수 설정
back 폴더 아래 .env 파일 생성 후 내용 작성하기
- .env 예시

```javascript
  DB_HOST = [데이터베이스 host 이름]
  DB_PORT = [데이터베이스 포트번호]
  DB_USER = [데이터베이스에 연결할 계정 이름]
  DB_PASSWORD = [데이터베이스 계정 비밀번호]
  DB_DB = [데이터베이스 이름]

  AUTH_jwtSecretKey = 
  AUTH_jwtExpiresInDays = 
  AUTH_bcryptSaltRounds = 
```

### 백엔드 실행
back 폴더로 이동 후 실행
```
  cd back
  npm install
  npm start
```

### 프론트 실행
front 폴더로 이동 후 실행
```
  cd front
  npm install
  npm start #npm run start
```
