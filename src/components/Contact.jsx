import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

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
    <section id="contact" className="py-32 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-primary-950 tracking-tight italic">Let's Connect</h2>
          <p className="text-primary-500 mt-4 text-xl font-medium">Have a project in mind or just want to say hi?</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 rounded-[3rem] border-primary-50 shadow-2xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            
            {/* Name */}
            <div className="group">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 mb-2 block ml-1">Full Name</label>
              <input 
                type="text" 
                name="user_name" 
                placeholder="Durga Kondaveeti" 
                required 
                className="w-full bg-white p-4 border-2 border-primary-100 rounded-[1.25rem] focus:ring-4 focus:ring-accent-500/10 focus:border-accent-500 outline-none transition-all font-bold text-primary-950 placeholder:text-primary-300 shadow-sm" 
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 mb-2 block ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="name@example.com" 
                  required 
                  onChange={() => setErrors({ ...errors, email: '' })}
                  className={`w-full bg-white p-4 border-2 rounded-[1.25rem] focus:ring-4 outline-none transition-all font-bold text-primary-950 placeholder:text-primary-300 shadow-sm ${
                    errors.email ? 'border-red-500 focus:ring-red-500/10' : 'border-primary-100 focus:ring-accent-500/10 focus:border-accent-500'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs font-bold mt-2 ml-1 italic">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 mb-2 block ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="user_phone" 
                  placeholder="+1 (555) 000-0000" 
                  required
                  onChange={() => setErrors({ ...errors, phone: '' })}
                  className={`w-full bg-white p-4 border-2 rounded-[1.25rem] focus:ring-4 outline-none transition-all font-bold text-primary-950 placeholder:text-primary-300 shadow-sm ${
                    errors.phone ? 'border-red-500 focus:ring-red-500/10' : 'border-primary-100 focus:ring-accent-500/10 focus:border-accent-500'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs font-bold mt-2 ml-1 italic">{errors.phone}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 mb-2 block ml-1">Your Message</label>
              <textarea 
                name="message" 
                placeholder="Tell me about your project..." 
                rows="5" 
                required 
                className="w-full bg-white p-4 border-2 border-primary-100 rounded-[1.25rem] focus:ring-4 focus:ring-accent-500/10 focus:border-accent-500 outline-none transition-all font-bold text-primary-950 placeholder:text-primary-300 resize-none shadow-sm"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary-950 text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest hover:bg-primary-800 transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Dispatching Message...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-600 text-center font-black uppercase tracking-widest text-xs mt-6 bg-green-50 py-3 rounded-xl border border-green-100"
              >
                Message Received! I'll be in touch soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-red-600 text-center font-black uppercase tracking-widest text-xs mt-6 bg-red-50 py-3 rounded-xl border border-red-100"
              >
                Transmission Failed. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
