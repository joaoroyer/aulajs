const Express = require('express');

const app = Express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/teste', (req, res) => {
    res.send('Teste de rota')
});

app.listen(port, () => {
    // console.log('Api está ativa na porta:' + port);
    console.log(`Api está ativa na porta:  ${port}`); // string template

});