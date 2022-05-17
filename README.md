# circuit

Elice SW-2 Team Project - Circuit


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
