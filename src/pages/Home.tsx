import React from 'react';
import { Lock, ChevronRight, Book, Briefcase, Github, Globe, Linkedin, Server } from 'lucide-react';
import { FaMicrosoft, FaDatabase } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* --- ROW 1 --- */}
      
      {/* Brand */}
      <div className="lg:col-span-4 bg-[#25282E] rounded-3xl p-8 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-20 h-20 mb-4 text-blue-400">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" stroke="currentColor" strokeWidth="4" />
            <path d="M50 10 L50 50 L90 30" stroke="currentColor" strokeWidth="4" />
            <path d="M10 30 L50 50 L50 90" stroke="currentColor" strokeWidth="4" />
            <circle cx="80" cy="20" r="5" fill="currentColor" />
            <circle cx="95" cy="50" r="5" fill="currentColor" />
            <circle cx="80" cy="80" r="5" fill="currentColor" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Saevelis.com</h1>
        <p className="text-xs text-gray-400 tracking-widest uppercase text-center">
          Systems. Strategy. Architecture.<br/>(Coming Soon)
        </p>
      </div>

      {/* Skills */}
      <div className="lg:col-span-6 bg-[#25282E] rounded-3xl p-6 border border-white/5 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-gray-400 uppercase tracking-wider">Knowledge Modules</h2>
          <Link to="/skills" className="text-xs text-[#FF7A59] hover:underline flex items-center">View all <ChevronRight size={12}/></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          
          {/* Skill 1 */}
          <Link to="/skills" className="bg-[#1E2126] rounded-2xl p-5 border border-white/5 relative group hover:border-[#FF7A59]/50 transition-colors flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-4 text-[#FF7A59] bg-[#FF7A59]/10 rounded-lg flex items-center justify-center">
              <FaMicrosoft size={24} />
            </div>
            <h3 className="text-sm font-semibold mb-2">POWER PAGES</h3>
            <ul className="text-xs text-gray-400 space-y-1 flex-1">
              <li>Enterprise Portals</li>
              <li>Liquid & JavaScript</li>
              <li>REST API Integration</li>
            </ul>
            <button className="absolute bottom-4 right-4 w-6 h-6 bg-[#FF7A59] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={14} />
            </button>
          </Link>

          {/* Skill 2 */}
          <Link to="/skills" className="bg-[#1E2126] rounded-2xl p-5 border border-white/5 relative group hover:border-blue-500/50 transition-colors flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-4 text-blue-400 bg-blue-400/10 rounded-lg flex items-center justify-center">
              <FaDatabase size={24} />
            </div>
            <h3 className="text-sm font-semibold mb-2">DATAVERSE</h3>
            <ul className="text-xs text-gray-400 space-y-1 flex-1">
              <li>Data Modeling</li>
              <li>Security & Roles</li>
              <li>Enterprise Solutions</li>
            </ul>
            <button className="absolute bottom-4 right-4 w-6 h-6 bg-[#FF7A59] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={14} />
            </button>
          </Link>

          {/* Skill 3 */}
          <Link to="/skills" className="bg-[#1E2126] rounded-2xl p-5 border border-white/5 relative group hover:border-green-500/50 transition-colors flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-4 text-green-400 bg-green-400/10 rounded-lg flex items-center justify-center">
              <FaMicrosoft size={24} />
            </div>
            <h3 className="text-sm font-semibold mb-2">POWER PLATFORM</h3>
            <ul className="text-xs text-gray-400 space-y-1 flex-1">
              <li>Power Apps</li>
              <li>Power Automate</li>
              <li>Microsoft Ecosystem</li>
            </ul>
            <button className="absolute bottom-4 right-4 w-6 h-6 bg-[#FF7A59] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={14} />
            </button>
          </Link>

          {/* Skill 4 */}
          <Link to="/skills" className="bg-[#1E2126] rounded-2xl p-5 border border-white/5 relative group hover:border-yellow-500/50 transition-colors flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-4 text-yellow-400 bg-yellow-400/10 rounded-lg flex items-center justify-center">
              <SiGoogle size={24} />
            </div>
            <h3 className="text-sm font-semibold mb-2">CYBERSECURITY</h3>
            <ul className="text-xs text-gray-400 space-y-1 flex-1">
              <li>Google Certified</li>
              <li>Threat Intelligence</li>
              <li>Network Security</li>
            </ul>
            <button className="absolute bottom-4 right-4 w-6 h-6 bg-[#FF7A59] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={14} />
            </button>
          </Link>

        </div>
      </div>

      {/* Ebook */}
      <div className="lg:col-span-2 bg-[#25282E] rounded-3xl p-6 border border-white/5 flex flex-col items-center text-center">
        <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-4 self-start">PUBLICATION</h2>
        <Link to="/ebooks" className="flex-1 w-full bg-[#1E2126] rounded-xl border border-white/10 p-4 mb-4 relative overflow-hidden flex flex-col items-center justify-center group cursor-pointer">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 blur-xl group-hover:bg-blue-500/40 transition-colors"></div>
          <Book size={32} className="text-blue-400 mb-2" />
          <h3 className="text-xs font-bold uppercase">Power Pages</h3>
          <p className="text-[10px] text-gray-400 mt-1">Definitive Architecture</p>
        </Link>
        <Link to="/ebooks" className="w-full py-2 bg-[#FF7A59] hover:bg-[#ff633a] text-white text-xs font-bold rounded-lg transition-colors block text-center">
          VIEW PUBLICATION
        </Link>
      </div>

      {/* --- ROW 2 --- */}

      {/* Profile */}
      <div className="lg:col-span-4 bg-[#25282E] rounded-3xl p-6 border border-white/5 flex flex-col">
        <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-4"><span className="font-bold text-white">MARCOS LEITE</span> | POWER PLATFORM DEV</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl overflow-hidden bg-[#1E2126] aspect-[3/4] relative flex items-center justify-center border border-white/5">
            <img 
              src="/imagem_profile_1.png" 
              alt="Marcos Leite" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500 z-10" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[#93C5FD] text-[#1E3A8A] rounded-2xl p-4 flex-1 flex flex-col justify-center items-center text-center">
              <span className="text-3xl font-bold mb-1">10+</span>
              <span className="text-[10px] font-semibold uppercase leading-tight">Years of Experience in Tech</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/marcos-fs-leite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1E2126] rounded-2xl p-4 flex-1 border border-white/5 flex justify-center items-center group hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all"
            >
              <Linkedin size={48} className="text-[#0A66C2] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="bg-[#1E2126] rounded-2xl p-4 border border-white/5">
          <p className="text-xs text-gray-300 leading-relaxed">
            Developer focused on the Microsoft Power Platform ecosystem, with experience in developing enterprise portals using Power Pages and Dataverse.
          </p>
        </div>
      </div>

      {/* Experience / Hobby */}
      <Link to="/projects" className="lg:col-span-4 bg-[#25282E] text-white rounded-3xl p-6 flex flex-col relative overflow-hidden group transition-all duration-500 border border-white/5 hover:bg-[#1E2126]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-4 font-semibold relative z-10">EXPERIENCE & PROJECTS</h2>
        
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 py-4">
          <div className="w-32 h-32 bg-gradient-to-br from-[#0A66C2] to-blue-400 rounded-full shadow-2xl flex items-center justify-center relative mb-6 group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-black/10 rounded-full"></div>
            <Server size={40} className="text-white" />
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-1 text-white group-hover:text-[#93C5FD] transition-colors">Claranet Portugal (ANACOM)</h3>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
            Development of an enterprise web portal using Microsoft Power Pages integrated with Dataverse. REST API integration and Agile methodologies (Scrum).
          </p>
        </div>
      </Link>

      {/* Quote */}
      <div className="lg:col-span-2 bg-[#25282E] rounded-3xl p-6 border border-white/5 flex flex-col justify-center relative">
        <div className="text-[#FF7A59] text-4xl font-serif absolute top-4 left-4 opacity-50">"</div>
        <p className="text-sm text-gray-300 italic leading-relaxed relative z-10 mt-4 text-center">
          "System architecture, like a strategy game, is won in the transitions. I don't just build for the current requirement; I architect for the next evolution of the solution."
        </p>
      </div>

      {/* Portfolio & Github Links (Replaced Contact) */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Link to="/portfolio" className="flex-1 bg-[#25282E] rounded-3xl p-6 border border-white/5 flex flex-col items-center justify-center group hover:bg-[#1E2126] transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Briefcase size={32} className="text-[#FF7A59] mb-3" />
          <h3 className="text-sm font-bold uppercase tracking-wider">Portfolio</h3>
          <p className="text-[10px] text-gray-400 mt-1 text-center">View Projects & Experience</p>
        </Link>
        <Link to="/github" className="flex-1 bg-[#25282E] rounded-3xl p-6 border border-white/5 flex flex-col items-center justify-center group hover:bg-[#1E2126] transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Github size={32} className="text-blue-400 mb-3" />
          <h3 className="text-sm font-bold uppercase tracking-wider">GitHub</h3>
          <p className="text-[10px] text-gray-400 mt-1 text-center">Public Repositories</p>
        </Link>
      </div>

    </div>
  );
}
