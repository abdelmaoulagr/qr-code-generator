# QR Code Generator API

A simple Node.js and Express-based web service that provides APIs to generate QR codes in two formats: PNG images stored on the server and Base64-encoded strings. This service allows users to easily create QR codes from any input text.

## Features

- **Generate QR Code as PNG**: Takes text input, generates a QR code, saves it as a PNG image on the server, and returns the file path.
- **Generate QR Code as Base64**: Takes text input, generates a QR code, and returns it as a Base64-encoded string, which can be displayed directly on the frontend.

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/abdelmaoulagr/qr-code-generator.git
    cd qr-code-generator
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a directory to store the QR code images:

    ```bash
    mkdir qr-codes
    ```

## Running the Application

Start the server by running:

```bash
node index.js
```
The server will start on `http://localhost:3000`.

## API Endpoints
1. **Generate QR Code as PNG**
  - **Endpoint**: `/generate-png`
  -  **Method**: `POST`
  - **Content-Type**: `application/json`
  - **Request Body**:
```json
  {
  "text": "Your text here"
  }
```
  - **Response**
```json
 {
  "message": "QR code generated and saved",
  "filePath": "/path/to/qr-code.png"
}
```
- **Description**: This endpoint generates a QR code from the provided text and saves it as a PNG file in the `qr-codes` directory on the server.

2. **Generate QR Code as Base64**
  - **Endpoint**: `/generate-base64`
  -  **Method**: `POST`
  - **Content-Type**: `application/json`
  - **Request Body**:
```json
  {
  "text": "Your text here"
  }
```
- **Response**
```json
 {
    "base64Data": "data:image/png;base64,..."
}
```
- **Description**: This endpoint generates a QR code from the provided text and returns it as a Base64-encoded string.

## Example Requests
  You can test the endpoints using tools like Postman or cURL.

**Generate PNG QR Code**:
```bash
curl -X POST http://localhost:3000/generate-png \
     -H "Content-Type: application/json" \
     -d '{"text": "Hello, world!"}'
```
**Generate Base64 QR Code**:
```bash
curl -X POST http://localhost:3000/generate-base64 \
     -H "Content-Type: application/json" \
     -d '{"text": "Hello, world!"}'
```
