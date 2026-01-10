import { useLocation } from "wouter";
import React from 'react';

export default function Home() {

  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 relative">
      {/* Tech-Artsy Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent opacity-30 delay-1000"></div>
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col min-h-screen relative z-10">
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
          <div className="relative group cursor-default">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
            <a href="/" className="relative flex items-baseline gap-2 group">
              <span className="text-3xl font-display font-bold tracking-widest text-white uppercase flex items-center gap-2">
                <span className="text-emerald-500 text-3xl leading-none">/</span>
                MiTech
              </span>
              <span className="text-lg font-mono font-normal tracking-wide text-gray-500 uppercase group-hover:text-blue-400 transition-colors">
                Consult
              </span>
            </a>
          </div>

          <nav className="flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl">
            <a href="/" className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
              Index
            </a>
            <a href="/about" className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
              About
            </a>
            <a href="/cv" className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
              CV
            </a>
            <a href="/projects" className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
              Projects
            </a>
          </nav>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="min-h-[85vh] flex flex-col justify-center relative py-20 md:py-32">
            <div className="relative z-10 animate-[fadeIn_0.8s_ease-out]">
              {/* Top Label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-emerald-500"></div>
                <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase">System Architect</span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10 text-white leading-[0.95] uppercase max-w-5xl">
                Bridging<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500">
                  Analog
                </span>{" "}
                & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-glow">
                  Intelligence.
                </span>
              </h1>

              {/* Split Content Area */}
              <div className="grid md:grid-cols-12 gap-12 mt-12 border-t border-white/10 pt-12">
                <div className="md:col-span-7">
                  <h3 className="text-white font-display text-xl mb-4">The Mission</h3>
                  <p className="text-gray-400 font-light text-lg leading-relaxed max-w-2xl">
                    Constructing the physical and digital backbones for autonomous systems. From low-voltage wiring to containerized AI swarms.
                  </p>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-white font-display text-xl mb-4">The Stack</h3>
                  <p className="text-gray-400 font-mono text-sm leading-relaxed tracking-wide">
                    &gt; Docker / K8s<br />
                    &gt; Mem0 / Qdrant<br />
                    &gt; Local LLMs<br />
                    &gt; Commercial AV
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Grid */}
          <section className="py-32 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {/* Card 1 */}
              <div className="bg-[#030303] p-12 group hover:bg-[#080808] transition-colors relative h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-gray-600 mb-8 block">01</span>
                  <h3 className="text-2xl font-display text-white mb-4 group-hover:text-blue-400 transition-colors">
                    Physical Infrastructure
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Structured cabling, rack design, and commercial AV. The silent, robust foundation that uptime depends on.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#030303] p-12 group hover:bg-[#080808] transition-colors relative h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-gray-600 mb-8 block">02</span>
                  <h3 className="text-2xl font-display text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    Sovereign AI
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Deploying local intelligence stacks. Memory systems, vector stores, and inference engines running on your hardware.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#030303] p-12 group hover:bg-[#080808] transition-colors relative h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-gray-600 mb-8 block">03</span>
                  <h3 className="text-2xl font-display text-white mb-4 group-hover:text-purple-400 transition-colors">
                    Orchestration
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Connecting the dots. Automating workflows between physical sensors and digital decision-making engines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trace IQ Section */}
          <section className="py-32">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-20"></div>

              <div className="grid md:grid-cols-2 gap-16 p-12 md:p-20 relative z-10 items-center">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">Live Architecture</span>
                    </div>
                    <h2 className="text-5xl font-display font-bold text-white mb-6">Trace IQ</h2>
                    <p className="text-gray-400 text-lg font-light mb-10 leading-relaxed">
                      A comprehensive evidence collection and processing platform for digital forensics. Built on the Model Context Protocol with AI-powered document analysis, pattern detection, and court-admissible audit trails. Features streaming XML parsing for multi-gigabyte files, SHA-256 hashing, and cross-platform correlation.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("#")}
                    className="inline-flex items-center gap-4 text-white font-mono text-sm hover:gap-6 transition-all group border-b border-white/20 pb-1 w-fit hover:border-emerald-500"
                  >
                    [ Initialize Protocol ] <span className="text-emerald-500">-&gt;</span>
                  </button>
                </div>

                <div className="bg-[#050505] rounded-lg border border-white/10 p-8 font-mono text-xs text-gray-400 shadow-2xl relative">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <span className="text-gray-600">bash — 80x24</span>
                  </div>

                  <div className="space-y-3">
                    <p>
                      <span className="text-emerald-500">root@traceiq:~/stack#</span> docker-compose up -d
                    </p>
                    <p className="text-gray-600 mb-2">[+] Running 8/8</p>
                    <div className="space-y-1 pl-4 border-l border-white/5">
                      <p className="flex items-center gap-2">
                        ✔ Container <span className="text-gray-300">traceiq-qdrant</span>{" "}
                        <span className="text-emerald-500 ml-auto">Started</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Container <span className="text-gray-300">traceiq-ollama</span>{" "}
                        <span className="text-emerald-500 ml-auto">Started</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Container <span className="text-gray-300">traceiq-mem0</span>{" "}
                        <span className="text-emerald-500 ml-auto">Started</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Container <span className="text-gray-300">traceiq-n8n</span>{" "}
                        <span className="text-emerald-500 ml-auto">Started</span>
                      </p>
                    </div>
                    <p className="mt-4">
                      <span className="text-emerald-500">root@traceiq:~/stack#</span> ./traceiq --ingest-docs ./evidence/
                    </p>
                    <p className="text-gray-600 mb-2">[+] Processing 12 documents</p>
                    <div className="space-y-1 pl-4 border-l border-white/5">
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">report_2023-01-15.pdf</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">email_thread_project_x.json</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">server_logs_2023-03-01.txt</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">chat_history_john_doe.xml</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">financial_records_q1.xlsx</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">image_metadata_001.json</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">network_traffic_capture.pcap</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">gps_data_route_a.csv</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">audio_recording_meeting.mp3</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">website_scrape_archive.zip</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">encrypted_drive_manifest.txt</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Document <span className="text-gray-300">social_media_export.json</span>{" "}
                        <span className="text-emerald-500 ml-auto">Ingested</span>
                      </p>
                    </div>
                    <p className="mt-4">
                      <span className="text-emerald-500">root@traceiq:~/stack#</span> ./traceiq --query "find all communications between John Doe and Jane Smith related to Project X"
                    </p>
                    <p className="text-gray-600 mb-2">[+] Searching 12 documents for query</p>
                    <div className="space-y-1 pl-4 border-l border-white/5">
                      <p className="flex items-center gap-2">
                        ✔ Result <span className="text-gray-300">email_thread_project_x.json</span>{" "}
                        <span className="text-emerald-500 ml-auto">Match</span>
                      </p>
                      <p className="flex items-center gap-2">
                        ✔ Result <span className="text-gray-300">chat_history_john_doe.xml</span>{" "}
                        <span className="text-emerald-500 ml-auto">Match</span>
                      </p>
                    </div>
                    <p className="mt-4">
                      <span className="text-emerald-500">root@traceiq:~/stack#</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm pb-6">
          <p>&copy; 2024 MiTech Consult. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}