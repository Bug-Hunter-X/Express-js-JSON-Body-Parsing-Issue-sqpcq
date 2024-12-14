# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where JSON request bodies are not parsed correctly when the `Content-Type` header is missing or incorrect.  The bug showcases the problem, and the solution provides a fix.

## Bug

The `bug.js` file contains an Express.js server that expects a JSON request body. However, if a client sends a request without the correct `Content-Type` header, the request body will not be parsed correctly, leading to errors. 

## Solution

The `bugSolution.js` file demonstrates the solution. By adding a middleware function before other routes, you can ensure the body is parsed correctly even with missing headers or incorrect content types.  This also handles potential errors gracefully, preventing server crashes.