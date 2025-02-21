# User Information Form

This project is a **User Information Form** that collects user details such as name, address, age, contact, email, father and mother’s name, and college name. The data is then stored in a database using a **Node.js** backend with **MongoDB**.

## 🚀 Features
- **Responsive Form UI** built with HTML & CSS
- **Data Validation** for proper input format
- **Backend API** using Node.js & Express.js
- **Database Integration** with MongoDB
- **User Feedback** displayed below the submit button

## 📂 Project Structure
```
📦 UserFormProject
├── 📂 frontend
│   ├── index.html  (Main Form UI)
│   ├── style.css   (Styling)
│   ├── script.js   (Frontend Logic)
│
├── 📂 backend
│   ├── server.js  (Node.js Backend)
│   ├── package.json  (Project Dependencies)
│   ├── .env  (Environment Variables - Not Committed)
│
├── 📂 assets
│   ├── flowerimg.jpg  (Left Side Image)
│
└── .gitignore  (Ignored Files)
```

## ⚡ Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/UserFormProject.git
cd UserFormProject
```

### 2️⃣ Install Backend Dependencies
```sh
cd backend
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file inside the **backend** folder and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4️⃣ Run the Backend Server
```sh
node server.js
```
Server will run on **http://localhost:3000**

### 5️⃣ Open the Frontend
Open `frontend/index.html` in a browser.

## 📌 API Endpoints
| Method | Endpoint     | Description         |
|--------|-------------|---------------------|
| GET    | /users      | Fetch all users    |
| POST   | /users      | Add a new user     |
| PUT    | /users/:id  | Update a user      |
| DELETE | /users/:id  | Delete a user      |

## 🎯 Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Version Control:** Git & GitHub

## 🛠️ To-Do List
- ✅ Basic form UI
- ✅ Backend API integration
- ⬜ Improve form validation
- ⬜ Deploy project to Heroku/Vercel

## 💡 Contribution
Feel free to fork this project and contribute. Create a pull request if you have improvements!

---

**📢 Made with ❤️ by Yashwant Verma **

