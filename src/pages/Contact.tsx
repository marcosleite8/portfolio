import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-[70vh]">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-gray-400">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out directly through email or LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        {/* Email */}
        <a 
          href="mailto:marcosleite.8@hotmail.com"
          className="bg-[#25282E] rounded-3xl p-8 border border-white/5 flex flex-col items-center text-center group hover:bg-[#1E2126] transition-all duration-300"
        >
          <div className="w-16 h-16 bg-[#1E2126] rounded-2xl flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Mail className="text-[#0A66C2]" size={28} />
          </div>
          <h3 className="text-white font-medium text-lg mb-2">Email</h3>
          <p className="text-gray-400 group-hover:text-white transition-colors flex items-center gap-2 justify-center">
            Send a message <ExternalLink size={14} />
          </p>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/marcos-fs-leite" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25282E] rounded-3xl p-8 border border-white/5 flex flex-col items-center text-center group hover:bg-[#1E2126] transition-all duration-300"
        >
          <div className="w-16 h-16 bg-[#1E2126] rounded-2xl flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Linkedin className="text-[#0A66C2]" size={28} />
          </div>
          <h3 className="text-white font-medium text-lg mb-2">LinkedIn</h3>
          <p className="text-gray-400 group-hover:text-white transition-colors flex items-center gap-2 justify-center">
            View profile <ExternalLink size={14} />
          </p>
        </a>
      </div>
    </div>
  );
}
