import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Sahil Kumar",
  title: "Hi all, I'm Sahil",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nextjs/ Nodejs /  and some other cool libraries and frameworks. Also a competitive programmer"
  ),
  resumeLink: "https://drive.google.com/file/d/1GiNZtIB8O-jpS9P3cuYOncfEjiXlGLfD/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SahilKumar47",
  linkedin: "",
  gmail: "sahilkumarpcm@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  instagram: "https://www.instagram.com/sahilkumar7477/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Creating application backend in Node, Express & Graphql"),
    emoji(
      "⚡ I have worked on tech like MERN, MERNG, Nextjs, Typescript, ORMs"
    ),
    emoji(
      "⚡ 4 Star coder at CodeChef with max rating (1824) and max rating on Codeforces (1063)"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
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
      desc: "Co Founder of a college startup (Du Unify)",
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
        "2nd rank in school in board exams with 93% Took subjects: Computer Science, Mathematics, Physics, Chemistry, English",
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
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%",
    },
    {
      Stack: "Programming",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
  title: "Projects",
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
      title: "Coding Ninja Wave",
      subtitle:
        "Secured 2nd Rank in Coding contest organised by Coding Ninjas at Atma Ram Sanatan Dharma College",
      image: require("./assets/images/codingninja.svg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/12kE4dPhFcdTy0D_veuVQRmv-ciYnCiiy/view?usp=sharing",
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
  display: true, // Set false to hide this section, defaults to true
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
