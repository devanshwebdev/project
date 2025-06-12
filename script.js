// Sample scheme data with descriptions
const schemes = [
  {
    name: "Startup Catalyst Program",
    state: "Tamil Nadu",
    sector: "Technology", // corresponds to Industry
    group: "Startups",    // corresponds to Target Group
    type: "Financial",  // corresponds to Support Type
    details: "Provides seed funding and incubation support to early-stage tech startups in Tamil Nadu.",
    benefits: "Quick access to capital and business mentorship.",
    eligibility: "Registered startups with a working prototype and under 3 years of incorporation.",
    applicationProcess: "Apply through the state startup mission portal with pitch deck and business plan.",
    documentsRequired: "Company registration certificate, pitch deck, PAN card",
    fundsUtilized: "Rs. 75 Crores",
    beneficiariesReached: "350",
    reviews: [
      "Helped us build a functional MVP and connect with mentors – Arjun K.",
      "Got initial funding and a workspace. Great initiative! – Priya R."
    ]
  },
  {
    name: "AgriTech Growth Scheme",
    state: "Punjab",
    sector: "Agriculture",
    group: "Farmers",
    type: "Subsidy",
    details: "Supports adoption of AgriTech solutions among farmers through financial subsidies.",
    benefits: "Up to 50% subsidy on approved AgriTech products and machinery.",
    eligibility: "Farmers with valid land ownership records in Punjab.",
    applicationProcess: "Submit application via state agriculture department portal.",
    documentsRequired: "Land ownership proof, Aadhaar card, bank passbook",
    fundsUtilized: "Rs. 45 Crores",
    beneficiariesReached: "1200",
    reviews: [
      "Made it affordable to upgrade to smart irrigation – Manpreet S.",
      "The subsidy helped me increase my farm yield significantly – Gurmeet K."
    ]
  },
  {
    name: "Women Entrepreneurs Empowerment Scheme",
    state: "Karnataka",
    sector: "Manufacturing",
    group: "Women Entrepreneurs",
    type: "Loan Assistance",
    details: "Provides low-interest loans and capacity building for women-led manufacturing units.",
    benefits: "Loans up to Rs. 25 Lakhs with 3% interest rate.",
    eligibility: "Women-owned MSMEs registered in Karnataka.",
    applicationProcess: "Apply via state industry department with business plan.",
    documentsRequired: "Business registration, Aadhaar, GST certificate",
    fundsUtilized: "Rs. 60 Crores",
    beneficiariesReached: "800",
    reviews: [
      "Affordable loans helped me scale my handmade textiles unit – Rekha M.",
      "Good support and regular follow-ups from government officials – Shalini D."
    ]
  },
  {
    name: "Green Energy Startup Support",
    state: "Gujarat",
    sector: "Renewable Energy",
    group: "Startups",
    type: "Incentive",
    details: "Incentives for startups working in solar, wind, and bioenergy technologies.",
    benefits: "Grants up to Rs. 10 Lakhs for R&D and prototyping.",
    eligibility: "Startups in renewable energy sector registered in India.",
    applicationProcess: "Online form through Gujarat Energy Development Agency.",
    documentsRequired: "Startup recognition, tech proposal, founders' ID proofs",
    fundsUtilized: "Rs. 25 Crores",
    beneficiariesReached: "150",
    reviews: [
      "This helped us finish our solar tracking prototype – Arvind T.",
      "R&D support was crucial for our product development – Neha B."
    ]
  },
  {
    name: "Tribal Skill Development Scheme",
    state: "Jharkhand",
    sector: "Skill Development",
    group: "Tribal Youth",
    type: "Training",
    details: "Free vocational training and employment assistance for tribal youth.",
    benefits: "Certified training with stipend and placement support.",
    eligibility: "ST candidates between 18–35 years from Jharkhand.",
    applicationProcess: "Register at nearest tribal welfare center.",
    documentsRequired: "Caste certificate, Aadhaar card, education certificate",
    fundsUtilized: "Rs. 18 Crores",
    beneficiariesReached: "2100",
    reviews: [
      "Got trained and placed as an electrician – Rajesh M.",
      "Helped me move to a skilled job from daily wage labor – Sunita T."
    ]
  },
  {
    name: "Export Ready MSME Initiative",
    state: "Maharashtra",
    sector: "Textile",
    group: "MSMEs",
    type: "Capacity Building",
    details: "Helps textile MSMEs meet global export standards with audits and certifications.",
    benefits: "Free consultation, ISO certification assistance, and export fair exposure.",
    eligibility: "Registered textile MSMEs with less than 100 employees.",
    applicationProcess: "Submit expression of interest on the MSME portal.",
    documentsRequired: "Udyam registration, company PAN, previous audit reports",
    fundsUtilized: "Rs. 22 Crores",
    beneficiariesReached: "400",
    reviews: [
      "Now we export to 3 countries, thanks to the help – Imran K.",
      "Good initiative to make small businesses global – Varsha N."
    ]
  },
  {
    name: "Tech Incubation Boost Program",
    state: "Telangana",
    sector: "IT Services",
    group: "Students and Innovators",
    type: "Incubation",
    details: "Supports tech students and innovators with incubation and patent support.",
    benefits: "Free workspace, mentorship, and patent filing cost coverage.",
    eligibility: "College students or innovators with a functional tech idea.",
    applicationProcess: "Apply via T-Hub website with idea concept note.",
    documentsRequired: "College ID (if student), project concept, Aadhaar",
    fundsUtilized: "Rs. 30 Crores",
    beneficiariesReached: "270",
    reviews: [
      "Filed my first patent through this scheme – Rahul D.",
      "Mentors really helped refine my startup idea – Sneha J."
    ]
  },
  {
    name: "Digital Literacy for Rural Youth",
    state: "Bihar",
    sector: "Education",
    group: "Youth",
    type: "Training",
    details: "Provides basic computer and internet training in rural areas.",
    benefits: "Free 6-week certification course with hands-on sessions.",
    eligibility: "Rural residents aged 16–30 years with basic education.",
    applicationProcess: "Register via block-level education office.",
    documentsRequired: "Aadhaar, age proof, education certificate",
    fundsUtilized: "Rs. 12 Crores",
    beneficiariesReached: "5600",
    reviews: [
      "Now I can use email and apply for jobs online – Akash K.",
      "Very helpful to learn basics of Excel and MS Word – Pooja V."
    ]
  },
  {
    name: "Tourism Business Grant Scheme",
    state: "Rajasthan",
    sector: "Tourism",
    group: "Entrepreneurs",
    type: "Grant",
    details: "Offers grants to individuals setting up tourism-related businesses.",
    benefits: "Rs. 5–10 Lakhs grant for setup costs and marketing.",
    eligibility: "Tourism-focused businesses in Rajasthan with a detailed plan.",
    applicationProcess: "Apply via Rajasthan Tourism Board with proposal.",
    documentsRequired: "Proposal document, ID proof, bank details",
    fundsUtilized: "Rs. 40 Crores",
    beneficiariesReached: "325",
    reviews: [
      "Started my heritage homestay with their help – Mohan S.",
      "Tourism promotion funding gave us great visibility – Kamla B."
    ]
  },
  {
    name: "Urban Innovation Challenge Fund",
    state: "Delhi",
    sector: "Smart Cities",
    group: "Urban Startups",
    type: "Competition Grant",
    details: "Fund for innovative urban solutions like waste, transport, and e-governance.",
    benefits: "Rs. 15 Lakhs grant for top 10 selected ideas each year.",
    eligibility: "Urban startups with deployable prototypes in smart city areas.",
    applicationProcess: "Submit through Smart City Innovation portal.",
    documentsRequired: "Startup registration, prototype demo, founders’ details",
    fundsUtilized: "Rs. 10 Crores",
    beneficiariesReached: "75",
    reviews: [
      "Our waste-sorting app got selected and funded – Tanya N.",
      "Good platform to pilot city-level projects – Rohan M."
    ]
  },

{
    name: "Craft Cluster Development Scheme",
    state: "Odisha",
    sector: "Handicrafts",
    group: "Artisans",
    type: "Infrastructure",
    details: "Supports the creation of common facility centers for artisan clusters.",
    benefits: "Shared workspaces, equipment, and training programs.",
    eligibility: "Registered artisan groups or cooperatives in Odisha.",
    applicationProcess: "Apply via Handlooms and Handicrafts Development Corporation.",
    documentsRequired: "Group registration, list of members, land ownership",
    fundsUtilized: "Rs. 16 Crores",
    beneficiariesReached: "950",
    reviews: [
      "Now we have machines to produce at scale – Suresh N.",
      "Training and quality checks improved our exports – Meena B."
    ]
  },
  {
    name: "North East Startup Fellowship",
    state: "Assam",
    sector: "Multi-sector",
    group: "Youth Entrepreneurs",
    type: "Fellowship",
    details: "Offers mentorship, stipend, and workspace to budding entrepreneurs.",
    benefits: "Monthly stipend and expert mentorship for 12 months.",
    eligibility: "Young entrepreneurs from North East with a startup idea.",
    applicationProcess: "Apply via North East Startup Hub with pitch deck.",
    documentsRequired: "Domicile certificate, idea summary, ID proof",
    fundsUtilized: "Rs. 8 Crores",
    beneficiariesReached: "120",
    reviews: [
      "Mentorship was life-changing – Jintu R.",
      "This gave me the courage to launch my company – Anjali P."
    ]
  },
  {
    name: "Blue Economy Innovation Scheme",
    state: "Kerala",
    sector: "Fisheries",
    group: "Coastal Communities",
    type: "Innovation Grant",
    details: "Encourages sustainable fishing and marine innovation.",
    benefits: "Up to Rs. 15 Lakhs for approved innovations in marine tech.",
    eligibility: "Marine tech startups or cooperative groups in coastal Kerala.",
    applicationProcess: "Apply through Kerala Innovation Foundation.",
    documentsRequired: "Proposal, team ID proofs, sustainability plan",
    fundsUtilized: "Rs. 20 Crores",
    beneficiariesReached: "110",
    reviews: [
      "Our eco-friendly nets got funded – Shaji P.",
      "Support for sustainable practices is much needed – Bindu C."
    ]
  },
  {
    name: "Digital Retail Upliftment Scheme",
    state: "Haryana",
    sector: "Retail",
    group: "Small Traders",
    type: "Technology Support",
    details: "Enables small traders to digitize their operations.",
    benefits: "Free POS systems, training in digital payments, and listing support.",
    eligibility: "Retailers with turnover below Rs. 1 Crore annually.",
    applicationProcess: "Apply via District Trade Office online portal.",
    documentsRequired: "GST certificate, Aadhaar, trade license",
    fundsUtilized: "Rs. 13 Crores",
    beneficiariesReached: "4300",
    reviews: [
      "Now I accept UPI and have better records – Mohit S.",
      "The free POS was a game changer – Reena D."
    ]
  },
  {
    name: "Smart Farming Mission",
    state: "Madhya Pradesh",
    sector: "Agriculture",
    group: "Small Farmers",
    type: "Tech Adoption",
    details: "Promotes precision farming through sensors and mobile apps.",
    benefits: "Subsidy on soil sensors, mobile app training, expert visits.",
    eligibility: "Farmers with holdings under 5 acres.",
    applicationProcess: "Enroll through local agriculture office.",
    documentsRequired: "Land record, bank account, Aadhaar card",
    fundsUtilized: "Rs. 28 Crores",
    beneficiariesReached: "3200",
    reviews: [
      "Now I know exactly when to irrigate – Devraj R.",
      "Yield improved and costs reduced – Kavita B."
    ]
  },
  {
    name: "Youth Artisan Revival Scheme",
    state: "West Bengal",
    sector: "Traditional Arts",
    group: "Young Artisans",
    type: "Heritage Support",
    details: "Encourages youth to take up and modernize traditional arts.",
    benefits: "Monthly stipend and online marketplace access.",
    eligibility: "Aged 18–35 with family history in artisan work.",
    applicationProcess: "Apply via State Culture Department.",
    documentsRequired: "Art portfolio, family proof, Aadhaar",
    fundsUtilized: "Rs. 9 Crores",
    beneficiariesReached: "780",
    reviews: [
      "Helped me keep my grandfather’s art alive – Pritam D.",
      "I now sell online across India – Malini C."
    ]
  },
  {
    name: "E-Mobility Innovation Grant",
    state: "Delhi",
    sector: "Automotive",
    group: "Startups",
    type: "R&D Support",
    details: "Funds R&D projects in electric vehicle technologies.",
    benefits: "Grants up to Rs. 20 Lakhs per project.",
    eligibility: "Tech startups or academic teams in e-mobility sector.",
    applicationProcess: "Apply through Delhi Science & Tech Department.",
    documentsRequired: "Prototype details, team info, startup registration",
    fundsUtilized: "Rs. 35 Crores",
    beneficiariesReached: "85",
    reviews: [
      "Battery tech idea funded and tested – Farhan Q.",
      "We developed a new EV charger model – Riya V."
    ]
  },
  {
    name: "Inclusive Ed-Tech Scheme",
    state: "Uttar Pradesh",
    sector: "Education",
    group: "Underprivileged Students",
    type: "Digital Access",
    details: "Distributes tablets and access to online classes for students.",
    benefits: "Free tablet, 1 year data, and state-approved content access.",
    eligibility: "Students from BPL families in govt schools (grades 9–12).",
    applicationProcess: "School-level application to Education Department.",
    documentsRequired: "BPL card, school ID, age proof",
    fundsUtilized: "Rs. 75 Crores",
    beneficiariesReached: "10000+",
    reviews: [
      "Now I study anytime with my tablet – Imran A.",
      "My daughter prepares for NEET from home – Savita N."
    ]
  },
  {
    name: "Desert Agro-Entrepreneur Scheme",
    state: "Rajasthan",
    sector: "Agroforestry",
    group: "Farmers and Cooperatives",
    type: "Grant + Training",
    details: "Supports arid zone agroforestry through new crop adoption.",
    benefits: "Training, saplings, and Rs. 5–15 Lakhs grant for implementation.",
    eligibility: "FPOs or farmers in desert districts.",
    applicationProcess: "Apply through Agriculture Extension Office.",
    documentsRequired: "Land document, group registration, photo ID",
    fundsUtilized: "Rs. 18 Crores",
    beneficiariesReached: "670",
    reviews: [
      "We now grow aloe vera profitably – Dinesh L.",
      "Better income and soil health – Rekha V."
    ]
  },
  {
    name: "Startup Legal Aid Scheme",
    state: "Goa",
    sector: "Legal Services",
    group: "Startups",
    type: "Advisory",
    details: "Provides free legal consultation for early-stage startups.",
    benefits: "Legal support on IP, contracts, and compliance.",
    eligibility: "Startups registered within the last 2 years in Goa.",
    applicationProcess: "Register on Goa Startup Portal and book consultation slot.",
    documentsRequired: "Startup certificate, company PAN, founder ID",
    fundsUtilized: "Rs. 4 Crores",
    beneficiariesReached: "300",
    reviews: [
      "Got help with our vendor contracts – Priya T.",
      "Solved IP issues that delayed our product – Ankit J."
    ]
  }
  
];



// Get DOM elements
const searchInput = document.querySelector('.search-bar input');
const stateSelect = document.querySelector('#filter-state');
const industrySelect = document.querySelector('#filter-industry');
const targetGroupSelect = document.querySelector('#filter-target-group');
const supportTypeSelect = document.querySelector('#filter-support-type');
const tableBody = document.querySelector('#schemeTable tbody');

// Modal elements
const modal = document.getElementById('scheme-modal');
const modalName = document.getElementById('modal-scheme-name');
const modalDescription = document.getElementById('modal-scheme-description');
const modalBenefits = document.getElementById('modal-benefits');
const modalEligibility = document.getElementById('modal-eligibility');
const modalApplicationProcess = document.getElementById('modal-application-process');
const modalDocumentsRequired = document.getElementById('modal-documents-required');
const modalFundsUtilized = document.getElementById('modal-funds-utilized');
const modalBeneficiariesReached = document.getElementById('modal-beneficiaries-reached');
const modalReviewsList = document.getElementById('modal-reviews-list');
const closeBtn = document.querySelector('.close-btn');

// Render filtered data in table
function renderTable(data) {
  tableBody.innerHTML = '';

  if (data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5">No schemes found.</td></tr>`;
    return;
  }

  data.forEach(scheme => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${scheme.name}</td>
      <td>${scheme.state}</td>
      <td>${scheme.sector}</td>
      <td>${scheme.group}</td>
      <td>${scheme.type}</td>
    `;

    // Add click handler for modal
row.addEventListener('click', () => {
  modalName.textContent = scheme.name;
  modalDescription.textContent = scheme.details;
  modalBenefits.textContent = scheme.benefits;
  modalEligibility.textContent = scheme.eligibility;
  modalApplicationProcess.textContent = scheme.applicationProcess;
  modalDocumentsRequired.textContent = scheme.documentsRequired;
  modalFundsUtilized.textContent = scheme.fundsUtilized;
  modalBeneficiariesReached.textContent = scheme.beneficiariesReached;
  modalReviewsList.innerHTML = '';
scheme.reviews.forEach(review => {
  const li = document.createElement('li');
  li.textContent = review;
  modalReviewsList.appendChild(li);
});

  modal.classList.remove('hidden');
});


    tableBody.appendChild(row);
  });
}

// Get all filters
function getFilters() {
  return {
    name: searchInput.value.trim().toLowerCase(),
    state: stateSelect.value,
industry: industrySelect.value,
targetGroup: targetGroupSelect.value,
supportType: supportTypeSelect.value

  };
}

// Filter data based on search and dropdowns
function filterData() {
  const filters = getFilters();

  const filtered = schemes.filter(scheme => {
    return (
      scheme.name.toLowerCase().includes(filters.name) &&
      (filters.state === "State" || scheme.state === filters.state) &&
(filters.industry === "Industry" || scheme.sector === filters.industry) &&
(filters.targetGroup === "Target Group" || scheme.group === filters.targetGroup) &&
(filters.supportType === "Support Type" || scheme.type === filters.supportType)

    );
  });

  renderTable(filtered);
}

// Event listeners for filters
searchInput.addEventListener('input', filterData);
// Event listeners for filters (updated to include stateSelect)
[stateSelect, industrySelect, targetGroupSelect, supportTypeSelect].forEach(select => {
  select.addEventListener('change', filterData);
});



// Event listener for modal close button
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Optional: Close modal if clicked outside the content
modal.addEventListener('click', (e) => {
  if (e.target.id === 'scheme-modal') {
    modal.classList.add('hidden');
  }
});

// Initial table render
renderTable(schemes);

