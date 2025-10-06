# **App Name**: AuthFlow

## Core Features:

- Firebase Configuration: Initialize Firebase v10 modular SDK using environment variables for API key, auth domain, and other configuration settings. Necessary to establish the connection with the backend.
- Authentication Context: Create an authentication context using React Context API. Track the currently logged-in user via `onAuthStateChanged` and provide signup, sign-in, and sign-out methods via a custom hook (`useAuth`).
- Sign-Up Form: Implement a user sign-up form with fields for name, email, password, and confirm password. Include client-side validation for no empty fields and password matching, providing an appropriate error message when requirements aren't met. Shows an error if registration fails, e.g. the email address is already in use.
- User Profile Update: After successful user creation with email and password, update the user's profile with the provided name. This updates the `displayName` property associated with the user in Firebase.
- Secure Redirect: Upon successful sign-up, securely redirect the user to the /app page. This transition ensures that the user is automatically navigated to the authenticated area of the application.
- Loading State: Show a loading indicator while the sign-up request is processing to improve the user experience.

## Style Guidelines:

- Primary color: Deep Indigo (#4F3CC9) to establish a sense of security and trust in authentication.
- Background color: Light gray (#F4F4F6) for a clean, unobtrusive backdrop.
- Accent color: Sky Blue (#78A4E4) for interactive elements, drawing attention and enhancing usability.
- Body and headline font: 'Inter' sans-serif font for a clean and modern appearance suitable for both headlines and body text.
- The sign-up form should be centered on the page within a Tailwind card. This approach enhances focus and improves the user experience by ensuring key form elements are easily visible.
- Incorporate simple, recognizable icons for form fields, like email and password. This assists user understanding and improves overall interaction.
- Subtle fade-in animation upon page load. This introduces a sense of smooth interaction, enhancing visual appeal without being intrusive.