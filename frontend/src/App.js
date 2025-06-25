import React, { useState } from 'react';
import ResumeEditor from './components/ResumeEditor';
import './App.css';

function App() {
  const [resume, setResume] = useState({
    name: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
  });

  return (
    <div className="App">
      <h1>Resume Editor</h1>
      <ResumeEditor resume={resume} setResume={setResume} />
    </div>
  );
}
export default App;
