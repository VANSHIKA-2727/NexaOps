export const staticBlogs = [
  {
    slug: 'procurement-tech-trends-2025',
    title: 'Top Procurement Technology Trends Reshaping Supply Chains in 2025',
    date: 'April 10, 2025',
    category: 'Procurement',
    excerpt:
      'From AI-powered spend analytics to blockchain-enabled supplier transparency — discover the technologies transforming procurement functions in India and globally.',
    readTime: '6 min read',
    image: 'https://source.unsplash.com/600x400/?technology,procurement',
    body:
      'Procurement leaders in 2025 are moving beyond digitisation for its own sake. The strongest teams are combining AI-assisted spend analytics, supplier risk signals, and workflow automation to make faster, cleaner decisions across sourcing, contracting, and compliance.\n\nFor Indian enterprises, the next advantage will come from connected data. When procurement systems, logistics dashboards, quality reports, and ESG records talk to one another, leaders gain the confidence to respond quickly to volatility without falling back on reactive buying patterns.\n\nThe organisations winning here are not necessarily buying the most software. They are redesigning decision-making around visibility, supplier collaboration, and governance. Technology becomes valuable when it sharpens negotiations, reduces exceptions, and gives leadership a live view of cost, risk, and service tradeoffs.',
  },
  {
    slug: 'esg-supply-chain-india',
    title: 'ESG in Indian Supply Chains: From Compliance to Competitive Advantage',
    date: 'March 28, 2025',
    category: 'Sustainability',
    excerpt:
      "With SEBI's BRSR framework tightening, Indian enterprises must rethink supplier sustainability. Here's a practical roadmap to ESG-embedded procurement.",
    readTime: '8 min read',
    image: 'https://source.unsplash.com/600x400/?sustainability,supply-chain',
    body:
      'ESG has shifted from a reporting exercise to an operating priority. Procurement teams are now expected to understand supplier emissions, labour standards, traceability risks, and compliance maturity with the same rigor they apply to cost and delivery.\n\nIn India, this means building supplier programs that are practical enough for diverse vendor ecosystems. The best approach starts with segmentation: identify high-risk categories, gather usable baseline data, and focus intervention where business exposure is highest.\n\nWhen done well, ESG-enabled procurement improves resilience. It reduces disruption risk, strengthens customer confidence, and opens access to capital and partnerships that increasingly depend on sustainability maturity.',
  },
  {
    slug: 'cost-reduction-volatile-markets',
    title: '5 Cost Reduction Strategies That Work in Volatile Raw Material Markets',
    date: 'March 15, 2025',
    category: 'Strategy',
    excerpt:
      'When commodity prices swing wildly, reactive buying destroys margins. We explore proactive hedging, dual-sourcing, and index-linked contracts that preserve profitability.',
    readTime: '5 min read',
    image: 'https://source.unsplash.com/600x400/?finance,strategy',
    body:
      'Volatile markets punish reactive procurement. Teams that chase daily price moves often end up locking in poor decisions because they lack a structured playbook for sourcing, supplier allocation, and contract design.\n\nThe more resilient model blends indexed contracts, alternate supplier lanes, demand visibility, and scenario-based procurement planning. These levers do not eliminate volatility, but they keep exposure manageable and decision-making disciplined.\n\nThe most important shift is organisational. Cost reduction should not depend on one heroic negotiation. It should come from a repeatable system that connects sourcing strategy with operations, finance, and supplier collaboration.',
  },
  {
    slug: 'six-sigma-manufacturing',
    title: 'How Six Sigma Saved a Pune-Based Auto Component Maker ₹4.2 Crore Annually',
    date: 'February 20, 2025',
    category: 'Six Sigma',
    excerpt:
      'A detailed walkthrough of a DMAIC project we ran at a Tier-1 automotive supplier — from identifying the ₹4.2Cr waste pool to sustaining 98.8% defect-free output.',
    readTime: '10 min read',
    image: 'https://source.unsplash.com/600x400/?manufacturing,factory',
    body:
      'The strongest Six Sigma projects begin with business pain, not with tools. In this engagement, the mandate was clear: recurring scrap, quality drift, and inconsistent process control were eroding profitability across a high-volume automotive line.\n\nUsing DMAIC, the team isolated the highest-cost variation drivers, standardised process parameters, and aligned line-side controls with operator behavior. That made the gains real, measurable, and sustainable beyond the project phase.\n\nThe lesson is simple: continuous improvement succeeds when commercial priorities, plant leadership, and frontline execution all move together. Methodology matters, but disciplined implementation matters more.',
  },
  {
    slug: 'vendor-development-framework',
    title: 'Building a World-Class Vendor Development Program: A Step-by-Step Framework',
    date: 'February 5, 2025',
    category: 'Procurement',
    excerpt:
      "Supplier fragmentation, quality inconsistency, and delivery unreliability cost Indian manufacturers billions. Here's the proven 5-step vendor development model we deploy.",
    readTime: '7 min read',
    image: 'https://source.unsplash.com/600x400/?partnership,business',
    body:
      'Vendor development is often treated like a side program, but for manufacturers it is a core profit lever. Supplier inconsistency creates hidden cost through rework, delays, inspection effort, and unstable capacity planning.\n\nA strong vendor development model combines segmentation, capability assessment, improvement charters, governance routines, and shared performance dashboards. The objective is not just supplier control. It is supplier uplift.\n\nThe companies that execute this well create deeper supply resilience. They reduce firefighting, improve quality predictability, and give procurement a more strategic role in business performance.',
  },
  {
    slug: 'inventory-optimization-fmcg',
    title: 'Inventory Optimization in FMCG: Reducing Dead Stock Without Killing Fill Rates',
    date: 'January 22, 2025',
    category: 'Supply Chain',
    excerpt:
      'Over ₹1,200 Cr in FMCG inventory sits idle in Indian warehouses every quarter. We share the demand-sensing and ABC-XYZ analysis approach that frees working capital.',
    readTime: '6 min read',
    image: 'https://source.unsplash.com/600x400/?warehouse,inventory',
    body:
      'Inventory optimisation in FMCG is a balancing act between service and working capital. The challenge is rarely just excess stock. It is mismatched stock, sitting in the wrong place, for the wrong cycle, against the wrong demand pattern.\n\nPractical optimisation starts by separating velocity from variability. ABC-XYZ analysis, demand sensing, and service-level alignment allow teams to reduce dead stock without compromising fill rates on critical SKUs.\n\nThe payoff is more than better warehousing metrics. It is faster cash conversion, cleaner planning, and a supply chain that responds with less waste and less panic.',
  },
];

export function getBlogBySlug(slug) {
  return staticBlogs.find((blog) => blog.slug === slug) ?? null;
}
