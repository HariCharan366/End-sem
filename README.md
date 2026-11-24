# React Controlled Forms Demo

A clean, beginner-friendly React application built with **Vite** demonstrating **Controlled Forms** using functional components, `useState`, `onChange`, and `onSubmit`.

---

## Features

### 1. Registration Form
- **Inputs:** Name, Email, Password.
- **Controlled Components:** Uses `useState` hooks to store the input values.
- **Change Handling:** Uses `onChange` event handlers on each input to update state on every keystroke.
- **Form Submission:** Uses `onSubmit` on the form element with `e.preventDefault()`.
- **Feedback:** Displays the entered details directly below the form upon submission.

### 2. Login Form
- **Inputs:** Email, Password.
- **Controlled Components:** Inputs are bound to state via `value` and `onChange`.
- **Credential Verification:**
  - Default Demo Credentials:
    - **Email:** `user@example.com`
    - **Password:** `password123`
  - Also dynamically recognizes any credentials registered using the Registration Form.
- **Feedback:**
  - Displays `"Login Successful"` (in green) if credentials match.
  - Displays `"Invalid Email or Password"` (in red) if credentials do not match.

---

## Project Structure

```
End sem/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      # React root rendering
    ├── App.jsx                       # Main layout with tab switcher
    ├── App.css                       # Application styles
    ├── index.css                     # Reset and base styles
    └── components/
        ├── RegistrationForm.jsx      # Controlled Registration Form
        └── LoginForm.jsx             # Controlled Login Form
```

---

## How to Run the Application

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Open [http://localhost:5173](http://localhost:5173) in your web browser.

---

## What is a Controlled Form in React?

In a standard HTML form, input elements store their own internal state. In React, a **controlled component** transfers control of the input state into React:

1. **`value={state}`**: The input's displayed value is always synchronized with the React state variable.
2. **`onChange={(e) => setState(e.target.value)}`**: When the user types, the change event updates the state, triggering a re-render with the new value.
3. **`onSubmit={(e) => { e.preventDefault(); ... }}`**: Form submission is handled by React without a full browser page refresh.
