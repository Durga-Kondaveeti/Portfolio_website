import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [errors, setErrors] = useState({}); // To track validation errors

  // 1. Validation Logic
  const validateForm = () => {
    const currentForm = new FormData(form.current);
    const email = currentForm.get('user_email');
    const phone = currentForm.get('user_phone');
    const newErrors = {};

    // Strict Email Regex (Standard Format)
    // Checks for: chars @ chars . chars (min 2 chars for domain)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com).";
    }

    // Phone Validation
    // Requirement: Starts with +1 and exactly 10 digits following
    const phoneRegex = /^\+1\d{10}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone must start with +1 and contain 10 digits (e.g., +15717483533).";
    }

    setErrors(newErrors);
    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // 2. Run Validation before sending
    if (!validateForm()) {
      return; // Stop execution if validation fails
    }

    setStatus('sending');

    emailjs.sendForm(
      'service_evcsc4i', 
      'template_qhbya7e', 
      form.current, 
      'XURS5dFmO5nQFpXiz'
    )
    
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setErrors({}); // Clear errors on success
      }, (error) => {
          console.error(error);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Get In Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        
        {/* Name */}
        <div>
          <input 
            type="text" 
            name="user_name" 
            placeholder="Name" 
            required 
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
          />
        </div>
        
        {/* Email */}
        <div>
          <input 
            type="email" 
            name="user_email" 
            placeholder="Email" 
            required 
            onChange={() => setErrors({ ...errors, email: '' })} // Clear error on typing
            className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition-all ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <input 
            type="tel" 
            name="user_phone" 
            placeholder="Phone (+1XXXXXXXXXX)" 
            required
            onChange={() => setErrors({ ...errors, phone: '' })} // Clear error on typing
            className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition-all ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="5" 
            required 
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-blue-500/20"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        
        {status === 'success' && <p className="text-green-600 text-center font-medium mt-4">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-600 text-center font-medium mt-4">Failed to send. Please try again.</p>}
      </form>
    </section>
  );
};

export default Contact;
