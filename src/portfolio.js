import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Sahil Kumar",
  title: "Hi all, I'm Sahil",
  subTitle: emoji(
    "Software Engineer with excellent problem solving skills and ability to perform well in team, Passionate about Full Stack Web Development and have experience of building Web applications with JavaScript, Nodejs, SpringBoot, Reactjs and some other cool libraries and frameworks"
  ),
  resumeLink: "https://drive.google.com/file/d/1U82YFqIBgWGmHEXZBJgqXowpwRnmC9y5/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SahilKumar47",
  linkedin: "https://www.linkedin.com/in/sahil-kumar-4a80581a0/",
  gmail: "sahilkumarpcm@gmail.com",
  instagram: "https://www.instagram.com/sahilkumar7477/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE NEW TECH",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Creating application backend in Node, Express & Graphql, SpringBoot"),
    emoji(
      "⚡ I have worked on tech like MERN, MERNG, SpringBoot, RabbitMQ, Pug, ORMs"
    ),
    emoji(
      "⚡ Oracle Certified Associate Java Programmer"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase / Socket.io"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-envira",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Atma Ram Sanatan Dhrama College",
      logo: require("./assets/images/arsd.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - July 2021",
      desc: "Grand CGPA 8.6",
      descBullets: [
        "Secured 1st position in college for academic year 2018-19",
        "Enthusiastic member of Sanganak Vimarsh (Computer Science Society)",
        "Involved in spreading technical knowledge among other students in univertsity",
        "Price winner in tech fests and coding competitions",
      ],
    },
    {
      schoolName: "Kendriya Vidhyalaya",
      logo: require("./assets/images/kendriya.png"),
      subHeader: "12th",
      duration: "2017-18 batch",
      desc:
        "1st rank in school in board exams with 93% Took subjects: Computer Science, Mathematics, Physics, Chemistry, English",
      descBullets: [
        "98% in Computer Science in boards, Participated in Hackathons, Olympiads",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Yamaha Motor Solutions India",
      companylogo: require("./assets/images/yamaha.jpg"),
      date: "July 2021 – Present",
      //desc: "Working with Yamaha Motor Corporation Japan on Machine Analytics web application developed with Nodejs, Javascript, Pug and Apex Charts",
      descBullets: [
        "Working with Yamaha Motor Corporation Japan on Machine Analytics web application developed with Nodejs, Javascript, Pug and Apex Charts. Responsible for developing modules of Backend and web screens of Frontend of the application, worked on server side rendering",
        "Worked on the speedup of Yamaha's Material Information System which is build upon Express and Nodejs. Implemented high impact Distributed System to reduce load using Message Broker Software RabbitMQ and integrated In-memory Redis DB to provide faster response from the APIs, Improves the efficiency of the application by 55%",
        "Developed a fully functional banking application as part of the java training with use cases of authentication, transactions, funds transfer, customer-employee record management. Technologies used under this project were Java, Spring Boot, Spring Security, JPA, MySQL."
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "SahilKumar47", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Projects that are made during college period",
  projects: [
    {
      image: require("./assets/images/v.jfif"),
      projectName: "Sorting Visualizer",
      projectDesc:
        "It help you to visualize some of the famous sorting alogorithms thorough animation like bubble sort, selection sort, merge sort. It is made with React and Material UI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sahilkumar47.github.io/sortingVisualizer",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/chat.png"),
      projectName: "AI Chat",
      projectDesc:
        "This is an Alan AI Voice assistance integrated chat web application made with React/ Node/ Graphql/ mySQL/ SequelizeORM. It enables you to control your app with your voice",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
    {
      image: require("./assets/images/post.jfif"),
      projectName: "Read It",
      projectDesc:
        "It is post web application built with Typescript with user login and voting mechanism like Reddit the tech stack it use is Nextjs/ Node/ mySql / TypeORM/ Tailwind CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
    {
      image: require("./assets/images/corona.png"),
      projectName: "Corona Tracker",
      projectDesc:
        "It is a country wise corona cases tracker with visualization like Bar Chart and Graphs of confirmed, active and deaths numbers. It is made up with React/ Material UI, react-charts and public covid api",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sahilkumar47.github.io/corona_tracker/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oracle Certified Associate Java Programmer",
      subtitle:
        "Certified by Oracle as Associate Java Programmer by obtaining good score in certification examination",
      image: require("./assets/images/orcc.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1mrHyZsvG2eoIojSZKqA64gnl0EUY8kdB/view?usp=sharing",
        },
      ],
    },
    {
      title: "Microsoft Virtual Internship",
      subtitle:
        "Learned about Microsoft Azure, Business Foundation Skills and Design and Development workflow at Microsoft",
      image: require("./assets/images/microsoft.svg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1DSXHGPvNhZ6vkEFJjjcyVzGiCHt5tyZC/view?usp=sharing",
        },
      ],
    },
    {
      title: "Javascript Developer",
      subtitle:
        "Completed Certifcation from Udemy for Javascript Developer as well completed CSS and Sass course",
      image: require("./assets/images/udemy.svg"),
      footerLink: [
        {
          name: "Certification Js",
          url:
            "https://drive.google.com/file/d/17GlyOvWIB_ZSvb5mqf9k-WU6xnjOnido/view?usp=sharing",
        },
        {
          name: "Certification CSS",
          url:
            "https://drive.google.com/file/d/1xNpggGcBHE--4CsAVGTKJddFQnjaksPd/view?usp=sharing",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Competitive Coding",
  subtitle:
    "Except from  web development, I also do competitive coding here's what I achived so far",

  blogs: [
    {
      url: "https://www.codechef.com/users/script_06",
      title: "CodeChef ⭐⭐⭐⭐",
      description:
        "4 Star coder at Codechef with max rating 1824, Global Rank 15479, Country Rank 11783",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9818134664",
  emailAddress: "sahilkumarpcm@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
