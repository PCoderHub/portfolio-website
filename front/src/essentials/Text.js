import Education from "../components/Education";
import Other from "../components/Other";
import Skills from "../components/Skills";
import Work from "../components/Work";

export const introduction = {
    first: "I'm a recent graduate from Coventry University. I completed my postgraduate degree in the course MSc Software Development on November 2023.",
    second: "Throughout my academic journey, I have worked with various technologies and platforms, mainly React and Python to expand my technical skills and practical experience.",
    third: "Currently, I'm looking to use my skills in a professional setting and work in Software developer roles to expand my knowledge at a professional level."
};

export const personalStory = [
    "During my school years, I often struggled with coding in C++ and C. Even in college, while pursuing my Bachelor's degree, I found coding in Java and python for my projects challenging, despite understanding the concepts. However, learning React marked a turning point for me. Coding began to feel less daunting, and I started working on personal projects. This experience gradually sparked my interest in Front-End development, which led me to pursue a Master's degree in Software Development.",
    "The Master's program allowed me to delve into industry concepts and best practices, and I had the opportunity to work on full-stack development, gaining skills in backend development and MongoDB. After graduation, I continued to enhance my skills by learning new technologies and applying good coding practices to my personal projects. Now, I can quickly learn and start working with any technology.",
    "My goal is to gain professional discipline to further my career as a software developer. This aspiration brings me to my dream of becoming a software developer in a professional setting."
];

export const background = [
    'Completed schooling and undergraduation in India',
    'Completed Bachelors in Technology for Computer Science and Engineering.', 
    'Worked as a support executive at TCS, a service-based company for 3 years.', 
    'Travelled to the UK to pursue Masters in Software Development'
];

export const cwsAndCerts = [
    'A library management system using React, Flask, MongoDB and platforms like Stripe for payment gateway. Used three-layer architecture in the backend.',
    'Survey application using Flutter and Dart.',
    'Training application with React and Spring Boot using three-layer architecture.',
    'Customer Service tools using GoF(Factory, Facade, Strategy) patterns and TDD(Test-Driven Development).',
    'Delivery Tracker application using security design principles with React, Flask and MongoDB',
    'LinkedIn certifications for completing courses React: Using Typescript, Learning NextJS and freeCodeCamp certification for Responsive Web Design.'
];

export const skills = [
    'ReactJS',
    'Redux toolkit',
    'NextJS',
    'MongoDB',
    'Flask',
    'HTML/CSS/Javascript',
    'Tailwind CSS(Basics)',
    'Node JS',
    'Express',
    'Typescript',
    'SQL(Basics)',
    'MySQL(Basics)',
    'C/C++(Basics)',
    'Java(Basics)',
    'GitHub',
    'MS Azure',
    'Figma',
    'Google Cloud Platform'
];

export const education = [
    {
        school: 'Pitman Training Group',
        course: 'Cloud Support Engineer Diploma',
        status: 'Ongoing',
        year: 2025 
    },
    {
        school: 'Coventry University',
        course: 'MSc Software Development',
        status: 'Graduated',
        year: 2023
    },
    {
        school: 'Federal Institute of Science And Technology',
        course: 'BTech Computer Science and Engineering',
        status: 'Graduated',
        year: 2019
    }
];

export const workexp = [
    {
        company: 'Tata Consultancy Services',
        position: 'Systems Engineer',
        from: 'July 2019',
        to: 'July 2022',
        description: [
            'Support Executive in the Operations department of UniCredit Services.',
            '24 * 7 support for the smooth run of workflows responsible for Business deliveries and sends hourly status reports.',
            'Used CA Workload Automation tool for monitoring processes for Market Risk transactions and used GMR and Limex Event Engines for Counterparty Credit Risk transactions.',
            'Responds to customer requests from emails or tickets within the target resolution time.',
            'Provided knowledge transition sessions for more than three freshers and conducted reverse KT sessions to test their knowledge level and supported the hybrid style of working during COVID.'
        ]
    }
];

export const otherexp = [
    {
        company: 'Amazon BHX5',
        position: 'Warehouse Operative',
        from: 'October 2022',
        to: 'January 2023'
    },
    {
        company: 'Amazon BHX4',
        position: 'Warehouse Operative',
        from: 'May 2023',
        to: '-'
    }
];

export const resumeDetails = [
    {
        heading: 'Education',
        component: <Education/>
    },
    {
        heading: 'Work Experience',
        component: <Work/>
    },
    {
        heading: 'Other Experience',
        component: <Other/>
    },
    {
        heading: 'Industry Skills',
        component: <Skills/>
    }
];

export const industrySkills = [
    {
        title: 'Programming skills',
        skills: [
            'HTML', 'CSS', 'React (JS/TS)', 'Redux Toolkit', 'Python', 'Basics of Java (OOP), C++, SQL', 'NextJS', 'Tailwind CSS', 'NodeJS', 'Express'
        ]
    },
    {
        title: 'Database skills',
        skills: [
            'MongoDB', 'Firebase', 'Basics of MySQL'
        ]
    },
    {
        title: 'Project management skills',
        skills: [
            'Using Microsoft Azure to track project development using agile methodology and Google Cloud Platform for deployment',
            'Using GitHub for version control',
            'Using system architectures like layered architectures and design patterns like GRASP or GoF patterns when necessary'
        ]
    },
    {
        title: 'Soft skills',
        skills: [
            'Communication: Attended project presentations and meetings to discuss the status of project, worked as an instructor and peer trainer to coach associates of quality and safety while working on the process.',
            'Teamwork: Have worked in teams for different projects both academically and professionally.',
            'Time management: Have completed different projects or course works within the deadline.'
        ]
    }
];