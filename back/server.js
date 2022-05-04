// const express = import('express');
// const bodyParser = import('body-parser');
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({ message: 'Hello World!' });
});

// 포트넘버 설정
app.listen(3001, () => {
	console.log('Server is running on port 3001.');
});
