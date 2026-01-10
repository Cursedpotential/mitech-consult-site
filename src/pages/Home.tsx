import { useLocation } from "wouter";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

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
            <a href="#" className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
              Bio
            </a>
            <a href="#" className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
              Works
            </a>
            <a href="mailto:contact@mitechconsult.com" className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 ml-2">
              Connect
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
                      <span className="text-emerald-500">root@traceiq:~/stack#</span> <span className="animate-pulse">_</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MCP Tool Platform Section */}
          <section className="py-32 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="font-mono text-xs text-blue-500 tracking-widest uppercase">Forensic Infrastructure</span>
                </div>
                <h2 className="text-5xl font-display font-bold text-white mb-6">MCP Tool Platform</h2>
                <p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
                  A forensic evidence analysis platform built on the Model Context Protocol (MCP), designed for processing, analyzing, and managing digital evidence in legal proceedings.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-emerald-500 mt-1">→</span>
                    <div>
                      <h4 className="text-white font-display mb-1">65+ MCP Tools</h4>
                      <p className="text-gray-500 text-sm">Comprehensive gateway for document analysis and evidence processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-emerald-500 mt-1">→</span>
                    <div>
                      <h4 className="text-white font-display mb-1">Three-Tier Memory</h4>
                      <p className="text-gray-500 text-sm">Graphiti + Neo4j for persistent context, Chroma for working memory</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-emerald-500 mt-1">→</span>
                    <div>
                      <h4 className="text-white font-display mb-1">Multi-Environment Deploy</h4>
                      <p className="text-gray-500 text-sm">Manus hosting, VPS compute, Cloudflare Workers, and GCP integration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#050505] rounded-lg border border-white/10 p-8 font-mono text-xs text-gray-400">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <span className="text-gray-500">Architecture Overview</span>
                  <span className="text-emerald-500">●</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-white mb-2">// Deployment Environments</p>
                    <div className="pl-4 space-y-1 text-gray-500">
                      <p>
                        ├─ <span className="text-gray-300">Manus Hosting</span> → Web app, API gateway
                      </p>
                      <p>
                        ├─ <span className="text-gray-300">salem-nexus</span> → Storage, CMS, chat
                      </p>
                      <p>
                        └─ <span className="text-gray-300">salem-forge</span> → Compute, AI services
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-2">// Cloud Services</p>
                    <div className="pl-4 space-y-1 text-gray-500">
                      <p>
                        ├─ <span className="text-gray-300">Cloudflare</span> → Workers, R2 storage
                      </p>
                      <p>
                        ├─ <span className="text-gray-300">Google Cloud</span> → Document AI, Vision
                      </p>
                      <p>
                        └─ <span className="text-gray-300">Neo4j Aura</span> → Knowledge graph
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-2">// Core Features</p>
                    <div className="pl-4 space-y-1 text-gray-500">
                      <p>├─ LangGraph forensic workflows</p>
                      <p>├─ Python bridge for remote execution</p>
                      <p>└─ Court-admissible audit trails</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trace Repo Section */}
          <section className="py-32 border-t border-white/5">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                <span className="font-mono text-xs text-purple-500 tracking-widest uppercase">Evidence Pipeline</span>
              </div>
              <h2 className="text-5xl font-display font-bold text-white mb-6">Trace Repo</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                Centralized evidence repository with forensic-grade chain of custody tracking. Handles SMS, call logs, MMS attachments, Facebook Messenger, WhatsApp, and other digital platforms with streaming XML parsing for multi-gigabyte files.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-display text-emerald-500 mb-2">65+</div>
                  <p className="text-gray-500 text-sm font-mono">MCP Tools</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-blue-500 mb-2">SHA-256</div>
                  <p className="text-gray-500 text-sm font-mono">Hash Verification</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-purple-500 mb-2">Multi-GB</div>
                  <p className="text-gray-500 text-sm font-mono">File Processing</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <span className="text-gray-800">/</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <span className="text-gray-800">/</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Email
              </a>
            </div>
            <p className="text-gray-700 text-xs font-mono">
              System Status: <span className="text-emerald-500">Normal</span> | Latency:{" "}
              <span className="text-emerald-500">12ms</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
