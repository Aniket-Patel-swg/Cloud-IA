import './App.css'
import react, { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    budget: '',
    deadline: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to server
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      projectDescription: '',
      budget: '',
      deadline: ''
    });
  };

  return (
    <>
          <div>
      <h1>I'll make your dream website live</h1>
      <p>Visit : <a href='https://aniketpatel.me/'>aniketpatel.me</a></p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Company details: 
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>
        <br />
        <label>
          Project Description:
          <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Budget:
          <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
        </label>
        <br />
        <label>
          Deadline:
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App
