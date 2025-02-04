# React + TypeScript + Vite
This project is a React + Vite + Redux application that includes user authentication, state management, a counter, and a profile analytics dashboard with charts. It integrates Firebase authentication for Google Sign-In and uses Recharts to visualize user profile trends.

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


## Key Features
🔹 **User Authentication**
Google Sign-In using Firebase Authentication
Secure private and public routes
Stores user name, email, and profile picture
🔹 **Counter Functionality**
Increment, Decrement, and Reset counter
Stores counter value persistently in Redux & Local Storage
🔹 **User Profile Form**
Allows users to edit and save their profile details (Name, Email, Address, Phone)
Data is stored in Redux state and Local Storage
Prevents accidental data loss with an unsaved changes warning
🔹 **Profile Analytics (Charts)**
Uses Recharts to display profile views trends
Tracks daily visits and increments only once per day
Stores visit history with timestamps
🔹 **Dashboard** 
Displays counter, user profile, and analytics in a grid layout
Uses Material UI components for a modern UI

## 🛠 Technologies Used

React.js	- UI Components & State Management
Vite	Faster - Build & Development Server
Redux Toolkit - 	Global State Management
Firebase  - Authentication	Google Sign-In & User Authentication
Material UI -	UI Components & Styling
Recharts - 	Data Visualization & Analytics
React Router - 	Navigation & Private Routes
Local Storage - Persistent Data Storage
React-Spring - Animations & Transitions

