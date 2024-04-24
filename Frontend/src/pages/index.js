import React, { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form data sent successfully');
        // Clear form fields after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          projectDescription: '',
          budget: '',
          deadline: ''
        });
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
  
  return (
    <>
       <div>
      <h1>I'll make your dream website live</h1>
      <p>Visit: <a href="https://aniketpatel.me/">aniketpatel.me</a></p>
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
          About Company:
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
  );
}
