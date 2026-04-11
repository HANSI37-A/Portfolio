import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) =>
  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900/30 border-t border-slate-800/50">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="lg:col-span-2 space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a
                  href="mailto:tharaki115h@gmail.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors">
                  
                  tharaki115h@gmail.com
                </a>

              </div>
            </div>

              <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone size={24} />
              </div>

               <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-slate-400">+94 71 480 9039</p>
              </div>
            </div>
             

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-slate-400">Walasmulla, Sri Lanka</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <h3 className="text-white font-semibold mb-4">Social Profiles</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/HANSI37-A"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                  
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hansi-tharaki-0a177031a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                  
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/hansitharaki?igsh=cGhodjVqcmE5Njk="
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                  
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="lg:col-span-3">
            
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300">
                    
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="John Doe" />
                  
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300">
                    
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="john@example.com" />
                  
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-300">
                  
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="Project Inquiry" />
                
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-300">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..." />
                
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                
                {isSubmitting ?
                <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" /> :
                isSubmitted ?
                'Message Sent!' :

                'Send Message'
                }
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}