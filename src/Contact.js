import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PortfolioLayout from './components/PortfolioLayout';

export default function Contact() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        'service_tpbcnrq',    // ← EmailJSのService ID
        'template_9g3v4t5',   // ← EmailJSのTemplate ID
        {
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        '2hK9mfmK0lXyX7rO1'     // ← EmailJSのPublic Key
      );
      setSent(true);
    } catch (error) {
      alert('送信に失敗しました。時間をおいて再試行してください。');
    }

    setSending(false);
  };

  return (
    <PortfolioLayout>
      <div className="contact-page">
        <div className="contact-inner">
          {sent ? (
            <p>MESSAGE SENT. Thank you, I will reply soon.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label className="contact-label">email</label>
                <input
                  type="email"
                  name="email"
                  className="contact-input"
                  value={form.email}
                  onChange={handleChange}
                  required
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
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">message</label>
                <textarea
                  name="message"
                  className="contact-textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact-submit" disabled={sending}>
                {sending ? 'sending...' : 'send message'}
              </button>
            </form>
          )}
        </div>

        <div className="page-footer-back">
          <Link to="/" className="back-btn">← BACK</Link>
        </div>
      </div>
    </PortfolioLayout>
  );
}
