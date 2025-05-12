# Client Dashboard

A simple full-stack dashboard application that displays and manages client data for a user.

This project includes a full authentication flow, filtering, editing, and deleting client accounts. Built with **Next.js** on the frontend and **NestJS + MongoDB** on the backend, it features responsive design, server-side rendering, and clean architecture across both stacks.

---

## ✨ Features

- **Authentication**
  - Login and logout via secure, cookie-based sessions
- **Client Dashboard**
  - View all client accounts in a responsive table
  - Filter clients by **name**, **birthday**, or **account type**
- **Edit Client**
  - Update any client’s name, birthday, account number, or balance
- **Delete Client**
  - Permanently remove any client from the system
- **Mobile Responsive**
  - Clean responsive layout that works across desktop and mobile

---

## ✨ New Features!

- **Authentication-Based Control**
  - You must be logged in to view clients' data
  - You must be logged in to update clients' data
  - You must be logged in to transfer funds from or to a client's account
  - You must be logged in to close a client's account
  - You must be logged in to create a client
  - You must be logged in to view notifications

- **Create Client**
  - Create a new client

- **Notifications Center**
  - View the latest notifications by clicking on the bell icon:
    - Updating a client's information will trigger a notifcation
    - Withdrawing or depositing funds into or from a client's account will trigger a notification
    - Closing a client's account will trigger a notification
  - Each notification will remain bold and unread until a user opens the notifications menu

---

## 🛠 Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19 (Client + Server Components)
- Custom Hooks and Context for State
- Fully Server-Side Filtering

### Backend
- NestJS
- MongoDB (Mongoose)
- bcrypt for password hashing
- jsonwebtoken for secure session tokens

---

## ⚙️ Setup Instructions

1. **Clone the repository** and navigate into the project:

```
git clone https://github.com/twincarlos/biocollections-carlos-rodriguez-take-home.git
cd biocollections-carlos-rodriguez-take-home
```

2. **Setup the backend**

```
cd backend
npm install
```

3. **Create `.env` file in the `backend` directory with the following content:**

```
JWT_SECRET=<your_secret_key>
```

4. **Install MongoDB and run it locally:**

```
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

5. **Start NestJS backend:**

```
npm run start:dev
```

6. **Setup the frontend:**
```
cd ../frontend
npm install
npm run dev
```

7. **Login credentials:**
```
Email:    admin@example.com
Password: password123
```
