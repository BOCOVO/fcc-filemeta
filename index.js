const express = require('express');
const cors = require('cors');
require('dotenv').config()

const fileAnalyseRoutes = require("./src/routes/fileAnalyseRoute")

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.use("/api/fileanalyse",fileAnalyseRoutes)


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
