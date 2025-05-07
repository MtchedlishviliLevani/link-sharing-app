# Link Sharing App

A modern web application that allows users to create and share their professional profiles with customizable links. Built with React, TypeScript, and Firebase.

![Link Sharing App Preview](src/assets/images/illustration-phone-mockup.svg)

## Features

- 🔐 **User Authentication**

  - Secure login and registration
  - Email/password authentication
  - Protected routes

- 👤 **Profile Management**

  - Custom profile picture upload
  - Personal information management
  - Real-time profile preview

- 🔗 **Link Management**

  - Add, edit, and remove social media links
  - Support for multiple platforms (GitHub, LinkedIn, etc.)
  - Live preview of link changes
  - Up to 5 customizable links

- 📱 **Responsive Design**

  - Mobile-first approach
  - Beautiful phone mockup preview
  - Responsive layout for all screen sizes

- 🎨 **Modern UI/UX**
  - Clean and intuitive interface
  - Smooth animations and transitions
  - Tailwind CSS for styling

## Tech Stack

- **Frontend**

  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router
  - React Icons

- **Backend**
  - Firebase Authentication
  - Firebase Firestore
  - Base64 image storage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/link-sharing-app.git
   cd link-sharing-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a Firebase project and enable:

   - Authentication (Email/Password)
   - Firestore Database

4. Create a `.env` file in the root directory and add your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```
src/
├── assets/
│   ├── images/
│   └── data/
├── components/
│   ├── common/
│   ├── auth/
│   └── profile/
├── firebase/
│   ├── config.ts
│   ├── firebase.ts
│   ├── addData.ts
│   └── getData.ts
├── pages/
│   ├── Home.tsx
│   ├── Auth.tsx
│   └── Preview.tsx
└── types/
    └── index.ts
```

## Usage

1. **Authentication**

   - Register a new account or login with existing credentials
   - Access protected routes after authentication

2. **Profile Setup**

   - Upload a profile picture
   - Add your first name, last name, and email
   - Save your profile information

3. **Link Management**

   - Add social media links
   - Select platforms from the dropdown
   - Enter your profile URLs
   - Reorder links as needed
   - Save changes to update your profile

4. **Preview**
   - View your profile as others will see it
   - Test all your links
   - Share your profile URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the design inspiration
- [Firebase](https://firebase.google.com/) for the backend services
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling
