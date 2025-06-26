# 🧛‍♂️ Ghost-Resume 📝

**Ghost-Resume** is a modern, dark-themed resume editor built with **React.js** (frontend) and **FastAPI** (backend). It allows users to upload, edit, mock-enhance, save, and download their resumes easily.

---

## 🚀 Features

- ✅ Upload Resume (.pdf / .docx) — *mock parsed*
- ✏️ Edit fields: Name, Summary, Experience, Education, Skills
- 🤖 Enhance with AI *(mocked FastAPI endpoint)*
- 💾 Save resume JSON to backend
- 📥 Download resume as `.json`
- 🌙 Sleek dark UI with a stylish Ghost-Resume navbar

---

## 📁 Project Structure

Ghost-Resume/
├── frontend/ # React app (client)
└── backend/ # FastAPI server

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 🖥️ Frontend (React)

1. Navigate to the frontend folder:

   ```bash
   cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
App runs at: http://localhost:3000

🧪 Backend (FastAPI)
Navigate to the backend folder:

bash
Copy
Edit
cd backend
(Optional) Create and activate a virtual environment:

bash
Copy
Edit
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
Install required Python packages:

bash
Copy
Edit
pip install -r requirements.txt
Run the FastAPI server:

bash
Copy
Edit
uvicorn main:app --reload
Server runs at: http://localhost:8000

📡 API Endpoints
POST /ai-enhance
Request:

json
Copy
Edit
{
  "section": "summary",
  "content": "Experienced developer with..."
}
Response:

json
Copy
Edit
{
  "enhanced": "Mock improved content"
}
Note: This is a mocked response; no OpenAI integration is required.

POST /save-resume
Saves full resume JSON to disk.

GET /get-resume
Fetches saved resume JSON (if available).

