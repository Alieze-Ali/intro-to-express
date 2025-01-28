console.log("hello world!")

const express = require('express'); // Step 1. bring in express

const app = express(); // Step 2. Create an instance of the express server  

// Step 4: Set a route - without this your app won't run
app.get('/', (req, res) => {
    res.send('Hello from the app!');
});

const port = 5000;  // Step 3. Set up a port to listen on & tell app to listen on said port
app.listen(port, () => console.log(`Server is listening on port ${port}`));