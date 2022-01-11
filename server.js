const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('HELLO AJAX');
});

app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....");
})