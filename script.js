
  // document.addEventListener("DOMContentLoaded", () => {
  //   const menuBtn = document.getElementById("menuBtn");
  //   const mobileMenu = document.getElementById("mobileMenu");
  //   const menuIcon = document.getElementById("menuIcon");

  //   let isOpen = false;

  //   menuBtn.addEventListener("click", () => {
  //     isOpen = !isOpen;

     
  //     mobileMenu.classList.toggle("hidden");
      
  //     if (isOpen) {
  //       menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12"); // cross
  //     } else {
  //       menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16"); // hamburger
  //     }
  //   });
  // });


  document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");

  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.remove("scale-y-0", "opacity-0");
        mobileMenu.classList.add("scale-y-100", "opacity-100");
      }, 10);
      menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12"); // cross
    } else {
      mobileMenu.classList.remove("scale-y-100", "opacity-100");
      mobileMenu.classList.add("scale-y-0", "opacity-0");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300); // match duration-300
      menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16"); // hamburger
    }
  });
});




   document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop(); // e.g. 'about.html'
    const navLinks = document.querySelectorAll("nav a, #mobileMenu a"); 

    navLinks.forEach(link => {
      const linkPath = link.getAttribute("href").split("/").pop();
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  });



  
 // Open modal when clicking any image
document.querySelectorAll('.open-modal').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('globalModal');
    modal.classList.remove('hidden');

    // Animate backdrop + modal box
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('div').classList.remove('opacity-0', 'scale-95');
    }, 10);
  });
});

// Close modal with animation
function closeModal() {
  const modal = document.getElementById('globalModal');

  // Fade out backdrop + shrink modal
  modal.classList.add('opacity-0');
  modal.querySelector('div').classList.add('opacity-0', 'scale-95');

  // After animation, hide modal completely
  setTimeout(() => modal.classList.add('hidden'), 300);
}

document.addEventListener("DOMContentLoaded", function () {
 const profiles = [
  {
    title: "Sales Executive/ Snr. Sales Executive",
    department: "Sales",
    location: "Bangalore, India",
    experience: "1-3 years",
    overview: "We are looking for a motivated and dynamic Real Estate Sales Professional to join our team. The ideal candidate will be responsible for generating leads, meeting potential clients, showcasing properties, and closing deals. You will play a key role in driving revenue, building customer relationships, and representing the brand in the market.",
    responsibilities: [
      "Sales Executive should be able to generate sales leads through cold calling and online marketing activity.",
      "Will work on verified Leads, follow-ups, arranging site visits, and assist for closing the deals.",
      "Interact with customers to determine their requirements & addressing their queries explain project/services and demonstrate the features and benefits.",
      "Sales Executive has to manage the clients at the site.",
      "He has to keep records of calls and sales and note useful information in the CRM."
    ],
    requirements: [
      "The candidate should have strong analytical and project management skills, confident and dynamic personality.",
      "Should have strong creative outlook.",
      "Excellent communication skills, Negotiation skills, Client Relationship and Management skills.",
      "Expertise in sales and marketing, experience of selling Luxury Apartments (High ticket selling).",
      "Highly skilled, motivated and targeted oriented.",
      "Must be self-motivator and self-starter, excellent time management skills.",
      "Proven track record of successfully meeting sales target.",
      "Must have some sales experience (real estate industry).",
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Opportunities for professional development and Career Growth A dynamic and supportive work environment.",
    ]
  },
   {
    title: "Sales Executive/ Snr. Sales Executive",
    department: "Sales",
    location: "Dubai, UAE",
    experience: "1-3 years",
    overview: "We are looking for a motivated and dynamic Real Estate Sales Professional to join our team. The ideal candidate will be responsible for generating leads, meeting potential clients, showcasing properties, and closing deals. You will play a key role in driving revenue, building customer relationships, and representing the brand in the market.",
    responsibilities: [
      "Sales Executive should be able to generate sales leads through cold calling and online marketing activity.",
      "Will work on verified Leads, follow-ups, arranging site visits, and assist for closing the deals",
      "Interact with customers to determine their requirements & addressing their queries explain project/services and demonstrate the features and benefits",
      "Sales Executive has to manage the clients at the site",
      "He has to keep records of calls and sales and note useful information in the CRM"
    ],
     requirements: [
      "The candidate should have strong analytical and project management skills, confident and dynamic personality.",
      "Should have strong creative outlook.",
      "Excellent communication skills, Negotiation skills, Client Relationship and Management skills.",
      "Expertise in sales and marketing, experience of selling Luxury Apartments (High ticket selling).",
      "Highly skilled, motivated and targeted oriented.",
      "Must be self-motivator and self-starter, excellent time management skills.",
      "Proven track record of successfully meeting sales target.",
      "Must have some sales experience (real estate industry).",
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Opportunities for professional development and Career Growth A dynamic and supportive work environment.",
    ]
  },
   {
    title: "Sales Executive/ Snr. Sales Executive",
    department: "Sales",
    location: "Noida, India",
    experience: "1-2 years",
    overview: "We are looking for a motivated and dynamic Real Estate Sales Professional to join our team. The ideal candidate will be responsible for generating leads, meeting potential clients, showcasing properties, and closing deals. You will play a key role in driving revenue, building customer relationships, and representing the brand in the market.",
    responsibilities: [
      "Sales Executive should be able to generate sales leads through cold calling and online marketing activity.",
      "Will work on verified Leads, follow-ups, arranging site visits, and assist for closing the deals",
      "Interact with customers to determine their requirements & addressing their queries explain project/services and demonstrate the features and benefits",
      "Sales Executive has to manage the clients at the site",
      "He has to keep records of calls and sales and note useful information in the CRM"
    ],
     requirements: [
      "The candidate should have strong analytical and project management skills, confident and dynamic personality.",
      "Should have strong creative outlook.",
      "Excellent communication skills, Negotiation skills, Client Relationship and Management skills.",
      "Expertise in sales and marketing, experience of selling Luxury Apartments (High ticket selling).",
      "Highly skilled, motivated and targeted oriented.",
      "Must be self-motivator and self-starter, excellent time management skills.",
      "Proven track record of successfully meeting sales target.",
      "Must have some sales experience (real estate industry).",
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Opportunities for professional development and Career Growth A dynamic and supportive work environment.",
    ]
  },
   {
    title: "Sales Executive",
    department: "Sales",
    location: "Panvel/ Mahim, India",
    experience: "1-3 years",
    overview: "We are looking for a motivated and dynamic Real Estate Sales Professional to join our team. The ideal candidate will be responsible for generating leads, meeting potential clients, showcasing properties, and closing deals. You will play a key role in driving revenue, building customer relationships, and representing the brand in the market.",
    responsibilities: [
      "Sales Executive should be able to generate sales leads through cold calling and online marketing activity.",
      "Will work on verified Leads, follow-ups, arranging site visits, and assist for closing the deals",
      "Interact with customers to determine their requirements & addressing their queries explain project/services and demonstrate the features and benefits",
      "Sales Executive has to manage the clients at the site",
      "He has to keep records of calls and sales and note useful information in the CRM"
    ],
     requirements: [
      "The candidate should have strong analytical and project management skills, confident and dynamic personality.",
      "Should have strong creative outlook.",
      "Excellent communication skills, Negotiation skills, Client Relationship and Management skills.",
      "Expertise in sales and marketing, experience of selling Luxury Apartments (High ticket selling).",
      "Highly skilled, motivated and targeted oriented.",
      "Must be self-motivator and self-starter, excellent time management skills.",
      "Proven track record of successfully meeting sales target.",
      "Must have some sales experience (real estate industry).",
      "Must have worked in Panvel and Mahim location."
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Opportunities for professional development and Career Growth A dynamic and supportive work environment.",
    ]
  },
  

   {
    title: "Tele Sales",
    department: "Sales",
    location: "Bangalore, India",
    experience: "1-2 years",
    overview: "We are looking for a dynamic and motivated Tele-sales Executive to join our growing sales team. The successful candidate will be responsible for generating site visit over the phone by contacting potential or existing customers and promoting our products/services. A successful tele-sales executive must be persuasive and able to handle rejection gracefully.",
    responsibilities: [
      "Make outbound calls to prospective customers to introduce and sell.",
      "Handle customer inquiries and provide relevant information about offerings.",
      "Explain project features, benefits, and pricing to potential customers.",
      "Follow up on leads and maintain customer relationships.",
      "Achieve and exceed site visit targets on a weekly and monthly basis.",
      "Maintain accurate records of customer interactions and sales activity in CRM software.",
      "Resolve customer queries promptly and effectively.",
      "Provide feedback on customer needs, problems, interests, and competitive activities",
    ],
     requirements: [
      "Proven experience as a tele-sales representative in real estate.",
       "Excellent communication and negotiation skills.",
       "Fluent in English.",
       "Strong interpersonal and convincing ability.",
       "Goal-oriented with a track record of meeting or exceeding site visit targets.",
       "Ability to handle pressure and rejection professionally.",
       "Basic computer knowledge and proficiency in MS Office and CRM software.",
       "High school diploma or equivalent; a bachelor’s degree is a plus.",
      
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Opportunities for professional development and Career Growth A dynamic and supportive work environment.",
    ]
  },

   {
    title: "Pre Sales",
    department: "Sales",
    location: "Bangalore, India",
    experience: "1-2 years",
    overview: "We are hiring a Pre-Sales Executive to handle leads, qualify prospects, schedule site visits, and support the sales team. The role focuses on lead conversion at the top of the funnel. You will play a key role in driving revenue, building customer relationships.",
    responsibilities: [
      "Handle and qualify leads from portals, campaigns.",
      "Understand customer needs and suggest suitable projects.",
      "Schedule and follow up on site visits.",
      "Coordinate with the sales team for lead Status.",
      "Maintain CRM updates and follow-up communication."
    ],
    requirements: [
      "1–3 years of experience in real estate or Pre-sales.",
      "Good communication and convincing skills.",
      "Basic knowledge of real estate projects and market trends.",
      "Familiar with CRM tools, WhatsApp, and Excel.",
      
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Opportunities for professional development and Career Growth A dynamic and supportive work environment.",
    ]
  },

   {
    title: "Motion Graphic Designer/ Graphic Designer",
    department: "Digital Marketing",
    location: "Bangalore, India",
    experience: "0.6-2 years",
    overview: "This is a full-time on-site role for a Motion Graphic Designer, located in Bengaluru. The Motion Graphic Designer will be responsible for creating motion designs and graphics, producing videos, and designing various graphic components. The designer will collaborate with the marketing and creative teams to deliver high-quality visual content.",
    responsibilities: [
      
    ],
    requirements: [
      "Skills in Motion Design, Motion Graphics, and Video Production.",
      "Proficiency in Graphic Design and Graphics.",
      "Excellent attention to detail and creative problem-solving abilities.",
      "Strong ability to work within a team and independently.",
      "Experience with design software such as Adobe After Effects, Premiere Pro, and Photoshop is preferred.",
      "Bachelor's degree in Graphic Design, Motion Graphics, or a related field is a plus."
      
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Opportunities for professional development and Career Growth A dynamic and supportive work environment.",
      "Candidate having 6 months to 1.5yrs of experience can only apply."
    ]
  },

    {
    title: "Search Engine Optimization(SEO)",
    department: "Digital Marketing",
    location: "Bangalore, India",
    experience: "1-3 years",
    overview: "We seek an SEO Analyst with real estate experience to boost organic visibility, drive qualified traffic, and enhance lead generation via search engines. The candidate should excel in SEO best practices, tools, and real estate search dynamics.",
    responsibilities: [
      "Conduct keyword research for real estate listings, blogs, and landing pages.",
      "Optimize on-page SEO (meta tags, headers, URLs, content).",
"Perform technical SEO audits and fix issues (crawl errors, page speed, mobile-friendliness).",
"Execute off-page SEO (link building, directories, guest posts).",
"Track and report SEO performance using Google Analytics, Search Console, SEMrush, etc.",
"Collaborate with content and web teams to enhance site structure and content.",
"Analyze competitors’ SEO strategies in real estate.",
"Stay updated on Google algorithm changes and real estate search trends."

    ],
    requirements: [
      "Bachelor’s degree in Marketing, IT, or related field",
      "1–3 years of SEO experience, ideally in real estate or related agencies.",
      "Proficient in Google Search Console, Analytics, Ahrefs/SEMrush, Screaming Frog.",
      "Familiar with WordPress, real estate platforms, and schema markup.",
       "Strong analytical and reporting skills.",
      "Basic HTML/CSS knowledge is a plus.",
      
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Work on large-scale real estate digital campaigns",
      "Growth opportunities in a dynamic digital team."
    ]
  },

   {
    title: "Lead Generation Specialist",
    department: "Digital Marketing",
    location: "Bangalore, India",
    experience: "1-3 years",
    overview: "We are looking for a Lead Generation Specialist with hands-on experience in running and optimizing Google Ads and Facebook Ads to generate high-quality leads for our real estate projects. The ideal candidate will have a deep understanding of paid marketing strategies, targeting techniques, and funnel optimization to drive inquiries.",
    responsibilities: [
      "Create and manage lead generation campaigns on Google and Facebook Ads platforms.",
      "Optimize ads for maximum ROI and minimum cost per lead (CPL).",
"Monitor campaign performance and implement A/B testing strategies.",
"Prepare performance reports and suggest improvements.",

    ],
    requirements: [
      "1–3 years of experience in performance marketing (preferably in real estate).",
      "Strong knowledge of Google Ads, Meta Ads Manager, and analytics tools.",
      "Experience with tracking tools (Google Tag Manager, Pixel) and CRM systems. ",
      "Google Ads or Meta certification is a plus.",
      
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Work on large-scale real estate digital campaigns",
      "Growth opportunities in a dynamic digital team."
    ]
  },

   {
    title: "Lead Generation Manager",
    department: "Digital Marketing",
    location: "Bengaluru India",
    experience: "4-6 years",
    overview: "We are seeking an experienced Lead Generation Manager with proven expertise in managing paid campaigns and leading a team. The ideal candidate should have 4–6 years of experience in performance marketing and team management, with strong skills in Google Ads, Facebook Ads, and funnel optimization. This role will be responsible for driving high-quality inquiries for real estate projects while mentoring the lead generation team.",
    responsibilities: [
      "Create, manage, and optimize lead generation campaigns on Google Ads and Facebook Ads.",
      "Drive maximum ROI with minimum cost per lead (CPL) through advanced targeting and A/B testing.",
"Lead and mentor the lead generation team, ensuring consistent performance and growth.",
"Track, monitor, and analyze campaign performance using analytics and CRM tools.",
"Prepare detailed reports and recommend actionable improvements.",
"Collaborate with the sales team to ensure smooth handover and conversion of leads.",

    ],
    requirements: [
      "4–6 years of experience in performance marketing and team management (preferably in real estate).",
      "Strong knowledge of Google Ads, Meta Ads Manager, and analytics tools.",
      "Experience with Google Tag Manager, Meta Pixel, and CRM systems.",
      "Google Ads or Meta certifications will be an added advantage.",
      "Excellent leadership, communication, and analytical skills."
      
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Work on large-scale real estate digital campaigns",
      "Growth opportunities in a dynamic digital team."
    ]
  },
   {
    title: "Digital Marketing Manager",
    department: "Digital Marketing",
    location: "Bengaluru India",
    experience: "4-6 years",
    overview: "We are looking for an experienced Digital Marketing Manager to plan, execute, and optimize online marketing campaigns for our real estate projects. The candidate should have hands-on expertise in lead generation, paid ads, SEO, and social media marketing with proven results in the real estate sector.",
    responsibilities: [
      "Develop and implement digital marketing strategies to generate high-quality leads.",
      "Manage Google Ads, Facebook Ads, and other paid campaigns.",
      "Optimize campaigns to achieve maximum ROI and lower CPL.",
      "Plan and execute SEO, SEM, and social media marketing activities.",
      "Analyze campaign performance and prepare regular reports.",
      "Coordinate with sales teams to align marketing campaigns with project goals.",
      "Stay updated with digital trends and competitor activities.",


    ],
    requirements: [
      "Bachelor’s degree in Marketing or related field.",
      "4–6 years of experience in performance marketing and team management (preferably in real estate).",
"Strong knowledge of Google Ads, Facebook Ads, SEO, SEM, and analytics tools.",
"Excellent communication and analytical skills.",
"Ability to work in a fast-paced real estate environment.",  
      
    ],
    offer: [
      "Competitive salary and performance bonuses",
      "Work on large-scale real estate digital campaigns",
      "Growth opportunities in a dynamic digital team."
    ]
  },
//     {
//     title: "Search Engine Optimization(SEO)",
//     department: "Digital Marketing",
//     location: "Bangalore, India",
//     experience: "1-3 years",
//     overview: "We are looking for a motivated and dynamic Real Estate Sales Professional to join our team. The ideal candidate will be responsible for generating leads, meeting potential clients, showcasing properties, and closing deals. You will play a key role in driving revenue, building customer relationships, and representing the brand in the market.",
//     responsibilities: [
//       "Conduct keyword research for real estate listings, blogs, and landing pages.",
//       "Optimize on-page SEO (meta tags, headers, URLs, content).",
// "Perform technical SEO audits and fix issues (crawl errors, page speed, mobile-friendliness).",
// "Execute off-page SEO (link building, directories, guest posts).",
// "Track and report SEO performance using Google Analytics, Search Console, SEMrush, etc.",
// "Collaborate with content and web teams to enhance site structure and content.",
// "Analyze competitors’ SEO strategies in real estate.",
// "Stay updated on Google algorithm changes and real estate search trends."

//     ],
//     requirements: [
//       "Bachelor’s degree in Marketing, IT, or related field",
//       "1–3 years of SEO experience, ideally in real estate or related agencies.",
//       "Proficient in Google Search Console, Analytics, Ahrefs/SEMrush, Screaming Frog.",
//       "Familiar with WordPress, real estate platforms, and schema markup.",
//        "Strong analytical and reporting skills.",
//       "Basic HTML/CSS knowledge is a plus.",
      
//     ],
//     offer: [
//       "Competitive salary and performance bonuses",
//       "Work on large-scale real estate digital campaigns",
//       "Growth opportunities in a dynamic digital team."
//     ]
//   },
  
];



const grid = document.getElementById("career-grid");
const modal = document.getElementById("careerModal");
const closeModal = document.getElementById("closeModal");

// Modal elements
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalExperience = document.getElementById("modalExperience");
const modalDescription = document.getElementById("modalDescription");

// Render cards
profiles.forEach((profile, index) => {
  const card = document.createElement("div");
  card.className = "bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition";
  card.innerHTML = `
    <h3 class="text-lg font-semibold text-gray-800">${profile.title}</h3>
    <p class="text-sm text-gray-600">${profile.location}</p>
    <p class="text-sm text-gray-600">${profile.experience}</p>
  `;
  
  // Click → open modal
  card.addEventListener("click", () => {
  modalTitle.textContent = profile.title;
  modalLocation.textContent = `📍 ${profile.location}`;
  modalExperience.textContent = `💼 ${profile.experience}`;

  // Build full description dynamically
  modalDescription.innerHTML = `
    <p><strong>Department:</strong> ${profile.department}</p>
    <p class="mt-2">${profile.overview}</p>

    <h4 class="mt-4 font-semibold">What you will do</h4>
    <ul class="list-disc pl-5">
      ${profile.responsibilities.map(r => `<li>${r}</li>`).join("")}
    </ul>

    <h4 class="mt-4 font-semibold">Who you are</h4>
    <ul class="list-disc pl-5">
      ${profile.requirements.map(r => `<li>${r}</li>`).join("")}
    </ul>

    <h4 class="mt-4 font-semibold">What we offer</h4>
    <ul class="list-disc pl-5">
      ${profile.offer.map(o => `<li>${o}</li>`).join("")}
    </ul>
  `;

  modal.classList.remove("hidden");
});


  grid.appendChild(card);
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

})




document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openFormBtn");
  const closeBtn = document.getElementById("closeFormBtn");
  const modal = document.getElementById("formModal");
  // console.log(openBtn);
  openBtn.addEventListener("click", () => {
    modal.classList.remove("form");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("form");
  });

  // Close modal if user clicks outside form box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("form");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const inputs = document.querySelectorAll(".phone");
   
//   inputs.forEach(input => {
//     window.intlTelInput(input, {
//       initialCountry: "in",
//       preferredCountries: ["us", "in", "gb", "au"],
//       separateDialCode: true,
      
//     });
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  const contactForms = document.querySelectorAll(".contactForm");

  contactForms.forEach(form => {
    const phoneInputField = form.querySelector(".phone");

    if (phoneInputField) {
      // Attach intlTelInput instance directly to the input element
      const iti = window.intlTelInput(phoneInputField, {
        initialCountry: "in",
        preferredCountries: ["us", "in", "gb", "au"],
        separateDialCode: true,
      });
console.log(phoneInputField);
      // Save the instance so we can get it later
      phoneInputField._iti = iti;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Always read from this form’s phone input
      const phoneInputField = form.querySelector(".phone");

      let mobileNumber = phoneInputField?.value || "";
      if (phoneInputField && phoneInputField._iti) {
        mobileNumber = phoneInputField._iti.getNumber(); // ✅ correct instance
      }

      const formData = {
        name: form.name?.value || "",
        email: form.email?.value || "",
        mobile: mobileNumber,
        message: form.message?.value || ""
      };

      console.log("Form Data from:", formData);

      // Example: send to backend
      // fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // form.reset(); // reset only if you want to clear inputs
      alert("Form submitted successfully!");
      window.location.href = "thankyou.html";
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const jobForms = document.querySelectorAll(".jobForm");

  jobForms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
 // Check what's inside FormData
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      fetch("sendmail.php", {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            alert("Application sent successfully!");
            form.reset();
          } else {
            alert("Error: " + data.message);
          }
        })
        .catch(err => console.error("Error:", err));
    });
  });
});



document.addEventListener("DOMContentLoaded", ()=>{
  const modal = document.getElementById("awardsModal");
const modalImg = document.getElementById("awards-modal-img");
const modalCaption = document.getElementById("awards-modal-caption");
const closeModal = document.getElementById("awards-close-modal");
const galleryImgs = document.querySelectorAll(".awards-gallery-img");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalCaption.textContent = img.dataset.caption; // get caption
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// Close modal on click outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});


})


// video-modal.js
document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const closeModal = document.getElementById('close-video-modal');

  // Make function globally accessible
  window.openVideoModal = function(src) {
    modalVideo.src = src;
    videoModal.classList.remove('hidden');
    videoModal.classList.add('flex');
    modalVideo.play();
  }

  closeModal.addEventListener('click', () => {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    videoModal.classList.add('hidden');
    videoModal.classList.remove('flex');
  });

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
      videoModal.classList.add('hidden');
      videoModal.classList.remove('flex');
    }
  });
});
