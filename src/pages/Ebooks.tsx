import React from 'react';
import { Book, Download, ExternalLink } from 'lucide-react';

export default function Ebooks() {
  const ebooks = [
    {
      title: "Power Pages – Definitive Architecture",
      description: "An in-depth technical guide on architecture and solution development with Microsoft Power Pages, covering topics such as data modeling in Dataverse, API integrations, security, and best practices for enterprise portals.",
      coverColor: "from-blue-600 to-blue-900",
      imageUrl: "https://drive.google.com/thumbnail?id=10N0gSR8Vf6fx8XCJ5zp14yFoLBuloMJa&sz=w800",
      fileUrl: "https://drive.google.com/file/d/10N0gSR8Vf6fx8XCJ5zp14yFoLBuloMJa/view?usp=sharing",
      date: "2024"
    }
    // Future ebooks can be added here
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Publications & Ebooks</h1>
        <p className="text-sm text-gray-400">Technical and architectural guides written by me.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ebooks.map((ebook, index) => (
          <a 
            key={index}
            href={ebook.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25282E] rounded-3xl p-6 border border-white/5 hover:border-blue-500/50 transition-all group flex flex-col h-full"
          >
            <div className={`w-full aspect-[3/4] rounded-2xl bg-gradient-to-br ${ebook.coverColor} mb-6 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-blue-500/20 transition-shadow`}>
              {ebook.imageUrl ? (
                <>
                  <img 
                    src={ebook.imageUrl} 
                    alt={ebook.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2126] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <ExternalLink size={16} />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="p-6 flex flex-col items-center justify-center relative z-10 w-full h-full">
                    <Book size={48} className="text-white/80 mb-4" />
                    <h3 className="text-xl font-bold text-white leading-tight">{ebook.title}</h3>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ExternalLink size={16} />
                  </div>
                </>
              )}
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{ebook.title}</h3>
                <span className="text-xs text-gray-500 font-mono">{ebook.date}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                {ebook.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mt-auto">
                <Download size={14} />
                <span>Open PDF</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
