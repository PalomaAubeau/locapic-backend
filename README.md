# Locapic
Locapic is a mobile application that allows users to geolocate themselves by visualizing their movements on an interactive map. It also offers the ability to add points of interest and easily find them.


## Features
### Geolocation: 
Track your movements and visualize them on a map in real-time.
### Interactive Map: 
Explore the map and view your location along with added points of interest.
### Add Points of Interest: 
Mark interesting locations on the map for future reference.

## Technologies Used
Framework: React Native.\
Expo: Development platform for building React Native applications.\
Mapping Component: React Native Maps for displaying interactive maps.\
Geolocation: React Native Geolocation for accessing device location.\
Navigation: React Navigation for navigating between screens.\
API Integration: Utilizes the data.gouv.fr API for accessing cities coordinates.\
DataBase: MongoDB.

## Installation
### Prerequisites
Node.js and npm (or yarn) should be installed on your machine.\
Expo Go app installed on your mobile device.

### Installation Steps
### 1. Clone repositories into  separated folders:

BACKEND:
```
https://github.com/PalomaAubeau/locapic-backend.git
```
FRONTEND:
```
https://github.com/PalomaAubeau/locapic-frontend.git
```
Open two terminals to retrieve the backend and frontend parts in parallel.
### 2. Install dependencies for both frontend and backend:

```
cd backend
npm (or yarn) install
```
```
cd ../frontend
npm (or yarn) install
```

### 3. Configure environment variables:
Create a .env file in the backend folder.
Add your required keys and configurations.
Example:
```
CONNECTION_STRING=your_connection_string_for_mongoDB
```
### 4. Start the application:
Backend (you can use npm or yarn):
```
cd backend
yarn start (or nodemon)
```
Frontend (you can use npm or yarn):
```
cd frontend
yarn start
```
Open the Expo Go app on your mobile device and scan the QR code displayed in the terminal or in the Expo Dev Tools in your browser.
The app will be bundled and loaded on your device for testing and development.

## Acknowledgements
Thanks to Expo for providing a powerful platform for developing React Native applications.
Thanks to React Native community for their valuable contributions.

## Get the app
You can have a preview here:\
Oups! File is too big.\
You can also have a complete preview of the app by using this link to Expo Go:
```
https://expo.dev/preview/update?message=first%20repo&updateRuntimeVersion=1.0.0&createdAt=2024-05-10T16%3A01%3A07.482Z&slug=exp&projectId=e6c0a373-d95f-4967-a3dc-dcb494f7cf3a&group=ae14a7b4-0e85-4a34-99af-d6b9530d79f4
```
or by scanning this QRCode with Expo Go app on your mobile device:\
![QRCode_Locapic](https://github.com/PalomaAubeau/locapic-backend/assets/154338327/df4af7d6-4dd9-495c-800f-59044881f098)
