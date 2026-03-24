import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioLayout from './components/PortfolioLayout';

export default function Contact() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PortfolioLayout>
      <div className="contact-page">
        <div className="contact-inner">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label className="contact-label">email</label>
              <input
                type="email"
                name="email"
                className="contact-input"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact-field">
              <label className="contact-label">subject</label>
              <input
                type="text"
                name="subject"
                className="contact-input"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="contact-field">
              <label className="contact-label">message</label>
              <textarea
                name="message"
                className="contact-textarea"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="contact-submit">send message</button>
          </form>
        </div>

        <div className="page-footer-back">
          <Link to="/" className="back-btn">← BACK</Link>
        </div>
      </div>
    </PortfolioLayout>
  );
}
