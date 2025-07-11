import React from 'react';
import axios from 'axios';

function ResumeEditor({ resume, setResume }) {
  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const handleEnhance = async (section) => {
    const content = Array.isArray(resume[section])
      ? resume[section].join(', ')
      : resume[section];

    try {
      const response = await axios.post('https://ghost-resume-backend.onrender.com/ai-enhance', {
        section,
        content
      });
      setResume({ ...resume, [section]: response.data.enhanced });
    } catch (error) {
      console.error("Enhance error:", error);
      alert("Enhancement failed.");
    }
  };

  const handleExperienceChange = (index, key, value) => {
    const updated = [...resume.experience];
    updated[index][key] = value;
    setResume({ ...resume, experience: updated });
  };

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [...resume.experience, { company: '', role: '', duration: '' }]
    });
  };

  const handleEducationChange = (index, key, value) => {
    const updated = [...resume.education];
    updated[index][key] = value;
    setResume({ ...resume, education: updated });
  };

  const addEducation = () => {
    setResume({
      ...resume,
      education: [...resume.education, { institution: '', degree: '', year: '' }]
    });
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    const skillsArray = value
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    setResume({ ...resume, skills: skillsArray });
  };

  const handleSave = async () => {
    try {
      const validResume = {
        name: resume.name || "",
        summary: resume.summary || "",
        experience: Array.isArray(resume.experience) ? resume.experience : [],
        education: Array.isArray(resume.education) ? resume.education : [],
        skills: Array.isArray(resume.skills)
          ? resume.skills
          : (resume.skills || "").split(',').map(s => s.trim())
      };

      await axios.post('https://ghost-resume-backend.onrender.com/save-resume', validResume);
      alert('Resume saved to backend');
    } catch (error) {
      console.error("Save error:", error.response?.data || error.message);
      alert("Failed to save resume. See console for details.");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: 'application/json'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">


      <div className="max-w-5xl mx-auto px-6 py-10">
        <section className="bg-gray-850 p-8 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Basic Info</h2>
          <div className="flex gap-2 mb-6">
            <input
              name="name"  
              placeholder="Full Name"
              value={resume.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            />
            <button onClick={() => handleEnhance('name')} className="px-4 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800">
              Enhance with AI
            </button>
          </div>

          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Summary</h2>
          <div className="flex gap-2 mb-6">
            <textarea
              name="summary"
              placeholder="Professional Summary"
              value={resume.summary}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
              rows={4}
            />
            <button onClick={() => handleEnhance('summary')} className="px-4 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800">
              Enhance with AI
            </button>
          </div>

          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-6 space-y-3">
              <input
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
              />
              <input
                placeholder="Role"
                value={exp.role}
                onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
              />
              <input
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
              />
            </div>
          ))}
          <button onClick={addExperience} className="mb-8 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Add Experience
          </button>

          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Education</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-6 space-y-3">
              <input
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
              />
              <input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
              />
              <input
                placeholder="Year"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
              />
            </div>
          ))}
          <button onClick={addEducation} className="mb-8 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Add Education
          </button>

          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Skills</h2>
          <div className="flex gap-2 mb-6">
            <input
              placeholder="Comma-separated skills"
              value={Array.isArray(resume.skills) ? resume.skills.join(', ') : resume.skills || ''}
              onChange={handleSkillsChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            />
            <button onClick={() => handleEnhance('skills')} className="px-4 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800">
              Enhance with AI
            </button>
          </div>

          <div className="flex gap-4 mt-8">
            <button onClick={handleSave} className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800">
              Save Resume
            </button>
            <button onClick={handleDownload} className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-800">
              Download Resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResumeEditor;
