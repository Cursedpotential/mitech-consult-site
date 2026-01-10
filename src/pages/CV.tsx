export default function CV() {
  const skills = {
    "Infrastructure & Networking": [
      "Network Design & Configuration",
      "Structured Cabling",
      "Firewall Management",
      "WAN/LAN",
      "IP Networking",
      "DNS",
      "VPN",
      "Network Security",
    ],
    "Systems & Administration": [
      "Server Management",
      "System Administration",
      "Active Directory",
      "Azure",
      "Intune",
      "ESXi",
      "Remote Desktop Protocol",
      "System Performance Monitoring",
    ],
    "Surveillance & Security": [
      "CCTV Systems",
      "IP Camera Installation",
      "Access Control Management",
      "Surveillance System Design",
      "Security System Experience",
    ],
    "Audio/Video & Automation": [
      "Commercial AV Installation",
      "Distributed Audio Systems",
      "Home/Building Automation",
      "Control4 Experience",
      "URC-Certified",
      "VOIP Deployments",
    ],
    "IoT & Emerging Tech": [
      "LoRaWAN",
      "Zigbee",
      "Z-Wave",
      "MQTT",
      "Smart Building Automation",
      "Connected Devices",
    ],
    "Technical Support": [
      "Desktop Support",
      "Remote Technical Support",
      "Hardware Support",
      "Software Troubleshooting",
      "Incident Management",
    ],
  };

  const workExperience = [
    {
      title: "Independent Consultant",
      company: "Cullen Technologies",
      location: "Flushing, MI",
      period: "2014 - June 2023",
      highlights: [
        "Provided comprehensive desktop support resolving software and hardware issues",
        "Implemented remote PC support solutions for seamless troubleshooting",
        "Managed networks by configuring routers, switches, and firewalls",
      ],
    },
    {
      title: "Owner/Operator",
      company: "SalemNet IT Solutions LLC",
      location: "Flint, MI",
      period: "2012 - 2020",
      highlights: [
        "Designed, deployed, and managed SMB networks with structured cabling",
        "Specialized in surveillance system design and installation",
        "Executed smart home installations with cutting-edge technology",
        "Spearheaded AV and automation solutions for bars and restaurants",
      ],
    },
    {
      title: "Installer/Technician",
      company: "Simply Technology, LLC",
      location: "Grosse Pointe, MI",
      period: "January 2015 - November 2019",
      highlights: [
        "Deployed cloud-based VoIP phone systems",
        "Installed and configured diverse surveillance products",
        "Led structured cabling projects with various cable types",
        "Established WiSP CPEs and PtP/PtMP networks",
        "Installed custom home AV and commercial A/V systems",
      ],
    },
    {
      title: "Installer/Contractor",
      company: "Intellitech Systems",
      location: "Troy, MI",
      period: "September 2014 - November 2019",
      highlights: [
        "Provided IT and networking consulting from equipment selection to deployment",
        "Managed end-to-end projects from design to implementation",
        "Designed purchase orders for equipment procurement",
        "Installed cabling and networking equipment",
      ],
    },
    {
      title: "IT Manager",
      company: "Joubran Management",
      location: "Flint, MI",
      period: "2011 - 2014",
      highlights: [
        "Managed installation and maintenance of security cameras",
        "Executed web and social marketing strategies",
        "Oversaw network and server management with data backups",
        "Provided desktop support and software deployment",
      ],
    },
  ];

  const education = [
    {
      degree: "Computer Networking (Some College)",
      school: "Baker College of Flint",
      period: "2010 - 2012",
    },
    {
      degree: "Computer Technician / A+ Certification Prep",
      school: "Genesee Area Skill Center",
      period: "August 2001 - June 2002",
    },
    {
      degree: "High School Diploma",
      school: "Genesee Area",
      period: "Completed",
    },
  ];

  const certifications = [
    "OSHA 10 (July 2022 - Present)",
    "CCNA",
    "Electrician Apprentice",
    "Driver's License (Non-CDL Class C)",
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white font-display">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 py-6 md:py-8 relative z-10">
        {/* Header */}
        <header className="mb-12 pt-2">
          <a href="/" className="inline-flex items-baseline gap-2 group mb-8">
            <span className="text-2xl font-display font-bold tracking-widest text-white uppercase">
              <span className="text-emerald-500 text-2xl leading-none">/</span>
              MiTech
            </span>
            <span className="text-sm font-mono font-normal tracking-wide text-gray-500 uppercase group-hover:text-blue-400 transition-colors">
              Consult
            </span>
          </a>
        </header>

        <main className="flex-grow">
          {/* CV Header */}
          <section className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-5xl font-bold text-white mb-2">Matthew Salem</h1>
            <p className="text-xl text-emerald-400 mb-4">IT Professional specializing in Low-Voltage System and Network Design</p>
            <p className="text-gray-400">Flint, MI | Authorized to work in the US for any employer</p>
            <div className="flex gap-6 mt-4 text-sm text-gray-500 font-mono">
              <span>📧 contact@mitechconsult.com</span>
              <span>📍 Willing to relocate: Troy, MI - Lansing, MI - Saginaw, MI</span>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 border-b border-blue-500 pb-2">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Experienced IT professional and low-voltage specialist with a strong foundation in networking, system design, and installation. Over 15 years of hands-on experience in network administration, surveillance systems, distributed audio/video, fixed wireless solutions, access control systems, and point-of-sale (POS) installation and programming.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Strong communication skills bridging technical teams and end-users. Committed to delivering creative solutions tailored to client budgets. Currently pursuing IT certifications and expanding knowledge of emerging technologies including IoT, LoRaWAN, and AI infrastructure.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 border-b border-blue-500 pb-2">Work Experience</h2>
            <div className="space-y-8">
              {workExperience.map((job, idx) => (
                <div key={idx} className="border-l-2 border-blue-500/30 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <p className="text-emerald-400">{job.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{job.location}</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-500">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 border-b border-blue-500 pb-2">Education</h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start border-l-2 border-blue-500/30 pl-6">
                  <div>
                    <h3 className="text-white font-semibold">{edu.degree}</h3>
                    <p className="text-emerald-400 text-sm">{edu.school}</p>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 border-b border-blue-500 pb-2">Certifications & Licenses</h2>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors">
                  {cert}
                </span>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 border-b border-blue-500 pb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], idx) => (
                <div key={idx}>
                  <h3 className="text-emerald-400 font-semibold mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {skillList.map((skill, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
              <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
              <span className="text-gray-800">/</span>
              <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
              <span className="text-gray-800">/</span>
              <a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
