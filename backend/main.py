from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RESUME_FILE = "resume.json"

class EnhanceRequest(BaseModel):
    section: str
    content: str

class Resume(BaseModel):
    name: str
    summary: str
    experience: list
    education: list
    skills: list

@app.post("/ai-enhance")
async def enhance_with_ai(req: EnhanceRequest):
    improved = req.content + " (Enhanced by AI)"
    return {"enhanced": improved}

@app.post("/save-resume")
async def save_resume(resume: Resume):
    with open(RESUME_FILE, "w") as f:
        json.dump(resume.dict(), f, indent=2)
    return {"status": "saved"}

@app.get("/get-resume")
async def get_resume():
    if os.path.exists(RESUME_FILE):
        with open(RESUME_FILE, "r") as f:
            data = json.load(f)
        return data
    return {"error": "No resume found"}

