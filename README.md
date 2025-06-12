# 📅 Schedule Management System

A fully functional **MERN stack** application that allows users to manage daily schedules in a smart and efficient way. It includes creating, searching, updating, and deleting schedules with live MongoDB integration. Built with ❤️ by **Md Riyajul Islam Akash**.

---

## 🔗 Live Site Links

- 🚀 Client: [https://mellow-pastelito-5805a9.netlify.app/addSchedule](https://mellow-pastelito-5805a9.netlify.app/addSchedule)
- 🌐 Server: [https://server2-eight-khaki.vercel.app/](https://server2-eight-khaki.vercel.app/)

---

## 🖼️ Preview (Screenshots)

> **Coming Soon**: Add screenshots showing Add Schedule form, Table view, Update modal, Search in action, etc.

---

## ✅ Features at a Glance

### 📝 Schedule CRUD Operations
- **Create**: Add new schedule with proper input validation
- **Read**: View all schedules in a styled, paginated table
- **Update**: Edit existing schedule using the update route
- **Delete**: Delete any schedule with SweetAlert2 confirmation

### 🔍 Advanced Search Feature
- Real-time search by **title**, **date**, **day name** etc.
- URL parameter based dynamic search with MongoDB filter

### 💬 Interactive UI
- DaisyUI + Tailwind CSS based responsive design
- SweetAlert2 for alert, confirmation, and success dialogs

### 📦 REST API Integration
- Fully managed backend using Express and MongoDB
- Dynamic route handling and MongoDB operations using Mongoose

### 🔐 Security & Config
- `.env` file for sensitive environment variables
- CORS enabled for cross-origin access
- Modular route and model separation for cleaner code

---

## 💡 How It Works (User Flow)

1. **User visits** the homepage and sees the form to add new schedule
2. The data is **saved to MongoDB** via Express backend
3. All existing schedules are fetched and **displayed in a table**
4. User can **search by title/day/date** using the search bar
5. User can **edit** an entry, or **delete** it with a confirmation popup

---

## 🛠️ Technology Stack

| Technology    | Purpose                  |
|---------------|---------------------------|
| **React.js**  | Frontend development     |
| **Tailwind CSS + DaisyUI** | Styling and components |
| **React Router** | Client-side routing    |
| **SweetAlert2** | Custom popup/alerts     |
| **Node.js**   | Backend runtime engine    |
| **Express.js**| Server creation and routing |
| **MongoDB**   | NoSQL database            |
| **Mongoose**  | MongoDB ODM for modeling  |
| **dotenv**    | Managing environment vars |
| **CORS**      | Secure frontend-backend communication |
| **Vercel**    | Server deployment         |
| **Netlify**   | Client deployment         |

---

## ⚙️ REST API Routes

| Method | Endpoint                  | Description             |
|--------|---------------------------|-------------------------|
| `GET`  | `/schedule`               | Get all schedules       |
| `GET`  | `/schedule/:id`           | Get single schedule     |
| `POST` | `/schedule`               | Add a new schedule      |
| `PUT`  | `/schedule/:id`           | Update schedule by ID   |
| `DELETE`| `/schedule/:id`          | Delete schedule by ID   |

✅ Bonus: Supports `?searchParams=value` to filter schedules by search keywords.

---

## 📁 Folder Structure
📦 root/
├── 📁 client/ # Frontend (React)
│ ├── 📁 components/
│ ├── 📁 pages/
│ └── App.jsx
├── 📁 server/ # Backend (Express)
│ ├── 📁 routes/
│ ├── 📁 models/
│ └── index.js



---

## 🧠 Key Concepts Implemented

- 🔁 **React useEffect** & **useState** hooks
- 🔗 **React Router v6** dynamic routes
- 📡 **Fetch API** for client-server communication
- ⚠️ **Async await / Promise handling**
- 📂 **Modular route & schema management**
- 🔐 **Environment variable (.env) usage**

---

## 🔮 Future Enhancements

- ✅ **Pagination** support for long schedule lists
- 🛎️ **User authentication** (Login/Register)
- ⏰ **Reminder / Notification** support
- 📆 Calendar View integration
- 📱 Full mobile responsiveness
- 🖼️ Upload schedule banner/image (via Cloudinary)
- 📊 Dashboard analytics (weekly/monthly views)

---

## 👨‍💻 Developer Info

- 🧑‍💻 **Md Riyajul Islam Akash**
- 📧 Email: hafejmohammadakash@gmail.com
- 🌐 [Portfolio](https://mdriyajulislamakash11.github.io/My-Portfolio/)
- 🔗 [GitHub](https://github.com/mdriyajulislamakash11)
- 🔗 [LinkedIn](https://www.linkedin.com/in/mdriyajulislam/)

---

## 📜 License

This project is licensed under the MIT License - feel free to use and modify it.



