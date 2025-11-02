# Doctor Appointment Backend API

Simple Express.js backend with authentication endpoints.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Start the server:
```bash
npm run dev
```

Server will run on http://localhost:5000

## API Endpoints

### Authentication

#### Register User
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Testing Endpoints

#### Health Check
- **GET** `/api/health`

#### Get All Users
- **GET** `/api/users`

## Postman Testing Steps

1. **Health Check:**
   - Method: GET
   - URL: http://localhost:5000/api/health

2. **Register a User:**
   - Method: POST
   - URL: http://localhost:5000/api/auth/register
   - Headers: Content-Type: application/json
   - Body (raw JSON):
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "password": "password123"
   }
   ```

3. **Login:**
   - Method: POST
   - URL: http://localhost:5000/api/auth/login
   - Headers: Content-Type: application/json
   - Body (raw JSON):
   ```json
   {
     "email": "test@example.com",
     "password": "password123"
   }
   ```

4. **View All Users:**
   - Method: GET
   - URL: http://localhost:5000/api/users