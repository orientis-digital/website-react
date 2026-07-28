import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productsData = [
  {
    id: 'cloud-orchestrator',
    name: 'Orientis Cloud Orchestrator',
    tagline: 'Automated Multi-Cloud Infrastructure & Deployment Platform',
    category: 'cloud',
    badge: 'Production Ready',
    icon: 'fa-solid fa-server',
    accentColor: 'from-tech-sky to-blue-500',
    borderColor: 'hover:border-tech-sky/40',
    description:
      'Engineered for mission-critical Kubernetes and serverless environments. Provision, scale, and manage workloads across AWS, GCP, and Azure from a single unified control plane.',
    features: [
      'Multi-cloud Kubernetes cluster management',
      'Zero-downtime canary & blue/green deployments',
      'Automated disaster recovery & failover',
      'Cost optimization & resource auto-tuning'
    ],
    codeSnippet: 'orientis deploy --env production --cluster aws-east-1 --canary 10%'
  },
  {
    id: 'nexus-gateway',
    name: 'Nexus API Gateway',
    tagline: 'High-Throughput Edge Proxy & Rate Limiter',
    category: 'security',
    badge: 'Enterprise Platform',
    icon: 'fa-solid fa-network-wired',
    accentColor: 'from-tech-indigo to-orange-500',
    borderColor: 'hover:border-tech-indigo/40',
    description:
      'Ultra-fast API gateway handling requests with built-in OAuth2/JWT validation, dynamic rate limiting, and real-time distributed tracing.',
    features: [
      'Sub-millisecond routing proxy',
      'Adaptive DDoS & bot mitigation',
      'GraphQL & gRPC native protocol support',
      'Automated OpenAPI specification generation'
    ],
    codeSnippet: 'nexus gateway proxy --target api.orientis.tech --rate-limit adaptive'
  },
  {
    id: 'shieldops-sec',
    name: 'ShieldOps Cyber Monitor',
    tagline: 'AI-Driven Threat Detection & Incident Response Platform',
    category: 'security',
    badge: 'Security Engine',
    icon: 'fa-solid fa-shield-halved',
    accentColor: 'from-cyan-400 to-tech-sky',
    borderColor: 'hover:border-cyan-400/40',
    description:
      'Continuous automated security audits, vulnerability scanning, and real-time threat neutralization across cloud workloads and edge endpoints.',
    features: [
      'Real-time anomaly detection with LLM analysis',
      'Automated vulnerability patch application',
      'SOC2 & ISO 27001 compliance enforcement',
      'Encrypted log telemetry storage'
    ],
    codeSnippet: 'shieldops audit --scope cloud-infra --auto-remediate'
  },
  {
    id: 'dataflow-analytics',
    name: 'DataFlow Streaming Intelligence',
    tagline: 'Real-Time Edge Telemetry & Visual Analytics Engine',
    category: 'analytics',
    badge: 'Streaming Engine',
    icon: 'fa-solid fa-chart-line',
    accentColor: 'from-purple-500 to-tech-indigo',
    borderColor: 'hover:border-purple-500/40',
    description:
      'Process high-frequency IoT sensor data, event logs, and user telemetry in real-time with customizable visual dashboards and automated alerting.',
    features: [
      'Stream processing engine',
      'Custom visual dashboard builder',
      'Integrations with Kafka, Snowflake, & PostgreSQL',
      'Edge device compression & sync'
    ],
    codeSnippet: 'dataflow stream connect --source iot-gateway --pipeline analytics'
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeTab === 'all'
      ? productsData
      : productsData.filter((p) => p.category === activeTab);

  return (
    <main className="flex-1 pt-28 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-white/5">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-tech-blue/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[1200px] text-center fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-blue/30 bg-tech-blue/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-6">
            <i className="fa-solid fa-cube"></i> Enterprise Product Suite
          </span>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-white uppercase leading-tight mb-6">
            Engineered for <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Scalability &amp; Reliability
            </span>
          </h1>

          <p className="max-w-[720px] mx-auto text-gray-400 text-base md:text-lg leading-relaxed font-sans mb-10">
            Orientis Digital develops battle-tested enterprise software products powering modern cloud operations, API infrastructure, cyber defense, and real-time data streaming.
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center items-center gap-2 flex-wrap mb-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'cloud'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              Cloud &amp; Infra
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'security'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              Security &amp; Gateway
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              Data Analytics
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-tech-black/40">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`glass-panel p-8 rounded-3xl border border-white/10 transition-all duration-300 ${product.borderColor} hover:-translate-y-1.5 flex flex-col justify-between group`}
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-2xl group-hover:scale-110 transition-transform">
                      <i className={product.icon}></i>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-tech-black border border-white/10 text-tech-sky">
                      {product.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-mono text-tech-indigo uppercase tracking-wider mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 list-none">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                        <i className="fa-solid fa-check text-tech-sky text-[10px]"></i>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-3 px-4 rounded-xl border border-tech-blue/30 bg-tech-blue/10 text-tech-sky font-bold text-xs uppercase tracking-wider hover:bg-tech-blue hover:text-white transition-all cursor-pointer text-center"
                  >
                    View Specs &amp; CLI
                  </button>
                  <Link
                    to="/contact"
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider hover:shadow-tech transition-all text-center"
                  >
                    Request Access
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[9999] bg-tech-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel bg-tech-black/95 p-8 rounded-3xl border border-tech-blue/40 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-2xl">
                <i className={selectedProduct.icon}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
                <span className="text-xs font-mono text-tech-sky">{selectedProduct.badge}</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
              {selectedProduct.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-tech-indigo tracking-wider mb-2">
                // Quick Deployment Command
              </h4>
              <div className="p-4 rounded-xl bg-tech-gray/90 border border-white/10 font-mono text-xs text-tech-sky flex items-center justify-between">
                <code>{selectedProduct.codeSnippet}</code>
                <i className="fa-regular fa-copy text-gray-400 cursor-pointer hover:text-white"></i>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-white tracking-wider mb-3">
                // Key Capabilities
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
                {selectedProduct.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-tech-indigo text-[10px]"></i>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech"
                onClick={() => setSelectedProduct(null)}
              >
                Schedule Architecture Demo
              </Link>
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white border border-white/10 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enterprise CTA Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[5%] max-w-[900px] text-center">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative">
            <h2 className="text-3xl font-extrabold text-white uppercase mb-4">
              Need a Custom Enterprise Solution?
            </h2>
            <p className="text-gray-400 text-sm max-w-[600px] mx-auto mb-8">
              Our engineering team can customize and integrate our product suite to meet your exact compliance, security, and workload requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech hover:opacity-90"
            >
              Talk to Engineering &gt;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
