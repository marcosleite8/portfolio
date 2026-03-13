import React from 'react';
import { Github as GithubIcon, Star, GitFork, ExternalLink } from 'lucide-react';

export default function Github() {
  // Placeholder data for GitHub repositories
  // You can replace this with a fetch to the GitHub API if desired
  const repositories = [
    {
      name: "power-pages-templates",
      description: "A collection of reusable Liquid and JavaScript snippets for Microsoft Power Pages development.",
      language: "Liquid / JavaScript",
      stars: 12,
      forks: 3,
      url: "#"
    },
    {
      name: "dataverse-api-wrapper",
      description: "A lightweight wrapper for interacting with the Dataverse Web API using standard HTTP requests.",
      language: "TypeScript",
      stars: 8,
      forks: 1,
      url: "#"
    },
    {
      name: "portfolio-website",
      description: "My personal portfolio website built with React, Tailwind CSS, and a Bento Box design.",
      language: "TypeScript",
      stars: 5,
      forks: 0,
      url: "#"
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
