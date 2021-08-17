const app = require('express')();

app.use(require('morgan')('combined'));

const doLoadNext = async () => {
    const dev = process.env.NODE_ENV !== 'production'
    const next =  require('next')({ dev })
    const handle = next.getRequestHandler()
    await next.prepare();
    app.all('*', (req, res) => {
        return handle(req, res)
    })
}

module.exports = {doLoadNext, app};
