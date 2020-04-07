const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path')

app.use(routes);
app.use("/images", express.static(path.resolve(__dirname, "images")));
app.listen(process.env.PORT || 8080, () => {
	console.log('check');

});