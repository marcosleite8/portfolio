import React from 'react';
import { Target } from 'lucide-react';
import { SiGithub, SiTerraform, SiKubernetes, SiGooglecloud, SiJavascript, SiHtml5, SiScrumalliance, SiDotnet, SiGoogle } from 'react-icons/si';
import { FaAws, FaMicrosoft, FaDatabase } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { IconType } from 'react-icons';

export default function Skills() {
  const skills = [
    {
      title: "Microsoft Power Pages",
      icon: <FaMicrosoft size={32} />,
      color: "text-[#FF7A59]",
      bg: "bg-[#FF7A59]/10",
      border: "hover:border-[#FF7A59]/50",
      description: "Development of enterprise portals, customization with Liquid, JavaScript, and HTML. REST API integration for external communication."
    },
    {
      title: "Dataverse",
      icon: <FaDatabase size={32} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "hover:border-blue-500/50",
      description: "Complex data modeling, security management, roles, and access control. Creation of scalable enterprise solutions."
    },
    {
      title: "Power Platform",
      icon: <FaMicrosoft size={32} />,
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "hover:border-green-500/50",
      description: "Creation of Power Apps and Power Automate flows for business process automation and systems integration."
    },
    {
      title: "JavaScript & HTML",
      icon: (
        <div className="flex gap-2">
          <SiJavascript size={28} />
          <SiHtml5 size={28} />
        </div>
      ),
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "hover:border-yellow-500/50",
      description: "Frontend web development, creation of reusable components and snippets to reduce code duplication."
    },
    {
      title: "Cybersecurity Basics",
      icon: <SiGoogle size={32} />,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "hover:border-purple-500/50",
      description: "Google Cybersecurity Specialization, Introduction to Cybersecurity. Focus on security in systems architecture."
    },
    {
      title: "Agile Methodologies",
      icon: <SiScrumalliance size={32} />,
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      border: "hover:border-pink-500/50",
      description: "Teamwork with Scrum, using Azure DevOps for task management, sprints, and version control."
    },
    {
      title: "C# & .NET Framework",
      icon: (
        <div className="flex gap-2">
          <TbBrandCSharp size={32} />
          <SiDotnet size={32} />
        </div>
      ),
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "hover:border-indigo-500/50",
      description: "Development of robust applications, RESTful APIs, and backend services using C# and the .NET ecosystem."
    }
  ];

  interface Certification {
    name: string;
    vendor: string;
    color: string;
    icon: IconType;
  }

  const certifications: Certification[] = [
    { name: "Microsoft Certified: Power Platform Fundamentals (PL-900)", vendor: "Microsoft", color: "text-[#00A4EF]", icon: FaMicrosoft },
    { name: "Microsoft Certified: Power Platform Functional Consultant Associate (PL-200)", vendor: "Microsoft", color: "text-[#00A4EF]", icon: FaMicrosoft },
    { name: "Microsoft Certified: Power Platform Developer Associate (PL-400)", vendor: "Microsoft", color: "text-[#00A4EF]", icon: FaMicrosoft },
    { name: "AWS Certified Cloud Practitioner (CLF-C02)", vendor: "AWS", color: "text-[#FF9900]", icon: FaAws },
    { name: "AWS Certified Solutions Architect – Associate (SAA-C03)", vendor: "AWS", color: "text-[#FF9900]", icon: FaAws },
    { name: "AWS Certified Developer – Associate (DVA-C02)", vendor: "AWS", color: "text-[#FF9900]", icon: FaAws },
    { name: "GitHub Foundations", vendor: "GitHub", color: "text-white", icon: SiGithub },
    { name: "HashiCorp Certified: Terraform Associate", vendor: "HashiCorp", color: "text-[#844FBA]", icon: SiTerraform },
    { name: "Certified Kubernetes Administrator (CKA) / Application Developer (CKAD)", vendor: "CNCF", color: "text-[#326CE5]", icon: SiKubernetes },
    { name: "Google Cloud Associate Cloud Engineer", vendor: "Google Cloud", color: "text-[#4285F4]", icon: SiGooglecloud }
  ];

  return (
    <div className="flex flex-col gap-12 h-full">
      {/* Skills Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Modules</h1>
          <p className="text-sm text-gray-400">Technical skills and tools I master.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`bg-[#25282E] rounded-3xl p-6 border border-white/5 transition-colors group flex flex-col items-center text-center ${skill.border}`}>
              <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${skill.color} ${skill.bg}`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{skill.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Target className="text-[#FF7A59]" size={28} />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight">Ongoing Certifications</h2>
            <p className="text-sm text-gray-400">Learning goals and certifications I am currently pursuing.</p>
          </div>
        </div>

        <div className="bg-[#25282E] rounded-3xl p-6 md:p-8 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-4 bg-[#1E2126] rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  {/* @ts-ignore - react-icons types sometimes miss className */}
                  <Icon className={`shrink-0 mt-0.5 ${cert.color}`} size={20} />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold leading-tight">{cert.name}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{cert.vendor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
