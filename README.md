# Counter App with User Authentication and Profile Analytics

## Overview

This project is a **React + Vite + Redux** application that features **Google Sign-In** authentication with **Firebase** and a **profile analytics dashboard**. It allows users to manage their profile, track their activity, and interact with a simple counter. The app is designed with modern UI components from **Material UI** and includes **Recharts** for visualizing profile view trends. **React Spring** is used to enhance the user experience with smooth animations.
## Folder Structure

 ┣ 📂 public  
 ┃ ┗ 📜 index.html  
 ┣ 📂 src  
 ┃ ┣ 📂 assets  
 ┃ ┃ ┗ 📜 logo.svg  
 ┃ ┣ 📂 components  
 ┃ ┃ ┣ 📜 Navbar.tsx  
 ┃ ┃ ┣ 📜 Auth.tsx  
 ┃ ┃ ┣ 📜 Counter.tsx  
 ┃ ┃ ┣ 📜 UserForm.tsx  
 ┃ ┃ ┣ 📜 UserProfile.tsx  
 ┃ ┃ ┣ 📜 UserProfileChart.tsx  
 ┃ ┃ ┗ 📜 PrivateRoute.tsx  
 ┃ ┣ 📂 pages  
 ┃ ┃ ┣ 📜 Home.tsx  
 ┃ ┃ ┗ 📜 Dashboard.tsx  
 ┃ ┣ 📂 redux  
 ┃ ┃ ┣ 📜 store.ts  
 ┃ ┃ ┣ 📜 counterSlice.ts  
 ┃ ┃ ┣ 📜 userSlice.ts  
 ┃ ┃ ┗ 📜 authSlice.ts  
 ┃ ┣ 📂 firebase  
 ┃ ┃ ┗ 📜 firebaseConfig.ts  
 ┃ ┣ 📂 styles  
 ┃ ┃ ┗ 📜 global.css  
 ┃ ┣ 📜 App.tsx  
 ┃ ┣ 📜 main.tsx  
 ┃ ┗ 📜 vite-env.d.ts  
 ┣ 📜 .env  
 ┣ 📜 .gitignore  
 ┣ 📜 package.json  
 ┣ 📜 tsconfig.json  
 ┣ 📜 vite.config.ts  
 ┗ 📜 README.md  



## Features

### 🔹 User Authentication (Google Sign-In)
- **Firebase Authentication**: Implemented Google Sign-In for user authentication.
- **Secure Routes**: Private routes that require authentication and public routes accessible to all users.
- **User Data Storage**: Stores user’s **name**, **email**, and **profile picture** using Firebase Authentication and Redux.

### 🔹 Counter Functionality
- **Increment, Decrement, and Reset**: Users can interact with the counter by incrementing, decrementing, or resetting the counter value.
- **Persistent State**: The counter value is saved persistently using **Redux** and **Local Storage**, maintaining the counter value even after page reloads.

### 🔹 User Profile Form
- **Editable Profile**: Users can edit and save their profile details (Name, Email, Address, Phone).
- **Persistent Data**: User profile data is stored in **Redux** state and **Local Storage**, ensuring data consistency across sessions.
- **Unsaved Changes Warning**: If the user attempts to navigate away without saving changes, an alert is shown.

### 🔹 Profile Analytics (Charts)
- **Recharts Integration**: Uses **Recharts** to display a line chart showing the profile views over time.
- **Tracks Daily Visits**: Profile views are tracked per day, incrementing only once per day.
- **Persistent View History**: Stores and updates profile view history with timestamps in the Redux state and **Local Storage**.

### 🔹 Dashboard
- **Displays Counter, User Profile, and Analytics**: The dashboard is structured using a responsive grid layout.
- **Material UI Components**: Utilizes **Material UI** components for a modern, user-friendly interface.
- **React Spring Animations**: Smooth animations are integrated into the counter interactions for a more interactive experience.

## Technologies Used
- **React.js**: Frontend UI and state management.
- **Vite**: Fast build tool and development server.
- **Redux Toolkit**: Global state management for counter, user profile, and analytics.
- **Firebase Authentication**: Google Sign-In for secure user authentication.
- **Recharts**: Charting library to visualize user profile view trends.
- **Material UI**: UI components and styling.
- **React Spring**: For adding animations to UI components.
- **Local Storage**: For persistent data storage.
