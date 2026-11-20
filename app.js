const path = require("node:path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter.js");
app.use("/", indexRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
	if(error) {
		throw error;
	}
	console.log(`Server Running - Listening on localhost:${PORT}`);
});

// Handle Ctrl+C Force Close
process.on('SIGINT', () => {
	console.log('Server Closing Forcibly');
	process.exit(0);
});   