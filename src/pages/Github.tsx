import React from 'react';
import { Github as GithubIcon, Star, GitFork, ExternalLink } from 'lucide-react';

export default function Github() {
  // Placeholder data for GitHub repositories
  // You can replace this with a fetch to the GitHub API if desired
  const repositories = [
    {
      name: "Dataverse JS SDK v1.2 - Power Pages Edition",
      description: "A lightweight, environment-agnostic JavaScript SDK to simplify CRUD operations on the Dataverse Web API across all Power Platform environments, optimized for Power Pages with `webapi.safeAjax` for automatic token security and robust error handling.",
      language: "JavaScript",
      tech: ["Power Pages", "Power Apps", "Dataverse", "JavaScript", "Liquid", "REST API"],
      stars: 5,
      forks: 0,
      url: "https://github.com/marcosleite8/dataverse-js-sdk/blob/main/dataverse-sdk_v2.js"
    },
    {
      name: "My Portfolio Website",
      description: "My personal portfolio website built with React, Tailwind CSS, and a Bento Box design.",
      language: "TypeScript",
      stars: 5,
      forks: 0,
      url: "https://github.com/marcosleite8/portfolio"
    }
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <GithubIcon size={32} className="text-white" />
          <h1 className="text-3xl font-bold tracking-tight">GitHub</h1>
        </div>
        <p className="text-sm text-gray-400">Public repositories and open-source contributions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repositories.map((repo, index) => (
          <a 
            key={index}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25282E] rounded-3xl p-6 border border-white/5 hover:border-blue-500/50 transition-all group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-blue-400 group-hover:underline">{repo.name}</h3>
              <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors" />
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">
              {repo.description}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <span>{repo.language}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={14} />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={14} />
                <span>{repo.forks}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-[#1E2126] border border-white/10 text-gray-300 text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>

      <div className="mt-8 bg-[#1E2126] border border-white/5 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
        <p className="text-sm text-gray-400 mb-4">Visit my GitHub profile to see all projects.</p>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 mx-auto w-fit"
        >
          <GithubIcon size={16} />
          View Full Profile
        </a>
      </div>
    </div>
  );
}
