import app from './server';
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT, "! \uD83D\uDE80"));
});
