import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Wrench, Book, Briefcase, Github, FolderGit2, Mail } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#121417] text-white p-4 pb-28 md:p-8 md:pb-32 font-sans flex items-start justify-center relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FF7A59]/20 rounded-full blur-[120px]"></div>

      {/* Main Container */}
      <div className="w-full max-w-7xl bg-[#1E2126]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col relative z-10 shadow-2xl my-auto min-h-[85vh]">
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto pb-12 custom-scrollbar">
          <Outlet />
        </div>

        {/* Floating Bottom Navigation */}
        <div className="fixed bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#2A2D35]/90 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-6 py-3 flex items-center gap-4 md:gap-6 shadow-2xl z-50 w-max max-w-[95vw] overflow-x-auto custom-scrollbar">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem to="/skills" icon={<Wrench size={18} />} label="Skills" />
          <NavItem to="/ebooks" icon={<Book size={18} />} label="Ebooks" />
          <NavItem to="/portfolio" icon={<Briefcase size={18} />} label="Portfolio" />
          <NavItem to="/projects" icon={<FolderGit2 size={18} />} label="Projects" />
          <NavItem to="/github" icon={<Github size={18} />} label="GitHub" />
          <NavItem to="/contact" icon={<Mail size={18} />} label="Contact" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[#FF7A59]' : 'text-gray-400 hover:text-white'}`
      }
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </NavLink>
  );
}
