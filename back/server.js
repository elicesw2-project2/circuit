const express = import('express');
const bodyParser = import('body-parser');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({ message: 'Hello World!' });
});

// 포트넘버 설정
app.listen(PORT, () => {
	console.log('Server is running on port 3001.');
});
