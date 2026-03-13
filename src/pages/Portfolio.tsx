import React from 'react';
import { Briefcase, Calendar, Building2, GraduationCap, BookOpen } from 'lucide-react';

export default function Portfolio() {
  const experiences = [
    {
      company: "Claranet Portugal",
      client: "ANACOM",
      role: "Web Application Developer (Internship)",
      period: "August 2024 - October 2024 (3 months)",
      location: "Lisbon, Portugal",
      description: [
        "Participation in the development of an enterprise web portal using Microsoft Power Pages integrated with Dataverse for data management and access.",
        "Implementation of custom logic using JavaScript and Liquid to extend functionalities and improve user interaction.",
        "Integration with external services through REST APIs using HTTP requests (GET / POST) for communication and data exchange between systems.",
        "Creation of reusable components and snippets in HTML and JavaScript to reduce code duplication and improve development efficiency.",
        "Contribution to the development of internal utilities (SDKs) aimed at standardizing integrations and reducing logic repetition in the project.",
        "Teamwork in an Agile (Scrum) environment, using Azure DevOps for task management and version control."
      ],
      tech: ["Power Pages", "Dataverse", "JavaScript", "HTML", "Liquid", "Azure DevOps", "XrmToolBox"]
    },
    {
      company: "MLTech",
      role: "CEO",
      period: "January 2019 - December 2021 (3 years)",
      location: "Portugal",
      description: [
        "Relations with suppliers",
        "Configuration and maintenance of computer equipment",
        "Computer assembly",
        "Sale of computer equipment",
        "Sending equipment by courier",
        "Web Development",
        "Windows Applications"
      ],
      tech: ["Hardware", "Web Development", "Management"]
    },
    {
      company: "BeiraMar Café",
      role: "Restaurant Owner",
      period: "September 2016 - May 2018 (1 year 9 months)",
      location: "Almada, Setúbal, Portugal",
      description: ["Business management and daily restaurant operations."],
      tech: ["Management", "Operations"]
    },
    {
      company: "SapienSul",
      role: "Junior SAP ABAP Consultant",
      period: "January 2014 - December 2014 (1 year)",
      location: "Almada, Setúbal, Portugal",
      description: [
        "Knowledge Workbench",
        "Creation of XML files",
        "Custom SAP table updates",
        "Maintenance",
        "Programming"
      ],
      tech: ["SAP ABAP", "XML", "Programming"]
    }
  ];

  const education = [
    {
      institution: "Universidade Aberta",
      degree: "Bachelor's Degree in Computer Engineering",
      period: "September 2024 - 2027 (Ongoing)",
      level: "Higher Education"
    },
    {
      institution: "CINEL - Centro de Formação Profissional",
      degree: "CET in Programming",
      period: "September 2022 - 2024",
      level: "Level 5",
      tech: ["C#", ".NET Framework", "Redes", "SQL Server"]
    },
    {
      institution: "IEFP",
      degree: "Programming Course",
      period: "September 2010 - May 2012",
      level: "Level 4",
      tech: [".NET", "C#", "C/C++", "Java", "COBOL", "MySQL"]
    }
  ];

  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Portfolio & Experience</h1>
        <p className="text-sm text-gray-400">My professional journey and academic background.</p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Professional Experience */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-[#FF7A59]" size={28} />
            <h2 className="text-2xl font-bold">Professional Experience</h2>
          </div>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-[#25282E] rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-[#FF7A59] font-medium">
                      <Building2 size={16} />
                      <span>{exp.company} {exp.client && `(Client: ${exp.client})`}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-400 gap-1">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-[#FF7A59] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="bg-[#1E2126] border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Background */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-blue-400" size={28} />
            <h2 className="text-2xl font-bold">Academic Background</h2>
          </div>
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-[#25282E] rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <BookOpen size={16} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-400 gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <span className="bg-[#1E2126] border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full w-fit md:ml-auto">
                      {edu.level}
                    </span>
                  </div>
                </div>
                {edu.tech && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                    {edu.tech.map((t, i) => (
                      <span key={i} className="bg-[#1E2126] border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
