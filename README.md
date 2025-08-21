
# Project Management Tool

A full-stack collaborative project management application similar to Trello or Asana.

## Features

* User Authentication (Register/Login with JWT)
* Create group projects
* Assign tasks to users
* Comment and communicate within tasks
* Notifications and real-time updates via WebSockets
* Frontend with dashboard, login, register pages

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Frontend:** HTML, CSS, JavaScript
* **Real-time updates:** Socket.IO

## Folder Structure

```
task-management-tool/
├─ backend/
│  ├─ server.js
│  ├─ package.json
│  ├─ routes/
│  │  ├─ authRoutes.js
│  │  ├─ projectRoutes.js
│  │  ├─ taskRoutes.js
│  │  └─ userRoutes.js
│  ├─ models/
│  │  ├─ User.js
│  │  ├─ Project.js
│  │  └─ Task.js
│  └─ middleware/
│     └─ auth.js
└─ frontend/
   ├─ index.html
   ├─ login.html
   ├─ dashboard.html
   └─ style.css
```

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd task-management-tool/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in `backend/`:

```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```

4. Start the backend server:

```bash
npm run dev
```

5. Place the `frontend/` folder alongside `backend/`.

6. Open browser:

* Register: `http://localhost:5000/index.html`
* Login: `http://localhost:5000/login.html`
* Dashboard: `http://localhost:5000/dashboard.html`

## Usage

1. Register a new user.
2. Login with credentials.
3. Create new projects.
4. Assign tasks and view notifications.

## Notes

* Ensure MongoDB is running and connection string in `.env` is correct.
* Frontend is served via Express static middleware.
* Real-time notifications require multiple users or tabs to test.

## Future Enhancements

* Drag-and-drop Kanban board for tasks.
* File attachments in tasks.
* Enhanced comments with markdown support.
* User roles and permissions.
