// https://syoung-journey.tistory.com/30
import express from 'express';

const router = express.Router();
const users = [
	{ user_idx: 1, id: 'elice1', pw: '1111', profilepic: 'aaa', nickname: 'aaa' },
	{ user_idx: 2, id: 'elice2', pw: '2222', profilepic: 'yyy', nickname: 'bbb' },
	{ user_idx: 3, id: 'elice3', pw: '3333', profilepic: 'xxx', nickname: 'ccc' },
];

// users = {
//     user_idx : 1,
//     id : "elice",
//     pw : "1111",
//     profilepic : "zzz",
//     nickname : "zzz"
// }

router.use(express.json()); // JSON parse 미들웨어 추가

// REST API 메소드
// 첫번째 인자: End Point
// 두번째 인자: 콜백함수 - 이 함수는 두개의 인자를 받는다.
// '/mypage'에 get 요청이 오면 아래의 콜백함수가 실행이되는 것이다.
router.get('/', (req, res) => {
	// 첫번째 인자 req: 클라이언트에서 요청이올 때, ReqBody, ReqHeader, url 등등 그런 정보들이 모두 들어있다.
	// 두번째 인자 res: 클라이언트에 응답할 때 필요한 모든 정보들이 들어있다. 지금부터 저희가 작성할 내용 외에도 기본적으로 들어가야되는 네트워크 정보라던지 그런 것들이 모두 여기 들어있다.
	res.send({ users }); // 클라이언트에 어떤 정보를 리턴해주고 싶은지를 적는 부분이다.
});

// id로 조회
router.get('/:id', (req, res) => {
	const user = users.find((c) => c.id === String(req.params.id));
	if (!user) res.status(404).send('The user with the given ID was not found');
	res.send(user);
});

// post
router.post('/', (req, res) => {
	// users.push({ name: 'eunji', age: 30 })
	users.push({ id: req.body.id, nickname: req.body.nickname, profilepic: req.body.profilepic });

	return res.send({ success: true }); // return 키워드를 붙여주는 것이 좋다.
	// 이렇게 코드 작성할리는 없겠지만
	// res.send() 코드를 중복해서 작성해놨을 경우 모든 res.send()가 호출된다.
	// 그렇게되는 것을 방지하기 위해서 return 키워드를 작성한다.
});

// put
router.put('/:id', (req, res) => {
	const user = users.find((c) => c.id === String(req.params.id));
	if (!user) return res.status(404).send('The user with the given ID was not found');

	user.nickname = req.body.nickname;
	user.profilepic = req.body.profilepic;
	res.send(user);
});

// delete
router.delete('/:id', (req, res) => {
	const user = users.find((c) => c.id === String(req.params.id));
	if (!user) return res.status(404).send('The user with the given ID was not found');

	const index = users.indexOf(user);
	users.splice(index, 1);

	res.send(user);
});

export default router;
