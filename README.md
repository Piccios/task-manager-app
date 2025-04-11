# ✅ Task Manager App

A full-stack task management application developed using **Laravel (RESTful API)** for the backend and **React + TailwindCSS** for the frontend.

## 🛠 Technologies Used

- **Laravel 12** (PHP) – API backend
- **MySQL** – Relational database
- **React 18** – Dynamic frontend
- **TailwindCSS** – Utility-first CSS framework
- **Vite** – Frontend build tool for React

## ✨ Features

- Display a list of saved tasks
- Create new tasks with title and status
- Dynamic statuses through a `statuses` table in the DB
- Color-coded status badges (`to do`, `in progress`, `completed`)
- Strikethrough and gray text for completed tasks

## ⚙️ Project Setup

### Backend (Laravel)
1. Clone the repository
2. Install dependencies:
   ```bash
   composer install

    Create the .env file and configure your DB credentials

    Run migrations and seed the database:

php artisan migrate --seed

Start the Laravel development server:

    php artisan serve

Frontend (React)

    Navigate to the frontend directory

    Install dependencies:

npm install

Start the development server:

    npm run dev

📁 Folder Structure

├── backend (Laravel)
├── frontend (React)
│   ├── components/
│   ├── App.jsx
│   └── ...

🎯 Learning Goals

Throughout the development of this project, I focused on learning and strengthening:

    How to use Laravel for building RESTful APIs

    Managing migrations, relationships, and seeders in a relational DB

    Building reactive and composable components with React

    Styling with TailwindCSS for modern, clean, and mobile-first design

    Separating frontend and backend logic clearly

    Working with fetch, useState, and useEffect to manage async data

    Writing clean, scalable, and maintainable code

🔮 Future Improvements

    Ability to update task status using PATCH requests

    Functionality to delete tasks

    Add due dates, descriptions, or tags to tasks

    Improve accessibility and user experience

    Add user authentication with Laravel Sanctum

    Deploy the app (Vercel for frontend + Laravel Forge / Render / Railway for backend)