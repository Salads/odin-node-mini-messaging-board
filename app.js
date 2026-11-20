
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

// Handle Ctrl+C Force Close
process.on('SIGINT', () => {
	console.log('Server Closing Forcibly');
	process.exit(0);
});   