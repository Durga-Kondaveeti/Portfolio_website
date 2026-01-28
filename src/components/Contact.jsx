import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To show specific validation errors

  // Helper function to validate email format
  const validateEmail = (email) => {
    // Regex: checks for 'chars' + '@' + 'chars' + '.' + 'chars'
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage('sending'); // Clear previous errors

    // 1. Get the email value from the form
    const emailValue = form.current.user_email.value;

    // 2. Run the strict validation
    if (!validateEmail(emailValue)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g., user@domain.com).');
      return; // STOP HERE! Do not send to EmailJS
    }

    setStatus('sending');

    // 3. If valid, proceed to send
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.error(error);
          setStatus('error');
          setErrorMessage('Failed to send. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Get In Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        
        {/* Name */}
        <input 
          type="text" 
          name="user_name" 
          placeholder="Name" 
          required 
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
        />
        
        {/* Email - Note: type="email" is helpful but we add JS validation too */}
        <input 
          type="email" 
          name="user_email" 
          placeholder="Email" 
          required 
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
        />

        {/* Phone Number */}
        <input 
          type="tel" 
          name="user_phone" 
          placeholder="Phone Number (Optional)" 
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
        />

        {/* Message */}
        <textarea 
          name="message" 
          placeholder="Message" 
          rows="5" 
          required 
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
        ></textarea>

        <button 
          type="submit" 
          className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-blue-500/20"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        
        {status === 'success' && (
          <p className="text-green-600 text-center font-medium">Message sent successfully!</p>
        )}
        
        {status === 'error' && (
          <p className="text-red-600 text-center font-medium">
            {errorMessage || 'Failed to send. Please try again.'}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;