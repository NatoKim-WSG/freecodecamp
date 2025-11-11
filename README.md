# Timestamp Microservice

A simple timestamp microservice API built with Node.js and Express for the freeCodeCamp Backend Development certification.

## Features

- Convert date strings to Unix timestamps and UTC format
- Parse Unix timestamps and return date information
- Handle various date formats
- Return current time when no date is provided
- Error handling for invalid dates

## Installation

```bash
npm install
```

## Usage

Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### GET /api/:date?

Returns a JSON object with Unix timestamp and UTC date string.

**Parameters:**
- `date` (optional): A date string or Unix timestamp

**Examples:**

1. Empty date parameter (current time):
   ```
   GET /api
   Response: {"unix":1234567890000,"utc":"Fri, 13 Feb 2009 23:31:30 GMT"}
   ```

2. Date string:
   ```
   GET /api/2015-12-25
   Response: {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
   ```

3. Unix timestamp:
   ```
   GET /api/1451001600000
   Response: {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
   ```

4. Invalid date:
   ```
   GET /api/invalid-date
   Response: {"error":"Invalid Date"}
   ```

## Valid Date Formats

The API accepts:
- Unix timestamps in milliseconds (e.g., `1451001600000`)
- Date strings that can be parsed by JavaScript's `Date` constructor:
  - `2015-12-25`
  - `December 25, 2015`
  - `25 Dec 2015`
  - And many other formats

## Project Structure

```
.
├── index.js           # Main server file
├── views/
│   └── index.html     # Homepage with API documentation
├── package.json       # Project dependencies
└── README.md          # This file
```

## Testing

Test the API endpoints using:
- Web browser: Visit `http://localhost:3000`
- cURL: `curl http://localhost:3000/api/2015-12-25`
- API testing tools (Postman, Insomnia, etc.)

## Technologies Used

- Node.js
- Express.js
- CORS middleware

## License

MIT
