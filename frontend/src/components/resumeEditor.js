import React from 'react';
import axios from 'axios';

function ResumeEditor({ resume, setResume }) {
  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const handleEnhance = async (section) => {
    const response = await axios.post('http://localhost:8000/ai-enhance', {
      section,
      content: resume[section]
    });
    setResume({ ...resume, [section]: response.data.enhanced });
  };

  const handleSave = async () => {
    await axios.post('http://localhost:8000/save-resume', resume);
    alert('Resume saved to backend');
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.json';
    link.click();
  };

  return (
    <div>
      <label>Name:
        <input name="name" value={resume.name} onChange={handleChange} />
        <button onClick={() => handleEnhance('name')}>Enhance with AI</button>
      </label>
      <br />
      <label>Summary:
        <textarea name="summary" value={resume.summary} onChange={handleChange} />
        <button onClick={() => handleEnhance('summary')}>Enhance with AI</button>
      </label>
      <br />
      <label>Skills (comma separated):
        <input
          name="skills"
          value={resume.skills}
          onChange={(e) => setResume({ ...resume, skills: e.target.value.split(',') })}
        />
        <button onClick={() => handleEnhance('skills')}>Enhance with AI</button>
      </label>
      <br />
      <button onClick={handleSave}>Save Resume</button>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}

export default ResumeEditor;