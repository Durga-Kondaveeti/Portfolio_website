import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your actual keys if you haven't already
    emailjs.sendForm(
      'service_evcsc4i', // Service ID
      'template_qhbya7e', //Template ID 
      form.current, 
      'XURS5dFmO5nQFpXiz' // Public Key
    )
      .then((result) => {
          setStatus('success');
          form.current.reset();
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
        <input 
          type="text" 
          name="user_name" 
          placeholder="Name" 
          required 
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
        />
        
        {/* Email */}
        <input 
          type="email" 
          name="user_email" 
          placeholder="Email" 
          required 
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
        />

        {/* NEW: Phone Number */}
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
        
        {status === 'success' && <p className="text-green-600 text-center font-medium">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-600 text-center font-medium">Failed to send. Please try again.</p>}
      </form>
    </section>
  );
};

export default Contact;