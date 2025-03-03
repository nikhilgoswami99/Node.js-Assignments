const express = require('express');
const app = express();

// Logging Middleware
app.use((req, res, next) => {
    const startTime = Date.now();  // Capture the start time
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Request received`);

    res.on('finish', () => {
        const duration = Date.now() - startTime;  // Calculate time taken
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Completed in ${duration}ms`);
    });

    next(); // Pass control to the next middleware/route handler
});

// Sample Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
