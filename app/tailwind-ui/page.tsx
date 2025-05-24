import React from 'react';

const PrintablePortfolio = () => {
  return (
    <div className="w-full bg-white text-gray-800 font-sans print:max-w-full print:m-0 print:p-0">
      {/* Print-optimized A4 container with refined padding and layout */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none print:max-w-full">
        
        {/* Elegant gradient banner with subtle animation */}
        <div className="h-10 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 print:h-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjUpIi8+PC9nPjwvc3ZnPg==')] opacity-20 print:hidden"></div>
        </div>
        
        {/* Enhanced header with improved visual hierarchy and elegant styling */}
        <header className="flex flex-col md:flex-row px-8 pt-10 pb-8 relative print:flex-row print:pt-4 print:pb-4 print:px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="w-36 h-36 overflow-hidden rounded-full border-4 border-white shadow-lg mr-6 mb-4 md:mb-0 flex-shrink-0 absolute md:relative top-0 md:top-auto transform -translate-y-1/2 md:transform-none md:translate-y-0 left-8 md:left-auto bg-white print:w-28 print:h-28 print:relative print:transform-none print:translate-y-0 print:left-auto print:shadow-none print:border-2 ring-4 ring-blue-100 ring-opacity-50">
            <img 
              src="https://bku0cm0nci.ufs.sh/f/Zj1Zt2SVfavcs5tdn6bA5RZmOrulFvbt0M7Lo6HWnI9Txcai" 
              alt="Ludovick Konyo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow text-center md:text-left md:pl-6 mt-12 md:mt-0 print:text-left print:pl-6 print:mt-0">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight print:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 mb-1">LUDOVICK KONYO</h1>
            <h2 className="text-xl font-semibold mb-3 print:text-lg print:mb-2 text-blue-600 tracking-wide">Software Developer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-3 print:grid-cols-3 print:gap-1 print:text-xs">
              <div className="flex items-center bg-blue-50 rounded-full px-3 py-1.5 shadow-sm">
                <svg className="w-4 h-4 text-blue-600 mr-2 print:w-3 print:h-3 print:mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-gray-700 font-medium">developer@ludovick.site</span>
              </div>
              <div className="flex items-center bg-blue-50 rounded-full px-3 py-1.5 shadow-sm">
                <svg className="w-4 h-4 text-blue-600 mr-2 print:w-3 print:h-3 print:mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className="text-gray-700 font-medium">+255746828843</span>
              </div>
              <div className="flex items-center bg-blue-50 rounded-full px-3 py-1.5 shadow-sm">
                <svg className="w-4 h-4 text-blue-600 mr-2 print:w-3 print:h-3 print:mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 font-medium">Dar-es-salaam, Tanzania</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 print:justify-start print:space-x-3 print:mt-2 print:text-xs">
              <a href="https://www.linkedin.com/in/ludovick-konyo-186504252/" className="text-blue-600 hover:text-blue-800 flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-blue-100">
                <svg className="w-5 h-5 mr-1.5 print:w-3 print:h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.392 0-1.601 1.086-1.601 2.207v4.27h-2.667V8.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v3.715zM7 8.75H4.333v7.588H7V8.75zM5.667 4.5a1.542 1.542 0 11-3.085 0 1.542 1.542 0 013.085 0z" clipRule="evenodd"></path>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/developer006tz" className="text-blue-600 hover:text-blue-800 flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-blue-100">
                <svg className="w-5 h-5 mr-1.5 print:w-3 print:h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                </svg>
                GitHub
              </a>
              <a href="http://ludovick.site/" className="text-blue-600 hover:text-blue-800 flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-blue-100">
                <svg className="w-5 h-5 mr-1.5 print:w-3 print:h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                </svg>
                Portfolio
              </a>
            </div>
          </div>
        </header>
        
        <div className="px-8">
          {/* Professional Summary with improved typography and spacing */}
          <section className="mb-6 mt-4">
            <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
              </svg>
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-sm leading-relaxed">
              Versatile Full Stack Software Engineer with 3+ years of experience developing robust web and mobile applications across diverse technology stacks. 
              Demonstrated expertise in both frontend and backend development with a proven track record of delivering scalable, user-centric solutions. 
              Combines strong technical acumen with creative design capabilities to produce comprehensive digital products. 
              Known for rapid adaptability to new technologies and exceptional problem-solving abilities.
            </p>
          </section>
          
          {/* Skills with modern grid layout and visual enhancements */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
              </svg>
              TECHNICAL EXPERTISE
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="mb-3">
                    <h4 className="font-semibold mb-2 text-indigo-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                      Frontend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">React.js</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Vue.js</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Nuxt.js</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">JavaScript/TypeScript</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Flutter</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">React Native</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold mb-2 text-indigo-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                      </svg>
                      Backend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Express.js</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Nest.js</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">PHP (Laravel)</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Java (Spring Boot)</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">RESTful API Design</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-3">
                    <h4 className="font-semibold mb-2 text-indigo-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      Database Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">PostgreSQL</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">MySQL</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">MongoDB</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold mb-2 text-indigo-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                      </svg>
                      DevOps & Tooling
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Git</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">GitHub</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Gitlab</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">CI/CD Pipelines</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Docker</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-indigo-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                      </svg>
                      Design & Creative
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">Adobe Illustrator</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">Photoshop</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">UI/UX Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Experience with timeline design */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
              PROFESSIONAL EXPERIENCE
            </h3>
            
            <div className="relative border-l-2 border-blue-200 pl-6 ml-3">
              <div className="mb-6 relative">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900">Senior Software Engineer</h4>
                    <p className="text-blue-600 font-medium text-sm">Ona Africa Limited</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0">June 2024 - Present</span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1">
                  <li>Architected and developed Sasa Social Network, implementing real-time features</li>
                  <li>Led development of LiveBusiness platform for 50+ corporate clients</li>
                  <li>Engineered My Doctor 24-hour telemedicine application with secure video consultations</li>
                  <li>Developed company CRM system, increasing sales team efficiency by 35%</li>
                </ul>
              </div>
              
              {/* Second page - adding page break and proper spacing */}
              <div className="mb-6 relative print:mt-0 print:pt-8 print:break-before-page">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900">Backend Engineer</h4>
                    <p className="text-blue-600 font-medium text-sm">Gpitg Limited</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0">February 2024 - June 2024</span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1">
                  <li>Developed Afya EHMS, a comprehensive health management system</li>
                  <li>Designed and implemented RESTful APIs for third-party integrations</li>
                  <li>Engineered secure data storage solutions for sensitive medical information</li>
                  <li>Optimized database queries, reducing system response time by 45%</li>
                </ul>
              </div>
              
              <div className="mb-6 relative">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900">Software Developer (Contract)</h4>
                    <p className="text-blue-600 font-medium text-sm">Conveyance Logistics Limited</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0">October 2023 - February 2024</span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1">
                  <li>Developed shipping portal using Laravel, increasing efficiency by 30%</li>
                  <li>Created and maintained company website and internal systems</li>
                  <li>Implemented secure authentication and role-based access control</li>
                  <li>Established automated reporting systems reducing manual work by 65%</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900">Software Developer</h4>
                    <p className="text-blue-600 font-medium text-sm">Shulesoft Limited</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0">November 2022 - October 2023</span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1">
                  <li>Contributed to Shulesoft School Management System used by 100+ institutions</li>
                  <li>Developed Parent Experience Mobile App with 4.7/5 user satisfaction rating</li>
                  <li>Built Shule Market e-commerce platform for educational resources</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Projects Section with card design */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              FEATURED PROJECTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <div className="bg-white border border-blue-100 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-700 mb-1">Way Implex Shipping Portal</h4>
                <div className="flex items-center mb-2">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">Laravel</span>
                  <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded-full">Postgresql</span>
                </div>
                <p className="text-gray-700 text-sm">Comprehensive shipping management system with secure authentication, tracking, and reporting features</p>
              </div>
              
              <div className="bg-white border border-blue-100 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-700 mb-1">Kapinga Designs Portfolio & CMS</h4>
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Nest.js</span>
                </div>
                <p className="text-gray-700 text-sm">Modern portfolio with custom CMS, admin dashboard and analytics</p>
              </div>
              
              <div className="bg-white border border-blue-100 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-700 mb-1">CTMC Mining Consultancy Portal</h4>
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Express.js</span>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Mysql</span>
                </div>
                <p className="text-gray-700 text-sm">Comprehensive platform for mining consultancy services in Tanzania and DRC with regulatory compliance tools, appointment scheduling, and resource management</p>
              </div>
              
              {/* Third page - adding page break and spacing */}
              <div className="bg-white border border-blue-100 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow print:mt-0 print:pt-8 print:break-before-page">
                <h4 className="font-semibold text-blue-700 mb-1">Wecare Health Portal</h4>
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Vue.js</span>
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">Laravel</span>
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Nuxt.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded-full">Postgresql</span>
                </div>
                <p className="text-gray-700 text-sm">Professional healthcare platform for nursing home services, featuring patient management, wound care tracking, and home-based recovery support with doctor-directed care protocols</p>
              </div>
            </div>
            
            <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
              </svg>
              Personal Projects
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:bg-blue-50 transition-colors">
                <h5 className="font-medium text-blue-700 mb-1">Social Smarttech Website</h5>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Nuxt.js</span>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:bg-blue-50 transition-colors">
                <h5 className="font-medium text-blue-700 mb-1">Personal Portfolio</h5>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Next.js</span>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:bg-blue-50 transition-colors">
                <h5 className="font-medium text-blue-700 mb-1">Logistics Management</h5>
                <div className="flex items-center space-x-1">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">React.js</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Spring Boot</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Education & Additional Info with improved styling */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
                EDUCATION
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900">Bachelor of Science in Information Technology</h4>
                <p className="text-blue-600 font-medium text-sm">National Insitute of Tansport (NIT)</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full">2019 - 2022</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
                </svg>
                SOFT SKILLS
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Excellent written and verbal communication</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Strategic problem-solving</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Rapid adaptation to new technologies</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Team collaboration and leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Languages section with elegant styling */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path>
              </svg>
              LANGUAGES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 shadow-sm transition-all hover:shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-indigo-800">English</h4>
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Professional</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full w-4/5"></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Business communication, technical documentation, and professional presentations</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100 shadow-sm transition-all hover:shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-emerald-800">Swahili</h4>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2.5 rounded-full w-full"></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Complete fluency with cultural nuances, idioms, and professional terminology</p>
              </div>
            </div>
          </section>
        </div>
        
        {/* Footer with references and subtle design */}
        
        <footer className="text-center py-4 px-8   bg-white">
        <h3 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b-2 border-blue-100 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                </svg>
                REFEREES
              </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full print:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center shadow-sm w-full">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">EK</div>
                <div className="text-left">
                  <p className="font-medium text-md text-gray-800">Elisate Kanza</p>
                  <p className="text-md text-gray-600">Manager, Conveyance Logistics Limited</p>
                  <p className="text-md text-blue-600">info@conveyance.co.tz</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center shadow-sm w-full">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">PS</div>
                <div className="text-left">
                  <p className="font-medium text-md text-gray-800">Peter Sanga</p>
                  <p className="text-md text-gray-600">Clearing Officer, GPSA, Tanzania</p>
                  <p className="text-md text-blue-600">perersanga@gmail.com</p>
                </div>
              </div>
          </div>

          <div className="text-sm text-gray-600 mt-6 md:mb-0">
              <p className="font-medium">Last updated: March 2025</p>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default PrintablePortfolio;