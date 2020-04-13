const express = require('express')
const app = express()
const port = 3000


app.post('/execute', function(req, res) {
	let myCommandLineArguments = process.argv.slice(2).toString();
	const { exec } = require('child_process');
	exec(myCommandLineArguments, (err, stdout, stderr) => {
  	if (err) {
    	console.error(err)
  	} else {
   		console.log(`stdout: ${stdout}`);
   		console.log(`stderr: ${stderr}`);
			res.send(`File path: ${myCommandLineArguments} Output: ${stdout} Error: ${stderr} Status: Success`)
  	}
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
