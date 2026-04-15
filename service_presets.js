// Service Presets – Edit this file to update pricing and scope descriptions
// This file is shared across all tools (price list, quotation, contract, etc.)

const SERVICE_CONFIG = {
  scopeMap: {
    logo: "Logo & Brand Identity: includes primary logo, submark, color palette, font pairings, brand guide PDF, and business card mockup. Up to 3 rounds of revisions.",
    print: "Print Materials: design of flyer (A5/A6), poster (A3/A2), or brochure (bi-fold/tri-fold). Includes 3mm bleed, crop marks, print-ready PDF. 2 rounds of revisions.",
    social: "Social Media Graphics: custom designs for posts/stories. 10-post package includes Canva template. 1-2 revision rounds.",
    motion: "Motion Design & Video Edits: up to 60-second video or animation. Includes MP4 (1080p/4K), captions, and audio mix. 2 rounds of revisions.",
    computer: "Computer Repair / Upgrade / Maintenance: diagnostic, hardware repair, OS reinstall, upgrade installation. Parts cost not included. 30-day labor warranty.",
    automation: "Process Automation: consultation, script/automation tool development, basic documentation. 2 rounds of logic changes.",
    web: "Web Design: responsive landing page or multi-page site (up to 5 pages), contact form, basic SEO. 2 rounds of design revisions."
  },
  servicePresets: {
    logo: [
      { name: "Logo Design", price: 5000 },
      { name: "Full Brand Identity", price: 15000 },
      { name: "Business Card Design", price: 2000 },
      { name: "Brand Guide PDF", price: 3000 }
    ],
    print: [
      { name: "Flyer (A5/A6)", price: 2500 },
      { name: "Poster (A3/A2)", price: 3500 },
      { name: "Brochure (bi-fold)", price: 5000 },
      { name: "Brochure (tri-fold)", price: 6000 }
    ],
    social: [
      { name: "Single Social Post", price: 1200 },
      { name: "5-Post Package", price: 5000 },
      { name: "10-Post Package", price: 8000 },
      { name: "Story Template Set", price: 3000 }
    ],
    motion: [
      { name: "Logo Animation (5-10 sec)", price: 4000 },
      { name: "Social Media Reel (15-30 sec)", price: 5500 },
      { name: "Short Ad (30-60 sec)", price: 10000 },
      { name: "Full Video Edit (up to 3 min)", price: 18000 }
    ],
    computer: [
      { name: "Diagnostic Fee", price: 500 },
      { name: "OS Reinstall", price: 1200 },
      { name: "Hardware Installation", price: 800 },
      { name: "Data Backup", price: 600 }
    ],
    automation: [
      { name: "Simple Script", price: 8000 },
      { name: "Workflow Automation", price: 20000 },
      { name: "API Integration", price: 15000 },
      { name: "Consultation (per hour)", price: 1200 }
    ],
    web: [
      { name: "Landing Page (1 page)", price: 10000 },
      { name: "Multi-page Site (up to 5 pages)", price: 25000 },
      { name: "E-commerce Integration", price: 20000 },
      { name: "SEO Basic Setup", price: 5000 }
    ]
  }
};