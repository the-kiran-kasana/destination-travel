# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.








##  **Personalized Travel Recommendation Platform**

A user-friendly platform that provides personalized destination recommendations based on user preferences, travel styles, and past experiences.
This project aims to simplify travel planning by helping users discover destinations that align with their interests, budget, and desired activities.

##  🚀 Project Goal
    
    To create a smart travel assistant that:
    Understands user preferences.
    Suggests ideal travel destinations.
    Provides reviews, itineraries, and comparison tools.
    Enhances the overall travel discovery & planning experience.


## Project Type

      Fullstack

##  ✨ Features
   
 User Preference Survey
            
            Interactive questionnaire to collect user preferences: 
            Interests (adventure, relaxation, culture, etc.)
            Budget range  Travel style (solo, family, luxury, etc.)
            Desired activities (sightseeing, dining, outdoor) 
            Engaging UI with sliders, multiple-choice options, and icons/images.

🤖 Dynamic Recommendation Engine
    
            Analyzes user inputs & past trips.
            Generates personalized suggestions.
            Each recommendation includes:
            High-quality images
            Destination overview & attractions


⭐ User Reviews & Ratings
    
            Users can submit reviews & ratings.
            Filter recommendations by ratings.
            Browse authentic traveler experiences.

🗺 Interactive Destination Map
    
            Explore recommendations on a map.
            Clickable markers to view details.
            Shows nearby attractions & user reviews.

📅 Personalized Itineraries
        
        Create custom itineraries from recommendations.
        Save & manage travel schedules.
        Share itineraries with friends & family.

📲 Social Sharing & Community
    
        Share favorite destinations & itineraries on social media.
        Referral incentives to invite friends.

⚖️ Destination Comparison Tool
        
        Compare destinations side by side.
        Metrics: attractions, cost, ratings.
        Clean and visual display for easy decision-making.


📱 Mobile Responsiveness
        
        Fully responsive UI across desktop, tablet, and mobile.
        Touch-friendly navigation for smooth mobile experience.

👤 User Profiles & History Tracking
        
        Save user preferences, trips, and favorites.
        Refine recommendations over time for personalized experience.


Tech Stack
       Frontend:
            React.js (with Tailwind CSS for styling)
            Framer Motion (animations)
            Map APIs ( Leaflet.js)
       Backend
            Firebase for user data & preferences



Folder Structure:

            src/ # Source code
            │ │ ├── assets/ # Images, icons, and static files
            │ │ ├── auth/ # Authentication logic
            │ │ │ ├── firebaseConfig.jsx # Firebase configuration
            │ │ │ └── authentication/ # Login & Signup components
            │ │ │ ├── Login.jsx
            │ │ │ ├── PrivateRoute.jsx
            │ │ │ └── Signup.jsx
            │ │ ├── components/ # Reusable UI components
            │ │ │ ├── DestinationComparison.jsx
            │ │ │ ├── DestinationMap.jsx
            │ │ │ ├── Header.jsx
            │ │ │ ├── ItineraryPlanner.jsx
            │ │ │ ├── TravelArea.jsx
            │ │ │ └── UserProfile.jsx
            │ │ ├── database/ # Data-related components
            │ │ │ ├── InterestsData.jsx
            │ │ │ └── UploadData.jsx
            │ │ ├── questionnaire/ # User survey & questionnaire
            │ │ │ ├── Activities.jsx
            │ │ │ ├── DestinationCard.jsx
            │ │ │ ├── Home.jsx
            │ │ │ ├── InterestedDestination.jsx
            │ │ │ ├── Interests.jsx
            │ │ │ ├── Review.jsx
            │ │ │ ├── StateContext.jsx
            │ │ │ └── TravelStyle.jsx
            │ │ ├── App.css
            │ │ ├── App.jsx
            │ │ ├── AuthContext.jsx
            │ │ ├── index.css
            │ │ ├── main.jsx

## Video Walkthrough of the project


## Video Walkthrough of the codebase


## Installation & Getting started

   Detailed instructions on how to install, configure, and get the project running.

               > create npm vite@latest
               > cd travel-recommendation-platform
              
               Install Dependencies 
                 npm install
                 npm i react-router-dom  
                 npm i lucide 
                 npm i firebase 

               Run Development Server
                  run npm dev

## Usage

    how to use your project
     
    go to the /home directory and then main page will be open and then click to the start button to find the new travelling destination and
    then signup the page then login the page after that select your favorite destination.

## APIs Used
     Our platform integrates with the following APIs to provide real-time and accurate travel information:

      Leaflet Maps API  (Used for interactive destination maps)
      Firebase  (sed for authentication, saving user preferences, travel history, and reviews.)


## Technology Stack
    
 **Frontend**
    
             - HTML5, CSS3, JavaScript (ES6+)
              - React.js (UI library)
              - Tailwind CSS (styling)
              - Lucide React (icons)
              - Framer Motion (animations)
    
 **Backend**
    
              - RESTful APIs
    
    
 **Database**
    
            - Firebase Realtime Database (for syncing data)
    
 **Authentication**

            - Firebase Authentication (Email/Password, Google Sign-In)
            
             **Hosting & Deployment**
                 - Vercel  (Frontend hosting)

    
            **Version Control & Collaboration**
                  - Git & GitHub
            
            **Other Tools**
                 - intellij (development)
            
         




   

      
