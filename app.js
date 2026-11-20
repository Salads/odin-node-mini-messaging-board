
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
	if(error) {
		throw error;
	}
	console.log(`Server Running - Listening on localhost:${PORT}`);
});