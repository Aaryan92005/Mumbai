URL: http://localhost:5000/api/appointments
Method: POST
Headers:

Content-Type: application/json

{
  "patientName": "John Doe",
  "email": "john.doe@example.com",
  "phone": "(555) 123-4567",
  "specialization": "cardiology",
  "doctor": "1",
  "appointmentDate": "2024-12-15",
  "timeSlot": "10:00 AM - 10:30 AM",
  "symptoms": "Chest pain and shortness of breath"
}


. Get All Appointments (GET)
URL: http://localhost:5000/api/appointments
Method: GET

3. Get Single Appointment (GET)
URL: http://localhost:5000/api/appointments/1
Method: GET

4. Update Appointment Status (PUT)
URL: http://localhost:8000/api/appointments/1
Method: PUT
Headers:

Content-Type: application/json
Body (JSON):


{
  "status": "confirmed"
}

Set up the request:

Change dropdown from GET to POST
URL: http://localhost:5000/api/auth/register
Set headers:

Click on the Headers tab (below the URL bar)
Add a new header:
Key: Content-Type
Value: application/json
Set the body:

Click on the Body tab
Select raw radio button
In the dropdown next to raw, select JSON
In the text area, paste:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}