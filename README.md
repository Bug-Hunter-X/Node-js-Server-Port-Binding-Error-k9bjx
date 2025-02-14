# Node.js Server Port Binding Error

This repository demonstrates a common error in Node.js server development: failure to handle port binding issues. The initial `server.js` demonstrates a server without proper error handling for port binding. The solution, `serverSolution.js`, implements robust error handling.

## Bug

The `server.js` file creates a simple HTTP server. However, it lacks error handling for the `server.listen()` method. If the specified port is already in use or inaccessible, the server will crash without providing informative error messages.

## Solution

The `serverSolution.js` file addresses this by adding an `error` event listener to the server. This listener captures port binding errors and logs a descriptive message, allowing for more graceful error handling and easier debugging.