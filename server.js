const app = require('./app');

app.set('port', process.env.PORT || 8081)

const server = app.listen(app.get('port'), () =>{
    console.log(`Listening on port ${server.address().port}`);
});