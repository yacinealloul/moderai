"use client";
import { useState } from 'react';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyez les données du formulaire à votre backend ici
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Support</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
            <input className="w-full p-2 border rounded" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
            <input className="w-full p-2 border rounded" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subject">Subject:</label>
            <input className="w-full p-2 border rounded" type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message:</label>
            <textarea className="w-full p-2 border rounded" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Support;
