import React, { useState } from 'react';
import ResumeEditor from './components/resumeEditor';

function App() {
  const [resume, setResume] = useState({
    name: '',
    summary: '',
    experience: [{ company: '', role: '', duration: '' }],
    education: [{ institution: '', degree: '', year: '' }],
    skills: []
  });

  return (
    <div className="App">
      <ResumeEditor resume={resume} setResume={setResume} />
    </div>
  );
}
export default App;
