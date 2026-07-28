import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productsData = [
  {
    id: 'orientpos',
    name: 'OrientPOS',
    tagline: 'BIR-Compliant Point of Sale & Retail Management System',
    category: 'retail',
    badge: 'Will Be Posted Soon',
    statusTag: 'In Active MVP Development',
    icon: 'fa-solid fa-cash-register',
    accentColor: 'from-tech-sky to-blue-500',
    borderColor: 'hover:border-tech-sky/40',
    description:
      'Point of Sale platform engineered for restaurants, retail stores, and service businesses. Will feature offline transaction processing, BIR compliance readiness, GCash/Maya integrations, and thermal receipt printing.',
    features: [
      'Offline transaction processing & auto-syncing',
      'BIR compliance & tax receipt formatting',
      'GCash, Maya, & Cash payment processing',
      'Thermal receipt printer & cash drawer support',
      'Multi-branch shift tracking & stock management'
    ],
    codeSnippet: 'orientpos setup --terminal pos-01 --branch main --preview'
  },
  {
    id: 'orientinventory',
    name: 'OrientInventory',
    tagline: 'Multi-Location Stock & Supply Chain Management',
    category: 'retail',
    badge: 'Will Be Posted Soon',
    statusTag: 'In Development',
    icon: 'fa-solid fa-boxes-stacked',
    accentColor: 'from-tech-indigo to-orange-500',
    borderColor: 'hover:border-tech-indigo/40',
    description:
      'Inventory tracking built to eliminate stockouts and spreadsheet errors with barcode/QR code scanning, real-time stock movement recording, automated low-stock alerts, and OrientPOS integration.',
    features: [
      'Barcode & QR code mobile scanner integration',
      'Multi-warehouse stock transfer tracking',
      'Automated low-stock SMS & email alerts',
      'Expiry date & batch lot management',
      'Purchase order & supplier database'
    ],
    codeSnippet: 'orientinventory sync --location warehouse-01 --preview'
  },
  {
    id: 'orienthr',
    name: 'OrientHR',
    tagline: 'Philippine HR & Automated Payroll Platform',
    category: 'hr',
    badge: 'Will Be Posted Soon',
    statusTag: 'In Development',
    icon: 'fa-solid fa-users-gear',
    accentColor: 'from-cyan-400 to-tech-sky',
    borderColor: 'hover:border-cyan-400/40',
    description:
      'Workforce management system featuring automated Philippine payroll processing, employee self-service portals, biometric attendance integration, and automatic SSS, PhilHealth, & Pag-IBIG deduction computing.',
    features: [
      'Automated SSS, PhilHealth, & Pag-IBIG deduction computing',
      'PDF payslip generation & 13th Month calculation',
      'Biometric clock-in & leave request portal',
      'Employee contract & digital document vault',
      'Shift scheduling & overtime approvals'
    ],
    codeSnippet: 'orienthr payroll compute --month 07 --preview'
  },
  {
    id: 'orientbook',
    name: 'OrientBook',
    tagline: 'Localized MSME Accounting & Bookkeeping Software',
    category: 'finance',
    badge: 'Will Be Posted Soon',
    statusTag: 'Planned Release',
    icon: 'fa-solid fa-book-journal-whills',
    accentColor: 'from-purple-500 to-tech-indigo',
    borderColor: 'hover:border-purple-500/40',
    description:
      'Simplified accounting software tailored for local Filipino businesses. Track income, expenses, accounts receivable/payable, tax ledgers, and financial health reports without needing an in-house CPA.',
    features: [
      'Expense tracking & receipt photo attachments',
      'Accounts receivable & invoice tracking',
      'Profit/loss & cash flow statement generation',
      'Tax preparation & ledger exports',
      'Direct integration with OrientPOS & OrientInventory'
    ],
    codeSnippet: 'orientbook export --statement PnL --preview'
  },
  {
    id: 'orientgov',
    name: 'OrientGov',
    tagline: 'Government Compliance, E-Filing & Document Vault',
    category: 'finance',
    badge: 'Will Be Posted Soon',
    statusTag: 'Planned Release',
    icon: 'fa-solid fa-landmark',
    accentColor: 'from-amber-500 to-tech-indigo',
    borderColor: 'hover:border-amber-500/40',
    description:
      'Purpose-built for local government units (LGUs) and enterprises needing strict document archiving, e-filing automation, and regulatory permit tracking.',
    features: [
      'Digital document archiving & OCR search',
      'Regulatory compliance deadline notifications',
      'LGU permit & clearance tracking',
      'Role-based access control & audit trails'
    ],
    codeSnippet: 'orientgov audit --agency lgu --preview'
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  const filteredProducts =
    activeTab === 'all'
      ? productsData
      : productsData.filter((p) => p.category === activeTab);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail && waitlistEmail.includes('@')) {
      setJoinedWaitlist(true);
    }
  };

  return (
    <main className="flex-1 pt-28 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-white/5">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-tech-indigo/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[1200px] text-center fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech-indigo/40 bg-tech-indigo/10 text-tech-indigo text-xs font-mono uppercase tracking-widest mb-6 animate-pulse">
            <i className="fa-solid fa-clock"></i> Products Will Be Posted Soon
          </span>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-white uppercase leading-tight mb-6">
            Orientis SaaS Suite <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Launching Soon
            </span>
          </h1>

          <p className="max-w-[720px] mx-auto text-gray-400 text-base md:text-lg leading-relaxed font-sans mb-10">
            Our proprietary suite of BIR-compliant software products — including OrientPOS, OrientInventory, OrientHR, OrientBook, and OrientGov — is currently in active development and will be posted soon. Join the early access waitlist to be notified on launch day.
          </p>

          {/* Waitlist Box */}
          <div className="max-w-[500px] mx-auto mb-10">
            {joinedWaitlist ? (
              <div className="p-4 rounded-2xl bg-tech-indigo/15 border border-tech-indigo/40 text-tech-sky font-medium text-xs font-mono">
                <i className="fa-solid fa-circle-check text-tech-sky mr-2"></i>
                You're on the early access waitlist! We'll notify you as soon as products launch.
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex gap-2 flex-col sm:flex-row">
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter email for early access"
                  required
                  className="flex-1 p-3.5 rounded-xl bg-tech-black/80 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-tech-sky"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 shadow-tech-sm cursor-pointer whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>

          {/* Category Filter Tabs */}
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
              onClick={() => setActiveTab('retail')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'retail'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              POS &amp; Inventory
            </button>
            <button
              onClick={() => setActiveTab('hr')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'hr'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              HR &amp; Payroll
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'finance'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              Accounting &amp; Compliance
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
                className={`glass-panel p-8 rounded-3xl border border-white/10 transition-all duration-300 ${product.borderColor} hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-2xl group-hover:scale-110 transition-transform">
                      <i className={product.icon}></i>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-tech-indigo/15 border border-tech-indigo/30 text-tech-indigo">
                      <i className="fa-solid fa-clock mr-1 text-[10px]"></i>
                      {product.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-mono text-tech-sky uppercase tracking-wider mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                    {product.description}
                  </p>

                  {/* Features Preview */}
                  <ul className="space-y-2 mb-8 list-none p-0">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                        <i className="fa-solid fa-check text-tech-sky text-[10px]"></i>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-3 px-4 rounded-xl border border-white/15 bg-white/5 text-gray-300 font-bold text-xs uppercase tracking-wider hover:border-tech-sky hover:text-tech-sky transition-all cursor-pointer text-center"
                  >
                    Preview Specs
                  </button>
                  <Link
                    to="/contact"
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider hover:shadow-tech transition-all text-center"
                  >
                    Inquire Early Access
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
          <div className="glass-panel bg-tech-black/95 p-8 rounded-3xl border border-tech-indigo/40 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in duration-200">
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
                <span className="text-xs font-mono text-tech-indigo">{selectedProduct.badge} // {selectedProduct.statusTag}</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
              {selectedProduct.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-tech-indigo tracking-wider mb-2">
                // System CLI Command Preview
              </h4>
              <div className="p-4 rounded-xl bg-tech-gray/90 border border-white/10 font-mono text-xs text-tech-sky flex items-center justify-between">
                <code>{selectedProduct.codeSnippet}</code>
                <i className="fa-regular fa-copy text-gray-400 cursor-pointer hover:text-white"></i>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-white tracking-wider mb-3">
                // Planned Capabilities
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
                Inquire For Early Access
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

      {/* Custom Consultation Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[5%] max-w-[900px] text-center">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative">
            <h2 className="text-3xl font-extrabold text-white uppercase mb-4">
              Need Custom Software Development Today?
            </h2>
            <p className="text-gray-400 text-sm max-w-[600px] mx-auto mb-8">
              While our SaaS products are launching soon, our team is currently accepting custom web, mobile, and enterprise software engineering projects.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech hover:opacity-90"
            >
              Start Custom Project &gt;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
