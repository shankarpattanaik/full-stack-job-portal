# Full Stack Job Portal

A full-stack job portal application that allows **candidates** to search and apply for jobs and **recruiters** to post and manage job listings. The platform includes secure authentication, role-based access control, and a responsive user interface.
✔ Production-ready backend with JWT authentication, RBAC, and RESTful APIs

## 🔗 Links

- **Live Demo:** https://full-stack-job-portal-g4xn.onrender.com
- **GitHub Repository:** https://github.com/shankarpattanaik/full-stack-job-portal

---

## 🛠 Tech Stack

**Frontend**

- React.js
- Tailwind CSS

**Backend**

- Node.js
- Express.js

**Database**

- MongoDB
- Mongoose

**Authentication & Security**

- JSON Web Tokens (JWT)
- Role-Based Access Control (RBAC)

**Cloud Services**

- Cloudinary (Resume & Profile Image Storage)

---

## ✨ Features

### 👤 Authentication & Authorization

- Secure user signup and login using JWT
- Protected routes with token validation
- Role-based access control for **Recruiters** and **Candidates**

### 🧑‍💼 Recruiter Features

- Create, update, and delete job postings
- View applications for posted jobs
- Manage recruiter profile

### 🧑‍🎓 Candidate Features

- Browse and search job listings
- Apply for jobs
- Upload resumes and profile images using Cloudinary
- Manage candidate profile

### 🌐 General Features

- RESTful API architecture
- Scalable MongoDB data modeling with Mongoose
- Fully responsive UI with Tailwind CSS
- Secure file uploads via Cloudinary

---

## 🛣 API Routes Documentation

All APIs are versioned under `/api/v1` and secured using JWT-based authentication.

---

## 👤 User Routes

**Base URL:** `/api/v1/user`

| Method | Endpoint          | Description                                                           | Auth |
| ------ | ----------------- | --------------------------------------------------------------------- | ---- |
| POST   | `/register`       | Register a new user (Candidate / Recruiter) with profile image upload | ❌   |
| POST   | `/login`          | User login and JWT generation                                         | ❌   |
| GET    | `/logout`         | Logout user and clear session/token                                   | ✅   |
| POST   | `/profile/update` | Update user profile (with image upload)                               | ✅   |

---

## 🏢 Company Routes

**Base URL:** `/api/v1/company`

| Method | Endpoint      | Description                                        | Auth |
| ------ | ------------- | -------------------------------------------------- | ---- |
| POST   | `/register`   | Register a company (Recruiter only)                | ✅   |
| GET    | `/get`        | Get recruiter’s company details                    | ✅   |
| GET    | `/get/:id`    | Get company details by ID                          | ✅   |
| PUT    | `/update/:id` | Update company information (logo upload supported) | ✅   |

---

## 💼 Job Routes

**Base URL:** `/api/v1/job`

| Method | Endpoint        | Description                            | Auth |
| ------ | --------------- | -------------------------------------- | ---- |
| POST   | `/post`         | Post a new job (Recruiter only)        | ✅   |
| GET    | `/get`          | Get all job listings                   | ✅   |
| GET    | `/getadminjobs` | Get jobs posted by logged-in recruiter | ✅   |
| GET    | `/get/:id`      | Get job details by job ID              | ✅   |

---

## 📄 Application Routes

**Base URL:** `/api/v1/application`

| Method | Endpoint             | Description                                        | Auth |
| ------ | -------------------- | -------------------------------------------------- | ---- |
| GET    | `/apply/:id`         | Apply for a job                                    | ✅   |
| GET    | `/get`               | Get jobs applied by logged-in candidate            | ✅   |
| GET    | `/:id/applicants`    | Get applicants for a specific job (Recruiter only) | ✅   |
| POST   | `/status/:id/update` | Update application status (Recruiter only)         | ✅   |

---

## 🔐 Authentication & Middleware

- **JWT Authentication** for secure API access
- **Protected Routes** using `isAuthenticated` middleware
- **Role-Based Access Control (RBAC)** for Recruiter and Candidate workflows
- **Multer + Cloudinary** integration for image and resume uploads

---

## 🧩 Backend Highlights

- Modular Express routing architecture
- RESTful API design with clear resource separation
- Scalable MongoDB schema design using Mongoose
- Secure file uploads and cloud storage

## 👨‍💻 Author

- Shankar Pattanaik
- Full Stack Developer
