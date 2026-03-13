import React from 'react';
import { Server, Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Web Portal (ANACOM)",
      type: "Professional Project",
      company: "Claranet Portugal",
      description: "Development of an enterprise web portal using Microsoft Power Pages integrated with Dataverse for data management and access. Implementation of custom logic using JavaScript and Liquid.",
      tech: ["Power Pages", "Dataverse", "JavaScript", "Liquid", "REST API"],
      icon: <Server size={24} className="text-[#0A66C2]" />,
      link: null
    },
    {
      title: "Coming Soon",
      type: "Personal Project",
      company: "GitHub",
      description: "More projects will be added here soon. Stay tuned for updates on my latest open-source contributions and personal developments.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      icon: <Code2 size={24} className="text-purple-400" />,
      link: null
    }
  ];

  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-sm text-gray-400">A collection of my professional and personal projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#25282E] rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden group hover:bg-[#1E2126] transition-all duration-500 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-[#1E2126] rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#1E2126] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2] transition-colors border border-white/5">
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <div className="relative z-10 flex-1">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A66C2]">{project.type}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#93C5FD] transition-colors">{project.title}</h3>
                <span className="text-xs text-gray-400">{project.company}</span>
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-[#1E2126] border border-white/10 text-gray-300 text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
