# 📚  Book Haven

A full-stack digital library platform where users can explore, add, update, and manage books with secure authentication. Built using **React**, **Node.js**, **Express.js**, **MongoDB**, and **Firebase Authentication**.

## 🌐 Live Preview
🔗 Deployed Client: https://the-book-haven-book.netlify.app/

## 🚀 Key Features
- 🔐 **User Authentication** with Firebase (Email/Password + Google Login)
- 📚 **Full CRUD Operations** for managing books
- 👤 **My Books Page** — Logged-in users can view, update & delete only their books
- ⭐ Book rating system + dynamic display of latest books
- 🎨 Modern & responsive UI with smooth navigation
- 🔍 Private routes protected from unauthorized users
- 🧭 Sorting functionality based on book rating
- 🌓 Light/Dark mode toggle support
- 💬 Real-time Comments on book details (saved in MongoDB)
- ⚠️ Custom 404 page & loading spinners

## 🛠️ Tech Stack

### Client
- React (SPA + React Router)
- Firebase Authentication
- Axios
- TailwindCSS + DaisyUI
- React Hot Toast (for success/error messages)
- Environment variables included

### Server
- Node.js + Express.js
- MongoDB Atlas + Mongoose
- JWT Auth (for secure user requests)
- Hosted on Vercel


## 💡 Core Functionalities

| Feature | Public | Requires Login |
|--------|:------:|:--------------:|
| View All Books | ✔️ | ❌ |
| View Book Details | ❌ | ✔️ |
| Add Book | ❌ | ✔️ |
| Manage My Books | ❌ | ✔️ |
| Add/Edit/Delete Books | ❌ | ✔️ |
| Comment on Books | ❌ | ✔️ |

## 🔑 User Flow
1. User logs in (Email/Password or Google)
2. Can add books & view personal book list
3. Can edit/update book info including image upload via **imgbb**
4. Can delete only their own books
5. Private routes persist on reload without redirect issues

## 🧪 Additional Features from Challenges
- Rating-based sorting on All Books page
- Dark/Light theme toggle
- Comments saved & auto-update on book details page
- React Hot Toast + React Tooltip usage

## 📌 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /books | Get all books |
| GET | /books/:id | Get single book details |
| POST | /books | Add a new book |
| PUT | /books/:id | Update a book |
| DELETE | /books/:id | Delete a book |
| GET | /myBooks/:email | Books added by specific user |

---
### 📦 Installation Guide
# Clone repositories
git clone <client-repo-url>
git clone <server-repo-url>

# Install dependencies
cd client && npm install
cd server && npm install

# Run development servers
npm run dev  # client
npm start    # server

---


### 🚀 Want me to help further?
I can also:

✔️ Create a **professional commit history plan**  
✔️ Help write the **server README** (if needed)  
✔️ Help you upload screenshots beautifully  
✔️ Add badges (Tech Stack, Deployment, License, Version)  
✔️ Review UI & code quality for higher marks  

Would you like me to:
A) Upload this directly in JSON/Markdown file format?  
B) Add screenshots or badges to the README?


