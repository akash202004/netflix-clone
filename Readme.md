# Netflix Clone

This project is a modern web application replicating the core functionalities of Netflix. Built using React for the frontend, styled with Tailwind CSS, and powered by Firebase for backend services, this clone integrates the IMDb API to fetch and display detailed movie and TV show information.

![Netflix Clone Screenshot](netflix.png)

## Features

### User Authentication

- **Sign Up & Login:** Secure user authentication using Firebase Authentication.
- **Profile Management:** Create and switch between user profiles.

### Movie Browsing

- **Home Page:** Dynamic display of popular movies and TV shows.
- **Genre Categories:** Browse genre-specific categories with horizontal scrolling.
- **Movie/TV Show Details:** Fetch detailed information including ratings, synopsis, and cast from the IMDb API.

### Responsive Design

- **Mobile & Desktop:** Fully responsive layout crafted with Tailwind CSS for a seamless experience on all devices.

## Technology Stack

- **React:** For building the user interface.
- **Tailwind CSS:** For efficient and modern styling.
- **Firebase:** For authentication, database, and hosting.
- **IMDb API:** For fetching detailed movie data.

## Getting Started

### Prerequisites

- Node.js
- Firebase account
- IMDb API key

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/akash202004/netflix-clone
   cd netflix-clone
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase and IMDb API credentials:

   ```env
   REACT_APP_API_KEY =
   REACT_APP_FIREBASE_API_KEY =
   REACT_APP_FIREBASE_AUTH_DOMAIN =
   REACT_APP_FIREBASE_PROJECT_ID =
   REACT_APP_FIREBASE_STORGAE_BUCKET =
   REACT_APP_FIREBASE_MESSAGING =
   REACT_APP_FIREBASE_API_ID =
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```
