<template>
  <div class="">
    <div class="team">
      <!-- <h2 class="text-primary">Our Team</h2> -->
      <!-- <p class="desc">Our tranined staff</p> -->
      <div class="grid">
        <figure
          v-for="(course, index) in courses"
          :key="index"
          class="effect-sadie"
        >
          <img :src="course.img" alt="img02" />
          <figcaption>
            <h2>
              <div class="title">{{ course.title }}</div>
              <!-- <div class="name q-mt-sm">Hover to see the intro video</div> -->

              <div
                style="gap: 1rem"
                class="row justify-center no-wrap items-center"
              >
                <q-btn
                  no-caps
                  no-wrap
                  to="/portals/greyacademy/register"
                  class="q-mt-lg bg-green-6 text-white q-px-md"
                >
                  Enroll
                </q-btn>
                <q-btn
                  no-caps
                  no-wrap
                  @click="read(course)"
                  class="q-mt-lg bg-green-8 text-white q-px-md"
                >
                  Read more
                </q-btn>
              </div>
              <!-- <div class="name">{{ course.name }}</div> -->
            </h2>
            <!-- <div v-if="course.title === 'BLOCKCHAIN TECHNOLOGY'" class="watch">
              <q-spinner-hourglass color="primary" size="1.5em" />

              <small>Coming soon</small>
            </div>
            <div v-else class="watch">
              <p @click="toggleVideo(course.Video_link)">
                <i class="fa-duotone fa-play"></i>
              </p>
              <small>Watch the intro</small>
            </div> -->
          </figcaption>
        </figure>
      </div>
    </div>
    <q-dialog full-width v-model="videoDialog">
      <q-card style="height: fit-content; width: 100%" class="dialog_wid">
        <!-- {{ spin }} -->
        <div v-if="load" class="spin q-py-xl text-center">
          <q-spinner-cube size="100px" color="indigo" />
        </div>

        <q-video v-else :ratio="16 / 9" :src="video" />
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-grey-7">Read More...</div>
          <div v-if="course.title" class="tex text-black text-weight-bold">
            {{ course.title }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <div>
            <div class="text-h5 text-weight-bold text-black">
              Possible Career Path
            </div>
            <ul>
              <li
                class="text-black"
                v-for="(path, index) in course.desc.path"
                :key="index"
              >
                {{ path }}
              </li>
            </ul>
          </div>
          <div>
            <div class="text-h5 text-weight-bold text-black">
              Course Content
            </div>
            <ul>
              <li
                class="text-black"
                v-for="(content, index) in course.desc.content"
                :key="index"
              >
                {{ content }}
              </li>
            </ul>
          </div>
          <p>
            <span class="text-weight-bold text-black text-h6">
              Peer-to-peer Sessions:
            </span>
            <span class="text-h6 text-black">
              {{ course.desc.session }}
            </span>
          </p>
          <p>
            <span class="text-weight-bold text-h6 text-black"> Timing: </span>
            <span class="text-h6 text-black">{{ course.desc.time }}</span>
          </p>
          <p>
            <span class="text-weight-bold text-h6 text-black"> Pricing: </span>
            <span class="text-h6 text-black"> {{ course.desc.pricing }}</span>
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: [],
      course: {},
      videoDialog: false,
      fixed: false,
      load: true,
      courses: [
        {
          img: "/pe/design.png",

          title: "PRODUCT DESIGN, UI/UX",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
          desc: {
            path: ["UI Designer", "UX Designer"],
            content: [
              "Introduction to UI/UX Design",
              "User Research and Persona Creation",
              "Information Architecture and Wireframing",
              "UI Design Principles and Best Practices",
              "Tools and Software for UI/UX Design",
              "Visual Design and Typography",
              "Color Theory and Palette Selection",
              "Interaction Design and Prototyping",
              "User Testing and Feedback",
              "Designing for Web and Mobile Platforms",
              "Accessibility and Inclusive Design",
              "Real-World UI/UX Design Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: " 3 to 4 months (Approximate)",
            pricing: "70,000 NGN to 90,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/design.png",

          title: "PRODUCT MANAGEMENT",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
          desc: {
            path: ["Product Manager", "Product Owner"],
            content: [
              "Introduction to Product Management",
              "Product Development Process",
              "Market Research and Customer Insights",
              "Defining Product Vision and Strategy",
              "Ideation and Product Conceptualisation",
              "User-Centric Design and User Story Mapping",
              "Agile Methodology and Scrum Framework",
              "Prioritisation and Roadmapping",
              "Product Metrics and Key Performance Indicators (KPIs)",
              "Product Launch and Go-to-Market Strategy",
              "Product Lifecycle Management",
              "Cross-Functional Collaboration and Stakeholder Management",
              "Real-World Product Management Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "4 to 5 months (Approximate)",
            pricing: "70,000 NGN to 90,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/design.png",

          title: "BUSINESS ANALYSIS",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
          desc: {
            path: ["Business Analyst", "Business Systems Analyst"],
            content: [
              "Introduction to Business Analysis",
              "Business Analysis Process and Methodologies",
              "Elicitation Techniques and Requirements Gathering",
              "Data Analysis and Visualisation",
              "Process Modeling and Workflow Analysis",
              "Use Case Development and User Stories",
              "Agile Business Analysis",
              "Stakeholder Management and Communication",
              "Business Analysis Tools and Software",
              "Business Analysis Documentation and Reporting",
              "Business Process Improvement and Optimisation",
              "Real-World Business Analysis Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "3 to 4 months (Approximate)",
            pricing: "70,000 NGN to 90,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/design.png",

          title: "CLOUD COMPUTING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
          desc: {
            path: ["Cloud Solutions Architect", "Cloud Engineer"],
            content: [
              "Introduction to Cloud Computing",
              "Cloud Service Models: IaaS, PaaS, SaaS",
              "Cloud Deployment Models: Public, Private, Hybrid",
              "Cloud Providers and Platforms (e.g., AWS, Azure, Google Cloud)",
              "Virtualization and Containerisation",
              "Cloud Security and Compliance",
              "Cloud Networking and Storage",
              "Managing Cloud Resources and Scalability",
              "Cloud Cost Management and Optimisation",
              "DevOps and Continuous Integration/Continuous Deployment (CI/CD) in the Cloud",
              "Cloud Monitoring and Performance Optimisation",
              "Real-World Cloud Computing Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "4 to 5 months (Approximate)",
            pricing: "80,000 NGN to 100,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/design.png",

          title: "PRODUCT MARKETING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
          desc: {
            path: ["Product Marketing Specialist", "Marketing Manager"],
            content: [
              "Introduction to Product Marketing",
              "Market Research and Customer Segmentation",
              "Competitive Analysis and Positioning",
              "Creating Value Propositions and Messaging",
              "Product Launch and Go-to-Market Strategy",
              "Digital Marketing Fundamentals",
              "Content Marketing and Branding",
              "Social Media Marketing and Influencer Marketing",
              "Email Marketing and Lead Generation",
              "Marketing Analytics and Performance Measurement",
              "Customer Relationship Management (CRM)",
              "Marketing Automation and Campaign Management",
              "Real-World Product Marketing Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "3 to 4 months (Approximate)",
            pricing: "70,000 NGN to 90,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/frontend.png",

          // title: "HIS EXCELLENCY",
          title: "FRONTEND ENGINEERING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/3cEhOYvO9SM",
          desc: {
            path: ["Frontend Developer", "Web Developer", "UI Developer"],
            content: [
              "Introduction to Frontend Development",
              "HTML Fundamentals and Web Page Structure",
              "CSS Fundamentals and Styling Web Pages",
              "JavaScript Basics and DOM Manipulation",
              "Responsive Web Design and Mobile Optimization",
              "CSS Preprocessors (e.g., Sass or Less)",
              "Frontend Frameworks (e.g., React, Angular, or Vue.js)",
              "Building Interactive Web Applications",
              "Web Performance Optimization",
              "Web Accessibility and Inclusive Design",
              "Frontend Deployment and Hosting",
              "Real-World Frontend Development Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "4 to 5 months (Approximate)",
            pricing: "80,000 NGN to 100,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/backend.png",

          // title: "HIS EXCELLENCY",
          title: "BACKEND ENGINEERING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/9IczM7y0Yc8",
          desc: {
            path: [
              "Backend Developer",
              "API Developer",
              "Server-Side Developer",
            ],
            content: [
              "Introduction to Backend Development",
              "Fundamentals of Programming (Python, Java, or Node.js)",
              "Database Management and Design (SQL or NoSQL)",
              "Building APIs and RESTful Services",
              "Server-Side Scripting and Frameworks",
              "Authentication and Authorization",
              "Error Handling and Logging",
              "Testing and Debugging Backend Applications",
              "Deployment and Hosting",
              "Real-World Backend Development Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "4 to 5 months (Approximate)",
            pricing: "80,000 NGN to 100,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/frontend.png",

          // title: "HIS EXCELLENCY",
          title: "FULL-STACK ENGINEERING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/3cEhOYvO9SM",
          desc: {
            path: [
              "Full-Stack Developer",
              "Web Developer",
              "Software Engineer",
            ],
            content: [
              "Introduction to Full-Stack Development",
              "Frontend Development Fundamentals (HTML, CSS, JavaScript)",
              "Frontend Frameworks (e.g., React, Angular, or Vue.js)",
              "Backend Development Fundamentals (Python, Java, or Node.js)",
              "Building APIs and RESTful Services",
              "Database Management and Design (SQL or NoSQL)",
              "Authentication and Authorization",
              "Full-Stack Application Architecture",
              "Deployment and Hosting of Full-Stack Applications",
              "Version Control and Collaboration (Git)",
              "Testing and Debugging Full-Stack Applications",
              "Real-World Full-Stack Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "5 to 6 months (Approximate)",
            pricing: "90,000 NGN to 110,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/backend.png",

          // title: "HIS EXCELLENCY",
          title: "SOFTWARE ENGINEERING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/9IczM7y0Yc8",
          desc: {
            path: [
              "Software Engineer",
              "Application Developer",
              "Systems Analyst",
            ],
            content: [
              "Introduction to Software Engineering",
              "Software Development Life Cycle (SDLC)",
              "Object-Oriented Programming (OOP) Principles",
              "Data Structures and Algorithms",
              "Version Control and Collaboration (Git)",
              "Testing and Debugging Techniques",
              "Software Design Patterns",
              "Software Architecture and Design",
              "Web Application Development",
              "Mobile App Development",
              "Database Management and Design",
              "Deployment and Hosting of Applications",
              "Software Security and Best Practices",
              "Real-World Software Engineering Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "6 to 7 months (Approximate)",
            pricing: "100,000 NGN to 120,000 NGN (Approximate)",
          },
        },

        {
          img: "/pe/data.png",

          // title: "HIS EXCELLENCY",
          title: "DATA ANALYTICS",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/NJvncopOC88",
          desc: {
            path: ["Data Analyst", "Business Analyst"],
            content: [
              "Introduction to Data Analytics",
              "Data Fundamentals: Types, Sources, and Cleaning",
              "Data Visualisation with Tools like Excel and Power BI",
              "Data Collection and Database Management",
              "Introduction to SQL",
              "Data Analytics Process and Methodologies",
              "Advanced Data Analytics Techniques",
              "Data Analysis with Python or R",
              "Practical Data Analytics Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "3 to 4 months (Approximate)",
            pricing: "70,000 NGN to 90,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/data.png",

          // title: "HIS EXCELLENCY",
          title: "DATA SCIENCE",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/NJvncopOC88",
          desc: {
            path: ["Data Scientist", "Machine Learning Engineer"],
            content: [
              "Introduction to Data Science",
              "Data Fundamentals and Preprocessing",
              "Database Types and SQL Fundamentals",
              "Data Visualisation with Python Libraries",
              "Python Programming for Data Analysis",
              "Data Modeling and Machine Learning Concepts",
              "Data Conditioning and Feature Engineering",
              "Machine Learning Algorithms and Techniques",
              "Model Evaluation and Hyperparameter Tuning",
              "Data Science Projects and Case Studies",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "4 to 5 months (Approximate)",
            pricing: "80,000 NGN to 100,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/digital.png",

          // title: "HIS EXCELLENCY",
          title: "DIGITAL MARKETING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/FVOfhCxJ6DU",
          desc: {
            path: [
              "Digital Marketing Specialist",
              "Social Media Marketing Manager",
            ],
            content: [
              "Introduction to Digital Marketing",
              "Digital Marketing Channels and Strategies",
              "Search Engine Optimisation (SEO)",
              "Pay-Per-Click (PPC) Advertising",
              "Social Media Marketing and Advertising",
              "Content Marketing and Copywriting",
              "Email Marketing and Automation",
              "Web Analytics and Conversion Optimisation",
              "Online Reputation Management",
              "Influencer Marketing and Affiliate Marketing",
              "Digital Marketing Campaign Planning and Execution",
              "Digital Marketing Budgeting and ROI Analysis",
              "Real-World Digital Marketing Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "3 to 4 months (Approximate)",
            pricing: "70,000 NGN to 90,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/digital.png",

          // title: "HIS EXCELLENCY",
          title: "PHOTOGRAPHY COURSE",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/FVOfhCxJ6DU",
          desc: {
            path: ["Photographer", "Photojournalist"],
            content: [
              "Introduction to Photography",
              "Understanding Camera Types and Features",
              "Exposure Triangle: Aperture, Shutter Speed, and ISO",
              "Composition and Framing Techniques",
              "Lighting Fundamentals and Techniques",
              "Portrait Photography and Posing",
              "Landscape and Nature Photography",
              "Street Photography and Photojournalism",
              "Product Photography and Still Life",
              "Editing and Post-Processing with Adobe Lightroom",
              "Photo Retouching and Manipulation with Adobe Photoshop",
              "Building a Photography Portfolio",
              "Copyright and Legal Considerations for Photographers",
              "Real-World Photography Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "2 to 3 months (Approximate)",
            pricing: "50,000 NGN to 70,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/digital.png",

          // title: "HIS EXCELLENCY",
          title: "CINEMATOGRAPHY COURSE",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/FVOfhCxJ6DU",
          desc: {
            path: ["Cinematographer", "Film Director of Photography (DOP)"],
            content: [
              "Introduction to Cinematography",
              "Understanding Camera Equipment and Settings",
              "Shot Composition and Framing Techniques",
              "Lighting for Cinematography",
              "Color Theory and Color Grading",
              "Camera Movement and Stabilisation",
              "Cinematic Storytelling and Visual Language",
              "Cinematography for Different Genres (e.g., Drama, Action, Documentary)",
              "Cinematography and Emotion: Creating Mood and Atmosphere",
              "Filming Techniques and Camera Angles",
              "Post-Production and Film Editing",
              "Sound in Cinematography",
              "Building a Cinematography Reel",
              "Film Production Workflow and Collaboration",
              "Real-World Cinematography Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "2 to 3 months (Approximate)",
            pricing: "60,000 NGN to 80,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/digital.png",

          // title: "HIS EXCELLENCY",
          title: "3D ANIMATION",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/FVOfhCxJ6DU",
          desc: {
            path: ["3D Animator", "Motion Graphics Artist"],
            content: [
              "Introduction to 3D Animation",
              "Understanding 3D Animation Software and Tools",
              "Fundamentals of Animation: Timing and Spacing",
              "Character Design and Modeling",
              "Rigging and Character Setup",
              "Keyframe Animation",
              "Principles of Character Animation",
              "Lip Sync and Facial Animation",
              "Motion Capture and Performance Animation",
              "Environmental Animation and VFX",
              "Lighting and Texturing for 3D Animation",
              "Rendering and Output for Animation",
              "Advanced Animation Techniques and Special Effects",
              "Building a 3D Animation Portfolio",
              "Collaborative Animation Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "3 to 4 months (Approximate)",
            pricing: "80,000 NGN to 100,000 NGN (Approximate)",
          },
        },
        {
          img: "/pe/digital.png",

          // title: "HIS EXCELLENCY",
          title: "EXTENDED REALITY(XR)",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/FVOfhCxJ6DU",
          desc: {
            path: ["XR Developer", "AR/VR Content Creator"],
            content: [
              "Introduction to Extended Reality (XR)",
              "Understanding Augmented Reality (AR) and Virtual Reality (VR)",
              "XR Devices and Hardware",
              "XR Software Development Kits (SDKs) and Platforms",
              "Creating Interactive AR Experiences",
              "Immersive Virtual Reality Environments",
              "XR User Interface (UI) and User Experience (UX) Design",
              "XR Interaction and Navigation",
              "3D Modeling and Asset Creation for XR",
              "XR Animation and Visual Effects",
              "XR Audio and Spatial Sound Design",
              "XR Project Development and Prototyping",
              "XR Deployment and Distribution",
              "XR Performance Optimization",
              "Building XR Applications for Different Platforms (e.g., Mobile, Web, PC)",
              "Collaborative XR Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "3 to 4 months (Approximate)",
            pricing: "90,000 NGN to 110,000 NGN (Approximate)",
          },
        },

        {
          img: "/pe/blockchain.png",

          // title: "HIS EXCELLENCY",
          title: "BLOCKCHAIN TECHNOLOGY",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
          desc: {
            path: ["Blockchain Developer", "Smart Contract Developer"],
            content: [
              "Introduction to Blockchain Technology",
              "Blockchain Basics: Blocks, Transactions, and Consensus Mechanisms",
              "Decentralised Ledger and Distributed Systems",
              "Cryptography and Blockchain Security",
              "Smart Contracts and Solidity Programming",
              "Ethereum Blockchain Development",
              "Hyperledger Fabric Framework",
              "Blockchain Integration and Interoperability",
              "Tokenization and Digital Assets",
              "Decentralised Applications (DApps) Development",
              "Blockchain Scalability and Performance",
              "Blockchain Governance and Regulations",
              "Real-World Blockchain Development Projects",
              "Meet with Learners for Quality Assurance Purposes (Once A Month): engaging monthly sessions to ensure a high standard of education and address learner queries.",
            ],
            session: "Fridays, Saturdays, and Sundays",
            time: "4 to 5 months (Approximate)",
            pricing: "80,000 NGN to 100,000 NGN (Approximate)",
          },
        },
      ],
    };
  },

  methods: {
    toggleVideo(video) {
      this.videoDialog = true;
      this.load = true;
      this.video = video;
      setTimeout(() => {
        this.load = false;
      }, 3000);
    },

    read(course) {
      // console.log(course);
      this.fixed = true;
      this.course = course;
    },
  },
};
</script>

<style scoped>
.team {
  padding: 2rem 0 0;
}

.delp p {
  font-size: 1.1rem;
  line-height: 1.5;
}
.delp h5 {
  font-weight: 400;
  font-size: 21px;
  line-height: 123.5%;
  letter-spacing: 0.335em;
  text-transform: capitalize;
  color: #00a250;
  margin-bottom: 1rem;
}

.delp img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  font-size: 26px !important;
}
p.desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  color: rgba(51, 51, 51, 0.92);
  text-align: center;
  margin: 1rem 0;
}

.scroll ul {
  padding-left: 1rem;
}
.scroll li {
  list-style: disc;
  margin: 0.5rem 0;
  font-size: 17px;
}

.scroll p {
  margin: 0.2rem 0;
}
.scroll p span {
  font-size: 18px !important;
}
.white {
  color: white !important;
}
.team {
  position: relative;
}

.headingg {
  padding: 0rem 0 1rem;
}

.grid {
  position: relative;
  padding: 1em 0 2em;
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  gap: 2rem 4rem;
  z-index: 10;
}

.watch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.watch i {
  background: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #051234;
}

.watch small {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 121.52%;
  text-align: center;
  color: #ffffff;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 200px;
  max-width: 100%;
  min-height: 5px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.grid figure:nth-child(1)::before {
  content: "";
  background: #0d6d05;
  /* background: #051234; */
  mix-blend-mode: hard-light;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(2)::before {
  content: "";
  background: #34051c;
  mix-blend-mode: hard-light;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(3)::before {
  content: "";
  background: #72179d;
  /* background: #0c3405; */
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(4)::before {
  content: "";
  background: #053431;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.grid figure:nth-child(5)::before {
  content: "";
  background: #c58e00;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(6)::before {
  content: "";
  background: #0008c5;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(7)::before {
  content: "";
  background: #7cb9e8;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(8)::before {
  content: "";
  background: #002d62;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(9)::before {
  content: "";
  background: #5f9ea0;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(10)::before {
  content: "";
  background: #00ced1;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(11)::before {
  content: "";
  background: #6f00ff;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(12)::before {
  content: "";
  background: #6a5acd;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(13)::before {
  content: "";
  background: #9e1b32;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(14)::before {
  content: "";
  background: #fbceb1;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(15)::before {
  content: "";
  background: #7c0a02;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(16)::before {
  content: "";
  background: #b31b1b;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(17)::before {
  content: "";
  background: #452c63;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  /* opacity: 0.8; */
  border-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid figure figcaption {
  padding: 2em;
  /* border-radius: 15px; */
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

figure.effect-sadie {
  opacity: 1;
}
figure.effect-sadie:hover {
  opacity: 0.9;
  transition: 0.2s all ease-in-out;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
  font-size: 20px;
  padding: 0.6rem;
  text-decoration: underline;
}
.grid figure p i {
  font-size: 25px;
  margin: 0 1rem;
}

figure.effect-sadie figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.effect-sadie h2 .title {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 122%;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  max-width: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.column {
  padding: 0 2rem;
}

.grid figure:nth-child(4) h2 .title {
  max-width: 150px !important;
}
figure.effect-sadie h2 .name {
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.4;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0.9rem;
  padding: 0.5rem;
  padding-left: 1.5rem;
}

figure.effect-sadie h2 {
  position: absolute;
  bottom: 0%;
  padding: 2rem 0;
  /* padding: 1rem 0 4rem; */
  left: 0;
  width: 100%;
  z-index: 5;
  top: 50%;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.effect-sadie figcaption::before,
figure.effect-sadie .watch {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie .watch {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  z-index: 5;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

/* figure.effect-sadie:hover h2 {
  color: #fff;
  -webkit-transform: translate3d(0, 25%, 0) translate3d(0, -70px, 0);
  transform: translate3d(0, 25%, 0) translate3d(0, -70px, 0);
  background: none;
  transition: all 2s ease-in-out;
  padding: 1rem 0 4rem;
  top: 37%;
} */
figure.effect-sadie:hover img {
  background: #051234;
  transition: all 0.2s ease-in-out;
  /* transition: all 2s ease-in-out; */
  opacity: 0.3;
}
figure.effect-sadie:hover .name {
  display: none;
}

/* figure.effect-sadie:hover figcaption::before,
figure.effect-sadie:hover .watch {
  opacity: 1;
  -webkit-transform: translate3d(0, -180px, 0);
  transform: translate3d(0, -180px, 0);
  transition: all 2s ease-in-out;
} */

@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 0 auto;
    max-width: 1300px;
  }
  .grid figure img {
    height: 500px;
  }
}
@media (max-width: 1000px) {
  figure.effect-sadie h2 .title {
    font-size: 18px;
    max-width: 100px;
  }

  figure .q-btn {
    min-height: auto;
    font-size: 12px;
  }
}
@media (max-width: 800px) {
  .grid figure {
    min-width: 250px;
    width: 100%;
  }
  .grid {
    position: relative;
    /* margin: 0 auto; */
    padding: 1em 0 4em;
    max-width: 1100px;
    list-style: none;
    text-align: center;
    /* width: 350px; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    gap: 0.65rem;
  }
}
@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .figure.effect-sadie h2 .title {
    letter-spacing: 0.1em;
  }
}
</style>
