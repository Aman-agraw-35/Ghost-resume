# 🧛‍♂️ Ghost-Resume 📝

<div align="center">

![Ghost Resume Logo](https://img.shields.io/badge/Ghost-Resume-8B5CF6?style=for-the-badge&logo=ghost&logoColor=white)

**A modern, dark-themed resume editor with AI enhancement capabilities**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)

</div>

---

## 🌟 Overview

**Ghost-Resume** is a sleek, modern resume editor that combines a beautiful dark-themed interface with powerful editing capabilities. Built with React.js on the frontend and FastAPI on the backend, it provides users with an intuitive platform to upload, edit, enhance, and manage their resumes seamlessly.

## ✨ Key Features

### 📤 **Upload & Parse**
- Support for multiple formats (`.pdf`, `.docx`)
- Intelligent content extraction (currently mocked for demonstration)
- Quick resume import with structured data parsing

### ✏️ **Comprehensive Editing**
- **Personal Information**: Name, contact details
- **Professional Summary**: Craft compelling career overviews
- **Work Experience**: Add, edit, and organize professional history
- **Education**: Manage academic background and certifications
- **Skills**: Categorize and highlight technical and soft skills

### 🤖 **AI Enhancement** *(Mocked)*
- Smart content improvement suggestions
- Professional language optimization
- Section-specific enhancements via FastAPI backend

### 💾 **Data Management**
- Save resume data as JSON to backend
- Download resumes in structured format
- Persistent storage for resume versions

### 🎨 **User Experience**
- Modern dark theme with elegant styling
- Responsive design for all devices
- Intuitive navigation with "Ghost-Resume" branding
- Smooth interactions and animations

---

## 🏗️ Architecture

```
Ghost-Resume/
├── 📁 frontend/          # React.js Application
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   ├── 📁 styles/
│   │   └── 📄 App.js
│   ├── 📄 package.json
│   └── 📄 README.md
└── 📁 backend/           # FastAPI Application
    ├── 📄 main.py
    ├── 📄 requirements.txt
    └── 📁 models/
```

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn**
- **Python** (3.8 or higher)
- **pip**

### 🖥️ Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ghost-resume.git
   cd ghost-resume/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Access the application**
   
   Open your browser and navigate to: `http://localhost:3000`

### 🔧 Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd ../backend
   ```

2. **Create virtual environment** *(Recommended)*
   ```bash
   python -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the FastAPI server**
   ```bash
   uvicorn main:app --reload
   ```

5. **Verify backend is running**
   
   Visit: `http://localhost:8000/docs` for interactive API documentation

---

## 📡 API Reference

### Base URL
```
http://localhost:8000
```

### Endpoints

#### 🤖 AI Enhancement
```http
POST /ai-enhance
```

Enhances resume content using mocked AI capabilities.

**Request Body:**
```json
{
  "section": "summary",
  "content": "Experienced developer with 3 years of experience..."
}
```

**Response:**
```json
{
  "enhanced": "Seasoned software developer with 3+ years of proven expertise in full-stack development..."
}
```

#### 💾 Save Resume
```http
POST /save-resume
```

Saves complete resume data to backend storage.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "summary": "Full stack developer...",
  "experience": [
    {
      "company": "Tech Corp",
      "position": "Senior Developer",
      "duration": "2021-Present",
      "description": "Led development of web applications..."
    }
  ],
  "education": [
    {
      "institution": "University Name",
      "degree": "Bachelor of Computer Science",
      "year": "2020"
    }
  ],
  "skills": ["JavaScript", "React", "Python", "FastAPI"]
}
```

**Response:**
```json
{
  "status": "saved",
  "message": "Resume successfully saved",
  "timestamp": "2025-06-26T10:30:00Z"
}
```

#### 📥 Retrieve Resume
```http
GET /get-resume
```

Fetches the most recently saved resume data.

**Response:**
```json
{
  "name": "Aman Agrawal",
  "email": "aman.agraw.35@example.com",
  "summary": "Full stack developer...",
  "experience": [...],
  "education": [...],
  "skills": [...]
}
```

---

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI library for building interactive interfaces
- **CSS3** - Modern styling with dark theme
- **JavaScript (ES6+)** - Core programming language
- **Axios** - HTTP client for API communication

### Backend
- **FastAPI** - Modern Python web framework
- **Python 3.8+** - Server-side programming
- **Uvicorn** - ASGI server for FastAPI
- **Pydantic** - Data validation and serialization

---

## 🔮 Future Enhancements

- [ ] **Real AI Integration** - Connect with OpenAI/Claude APIs
- [ ] **Multiple Export Formats** - PDF, DOCX, HTML generation
- [ ] **Template System** - Pre-designed resume templates
- [ ] **User Authentication** - Account management and login
- [ ] **Resume Analytics** - Track views and engagement
- [ ] **Collaborative Editing** - Share and collaborate on resumes
- [ ] **ATS Optimization** - Applicant Tracking System compatibility
- [ ] **Mobile App** - Native mobile applications

---





## 👨‍💻 Author

<div align="center">

**Aman Agrawal**

🎓 IIIT Bhopal | 💻 Full Stack Developer

</div>

---



<div align="center">

**Made with ❤️ by Aman Agrawal**

*Building the future, one line of code at a time*

</div>