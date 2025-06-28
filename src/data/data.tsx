import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MediumIcon from '../components/Icon/MediumIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import careerpath from '../images/portfolio/careerpath.jpg';
import fourmoles from '../images/portfolio/4moles.jpg';
import bigvyor from '../images/portfolio/bigvyor.jpg';
import donebynone from '../images/portfolio/donebynone.jpg';
import holidayindia from '../images/portfolio/holidayindia.jpg';
import mensxp from '../images/portfolio/mensxp.jpg';
import opencourses from '../images/portfolio/opencourses.jpg';
import post12 from '../images/portfolio/post12.jpg';
import qbox from '../images/portfolio/qbox.jpg';
import yatra_holidays from '../images/portfolio/yatra_holidays.jpg';
import yatra_hotels from '../images/portfolio/yatra_hotels.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Saurabh Sharma',
  description: "My portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Saurabh Sharma.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Full-stack software engineer with a strong focus on developing and deploying robust, user-centric web applications. Primarily experienced in <b>Ruby on Rails</b>, with growing proficiency in React. Currently contributing to scalable web services at CareerBuilder. Adept at collaborating in cross-functional teams and committed to writing clean, maintainable, and production-ready code that supports long-term business goals.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I write about the things I'm building, the lessons I'm learning in tech, and occasionally, thoughts on work, learning, and life.`,
  aboutItems: [
    {label: 'Location', text: 'New Delhi, IN', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Tech, Stoicism', Icon: SparklesIcon},
    {label: 'Study', text: 'GGSIPU, Delhi', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CareerBuilder India Pvt Ltd', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Ruby on Rails (w RSpec)',
        level: 8,
      },
      {
        name: 'Distributed Systems (REST)',
        level: 8,
      },
      {
        name: 'PHP',
        level: 6,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'Java',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React / NextJS',
        level: 4,
      },
      {
        name: 'Typescript',
        level: 4,
      },
      {
        name: 'CSS',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 6,
      },
    ],
  },
  {
    name: 'DevOps / CICD / Version Control',
    skills: [
      {
        name: 'AWS',
        level: 4,
      },
      {
        name: 'CI/CD',
        level: 6,
      },
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'New Relic',
        level: 7,
      },
      {
        name: 'Git',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Japanese',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Careerpath.com',
    description: 'AI based job search service.',
    url: 'https://careerpath.com',
    image: careerpath,
  },
  {
    title: '4moles.com',
    description: `- Led a team of 4 developers across web & mobile platforms, delivered an improved user experience that led to increased customer retention.
- Designed complete booking engine using Redis and Action Cable.
- Architected a scalable deployment pipeline on DigitalOcean using Capistrano.
- Implemented CloudFlare as both WAF and CDN`,
    url: 'https://4moles.com',
    image: fourmoles,
  },
  {
    title: 'Bigvyor.com',
    description: 'Give a short description of your project here.',
    url: 'https://bigvyor.com',
    image: bigvyor,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: donebynone,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: holidayindia,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: mensxp,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: opencourses,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: post12,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: qbox,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: yatra_holidays,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: yatra_hotels,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2011',
    location: 'GGSIPU, New Delhi',
    title: 'BTech in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2019 - Present',
    location: 'CareerBuilder',
    title: 'Senior Software Engineer',
    content: (
      <p>
        - Developed and deployed scalable Rails + React services for Ecommerce and AI-driven job platform<br/>
        - Automated CI/CD pipelines using Jenkins and ECS etc<br/>
        - Maintained high test coverage with RSpec for mission-critical APIs
      </p>
    ),
  },
  {
    date: 'June 2017 - May 2019',
    location: '4moles.com',
    title: 'Engineering Lead',
    content: (
      <p>
        - Led a team of 4 developers across web & mobile platforms, delivered an improved user experience that led to increased customer retention.<br/>
        - Designed complete booking engine using Redis and Action Cable.<br/>
        - Architected a scalable deployment pipeline on DigitalOcean using Capistrano.<br/>
        - Implemented CloudFlare as both WAF and CDN
      </p>
    ),
  },
  {
    date: 'August 2014 - May 2017',
    location: 'Yatra Online Pvt Ltd',
    title: 'Senior Engineer',
    content: (
      <p>
        - Worked on multiple projects on tech stacks for Java and PHP.
      </p>
    ),
  },
  {
    date: 'September 2011 - July 2014',
    location: 'Emaadhyam Online Pvt Ltd',
    title: 'Software Engineer',
    content: (
      <p>
        - Worked on multiple projects on the Rails platform
      </p>
    ),
  },
];

/**
 * Projects section
 */

export const projects: TimelineItem[] = [
  {
    date: 'November 2024 - Present',
    location: 'React / NextJS',
    title: 'Careerpath.com',
    content: <div>
      - AI based job search platform for candidates <br/>
      - Prompt engineering for LLM
      </div>,
  },
  {
    date: 'Jun 2019 - Present',
    location: 'Ruby on Rails · React',
    title: 'Careerbuilder ECom Application',
    content: <div>
      - Managed the full-stack for the ECom application for CareerBuilder.com<br/>
      - Stack: Ruby on Rails, React, Docker, AWS, Jenkins, Terraform
      </div>,
  },
  {
    date: 'June 2017 - May 2019',
    location: 'Ruby on Rails · REST APIs · Project Planning & Management · Software Architecture & System Design · DevOps & Deployment',
    title: '4moles.com',
    content: <div>
      - Led a team of 4 developers across web & mobile platforms, delivered an improved user experience that led to increased customer retention.<br/>
      - Designed complete booking engine using Redis and Action Cable.<br/>
      - Architected a scalable deployment pipeline on DigitalOcean using Capistrano.<br/>
      - Implemented CloudFlare as both WAF and CDN
      </div>,
  },
  {
    date: 'August 2014 - May 2019',
    location: 'PHP · REST APIs · HTML/CSS/JS',
    title: 'HolidayIndia',
    content: <div>
      - Online travel portal targeting exotic travel destinations in India, Nepal, Bhutan and Sri Lanka<br/>
      - Functionality to customize packages (extend travel duration, change car types etc)<br/>
      - Based on CodeIgniter framework (PHP, MySQL, jQuery etc)
      </div>,
  },
  {
    date: 'August 2014 - May 2017',
    location: 'Java · REST APIs',
    title: 'Yatra Holidays (element on Yatra.com mobile app)',
    content: <div>
      - Webview application as a part of Yatra.com mobile application<br/>
      - CodeIgniter based application (PHP, MySQL. jQuery etc)<br/>
      - Automated script to synchronize holiday packages from main DB to app DB
      </div>,
  },
  {
    date: 'August 2014 - May 2017',
    location: 'Java · REST APIs',
    title: 'Yatra.Com Hotels application',
    content: <div>
      - Application to speedily provide new and small scale hotels their own website<br/>
      - integrated booking engine with payment flow
      </div>,
  },
  {
    date: 'September 2012 - July 2014',
    location: 'Ruby on Rails · REST APIs · HTML/CSS/JS',
    title: 'Qbox by CoralTree Tech',
    content: <div>
      - Secure file sharing platform for CPAs<br/>
      - Technologies used: Ruby, RoR, jQuery<br/>
      - Use of Amazon cloud based technologies like SES, SNS, etc.<br/>
      - BrainTree payment gateway integration
      </div>,
  },
  {
    date: 'May 2012 - July 2013',
    location: 'PHP/Joomla · HTML/CSS/JS',
    title: 'MensXP',
    content: <div>
      - Joomla based website<br/>
      - UI customization<br/>
      - Plugin Customization
      </div>,
  },
  {
    date: 'February 2013 - July 2013',
    location: 'PHP/Wordpress · HTML/CSS/JS',
    title: 'OpenCourse',
    content: <div>
      - WordPress based MOOC platform for managing registration of courses<br/>
      - Technologies used: PHP (WordPress) and MySQL<br/>
      - Overall development of the system with a 1 UI developer
      </div>,
  },
  {
    date: 'September 2011 - July 2013',
    location: 'Ruby on Rails · REST APIs · HTML/CSS/JS',
    title: 'Bigvyor',
    content: <div>
      - Social Platform for artists and art gallery owners<br/>
      - Technologies used: Ruby on Rails<br/>
      - Overall development of the system with a team of 3 developers
      </div>,
  },
  {
    date: 'September 2011 - July 2013',
    location: 'PHP/Magento · HTML/CSS/JS',
    title: 'Done By None',
    content: <div>
      - E-Commerce platform based on Magento<br/>
      - Technologies used: PHP, MySQL<br/>
      - Developed Login systems (Facebook OAuth implementation), product page customization, backend customization
      </div>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mukesh Sharma | Chief Digital Transformation Officer @ Star Health and Allied Insurance Co. Ltd.',
      text: 'It was great experience working with Saurabh on some turnkey projects for our clients. I consider Emaadhyam to be fortunate enough to find such young leader as its first employee. I am impressed with his natural skills of client handling and quick adaptability to new technology. I wish him a successful career in technology in years to come.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHCBNLztjEW2g/profile-displayphoto-shrink_100_100/B56ZceJH5EGsAU-/0/1748557398723?e=1756339200&v=beta&t=pYkdV9Es0_inYD5lOyiel7KkPPgmCANQCGi2fKRcFXI',
    },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Whether you want to talk code, collaborate on a project, or just say hi — I\'d love to hear from you.',
  items: [
    {
      type: ContactType.Email,
      text: 'saurabh@activecode.in',
      href: 'mailto:saurabh@activecode.in',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'saurabh',
      href: 'https://github.com/shukkydomes',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/shukkydomes'},
  {label: 'Medium', Icon: MediumIcon, href: 'https://bugfree.medium.com/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/200-ok/'},
];
