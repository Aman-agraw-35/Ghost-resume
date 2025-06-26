import React, { useState } from 'react';
import ResumeEditor from './components/resumeEditor';
import Footer from './components/footer';
import Navbar from './components/Navbar';
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
      <Navbar></Navbar>
      <ResumeEditor resume={resume} setResume={setResume} />
      <Footer></Footer>
    </div>
  );
}
export default App;
