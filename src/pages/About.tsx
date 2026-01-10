export default function About() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-display flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-emerald-400 mb-4 animate-[fadeIn_0.8s_ease-out]">
            Matthew Salem
          </h1>
          <p className="text-xl sm:text-2xl text-blue-300 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
            Bridging Analog Foundations with Digital Frontiers
          </p>
          <p className="text-lg text-gray-300 leading-relaxed animate-[fadeIn_0.8s_ease-out_0.4s_both]">
            With over 15 years of hands-on experience, I transform complex IT challenges into robust, scalable solutions. From the tangible world of low-voltage infrastructure to the cutting-edge realm of sovereign AI and forensic evidence processing, my journey is defined by a commitment to precision, integrity, and innovation.
          </p>
        </section>

        {/* Narrative Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-400 mb-6 border-b-2 border-blue-500 pb-2">
            My Journey: From Wires to AI
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              My career began in the trenches of IT support, where I honed my problem-solving skills and developed a deep understanding of how technology impacts daily operations. This foundational experience led me to an electrical apprenticeship, grounding me in the physical infrastructure that powers our digital world. This unique blend of analog and digital expertise became the cornerstone of my philosophy: true technological mastery lies in understanding both the hardware and the software, the visible and the invisible.
            </p>
            <p>
              Today, I leverage this comprehensive background to engineer advanced AI and IoT systems, specializing in sovereign AI solutions that prioritize data privacy and control. My work extends into the critical field of forensic evidence processing, where I apply meticulous attention to detail and robust technical methodologies to uncover insights from complex digital landscapes. The principle that <span className="italic text-blue-300">"the nuance IS the abuse"</span> guides my approach, ensuring that subtle patterns of manipulation are preserved and highlighted, not summarized away.
            </p>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-400 mb-6 border-b-2 border-blue-500 pb-2">
            Key Expertise Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <ul className="list-disc list-inside space-y-2">
              <li>Low-Voltage Infrastructure & Network Design</li>
              <li>Surveillance Systems & Commercial AV</li>
              <li>Sovereign AI & Edge Computing</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Forensic Evidence Processing & Digital Forensics</li>
              <li>IoT Integration & Automation</li>
              <li>System Architecture & Implementation</li>
            </ul>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-400 mb-6 border-b-2 border-blue-500 pb-2">
            Certifications & Credentials
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span className="bg-blue-700 px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">OSHA 10</span>
            <span className="bg-emerald-700 px-4 py-2 rounded-full shadow-lg hover:bg-emerald-600 transition-colors duration-300">CCNA</span>
            <span className="bg-purple-700 px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors duration-300">Electrician Apprentice</span>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-emerald-400 mb-6 border-b-2 border-blue-500 pb-2">
            My Philosophy: The Analog-to-Digital Bridge
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            In a world increasingly reliant on abstract digital solutions, I believe in the power of understanding the physical underpinnings. My approach ensures that every digital innovation is built upon a solid, reliable foundation, creating systems that are not only intelligent but also resilient and secure. This holistic perspective is what drives MiTech Consult: bringing clarity and control to complex technological landscapes.
          </p>
        </section>
      </div>
    </div>
  );
}
