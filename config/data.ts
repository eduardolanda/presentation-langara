import { CardContentProps } from "./../components/CardContent";

export interface ImageInterface {
  url: string;
  author_url?: string;
  author?: string;
}

export type ImagesInterface = Array<ImageInterface>;

export interface optionInterface extends CardContentProps {
  images: {
    url: string;
    author_url?: string;
    author?: string;
  }[];
  url: string;
}

export const OPTIONS: optionInterface[] = [
  {
    title: "Eduardo Landa - Full-Stack Developer",
    options: [
      {
        title: "Experience",
        list: [
          { text: "Front-End Developer - Cova Software | 2021 ~ Present" },
          { text: "Full-Stack Developer - BNW Travel | 2020 ~ 2021" },
          { text: "Full-Stack Developer - Skateman LTD | 2019 ~ 2020" },
        ],
      },
      {
        title: "Education",
        list: [
          { text: "Web and Mobile App Development | 2018 ~ 2019" },
          { text: "Hospitality and Management Diploma| 2017 ~ 2018" },
          { text: "Business Management Diploma | 2016 ~ 2017" },
          {
            text: "International Business and Management Degree | 2012 ~ 2016",
          },
          {
            text: "Business Enginner Degree | 2012 ~ 2016",
          },
        ],
      },
    ],
    images: [
      {
        url: "/images/logo-cova.jpeg",
      },
      {
        url: "/images/bnwtravel-logo.png",
      },
      {
        url: "/images/langara-canada-college-logo.png",
      },
    ],
    url: "eduardo-landa",
  },
  {
    title: "Job Hunting",
    options: [
      {
        title: "What did I do?",
        list: [
          { text: "Network with people in the industry" },
          {
            text: "Modify your resume/cover letter according to the company and position ",
          },
          { text: "Apply to as many jobs as possible" },
        ],
      },
    ],
    images: [
      {
        url: "/images/job-hunting.webp",
        author_url:
          "https://www.pexels.com/photo/photo-of-people-near-wooden-table-3184431/",
        author: "Fauxels",
      },
      {
        url: "/images/network.webp",
        author_url:
          "https://www.pexels.com/photo/group-of-friends-hanging-out-933964/",
        author: "Helena Lopes",
      },
    ],
    url: "job-hunting",
  },
  {
    title: "Job Interviews",
    options: [
      {
        title: "General",
        list: [
          { text: "Ask questions about the company and your role " },
          {
            text: "Logic is the most important skill for Devs",
          },
          {
            text: "As a Designer they will like to know you are doing research, such as Color Blind properties.",
          },
          {
            text: "Don’t talk only about coding/design, management is important too ",
          },
        ],
      },
      {
        title: "As a Junior",
        list: [
          { text: "Show passion about what you do" },
          {
            text: "Do not call yourself a junior - Let them decide your level ",
          },
          {
            text: "Let them know about your thought process. Think out loud!",
          },
        ],
      },
      {
        title: "Interview Questions",
        list: [
          { text: "Basic understanding of algorithms as a Dev" },
          {
            text: "Check their website and talk about improvements you could make",
          },
          { text: "Share your experience about projects you built" },
          {
            text: "Problems you solved at college",
          },
        ],
      },
    ],
    images: [
      {
        url: "/images/interview.webp",
        author: "Olia Danilevich",
        author_url:
          "https://www.pexels.com/photo/man-sitting-in-front-of-three-computers-4974915/",
      },
    ],
    url: "job-interview-junior",
  },
  {
    title: "Job Interviews",
    options: [
      {
        title: "As Intermediate",
        list: [
          { text: "Talk about case scenarios where you solve a big issue" },
          {
            text: "Mention how you handle performance on your day to day job",
          },
        ],
      },
      {
        title: "Interview Questions",
        list: [
          { text: "Basic understanding of algorithms" },
          { text: "Share your experience about projects you built" },
          {
            text: "Problems you solved at college",
          },
        ],
      },
    ],
    images: [
      {
        url: "/images/interview2.jpeg",
        author: "ThisIsEngineering",
        author_url:
          "https://www.pexels.com/photo/person-using-gray-laptop-3861964/",
      },
    ],
    url: "job-interview-intermediate",
  },
  {
    title: "From School to Work",
    options: [
      {
        title: "What I wish I knew",
        list: [
          { text: "Project Management is a must class" },
          {
            text: "It is not about learning Java, PHP or Javascript - Figma, Adobe XD, Sketch. It's about knowing",
          },
          { text: "Apply to as many jobs as possible" },
          { text: "Focus on one task at a time" },
          { text: "Keep learning and networking" },
          { text: "Know how to communicate properly" },
        ],
      },
    ],
    images: [
      {
        url: "/images/studying.jpeg",
        author_url:
          "https://www.pexels.com/photo/male-students-reading-book-in-the-library-9158712/",
        author: "Mikhail Nilov",
      },
      {
        url: "/images/research.jpeg",
        author_url:
          "https://www.pexels.com/photo/person-holding-black-calculator-while-using-laptop-8296981/",
        author: "Mikhail Nilov",
      },
    ],
    url: "school-to-work",
  },
  {
    title: "Work Culture",
    options: [
      {
        title: "Vancouver",
        list: [
          { text: "Which type and size of company are working?" },
          {
            text: "It is not about hours, it is about results",
          },
          {
            text: "Know which type of company you want to work ~ Small - Buyable - Scalable Startup",
          },
        ],
      },
    ],
    images: [
      {
        url: "/images/swimming.jpeg",
        author_url:
          "https://www.pexels.com/photo/person-swimming-on-body-of-water-863988/",
        author: "Guduru Ajay bharga",
      },
      {
        url: "/images/hiking.jpeg",
        author_url:
          "https://www.pexels.com/photo/people-wearing-backpacks-walking-on-pathway-near-green-leaf-plants-917510/",
        author: "Kai-Chieh Chan",
      },
    ],
    url: "work-culture",
  },
  {
    title: "Devs and Designers",
    options: [
      {
        title: "Communication",
        list: [
          {
            text: "Devs need to listen to designers and help them understand the limits",
          },
          {
            text: "Talk in terms of a trade-off ",
          },
          {
            text: "As a Dev is your responsibility to know the basics of some design tools",
          },
          { text: "Clarify the requirements" },
        ],
      },
    ],
    images: [
      {
        url: "/images/design.webp",
        author_url:
          "https://www.pexels.com/photo/arts-build-close-up-commerce-273230/",
        author: "Pixabay",
      },
    ],
    url: "dev-and-designers",
  },
  {
    title: "Thank you",
    options: [
      {
        title: "Eduardo Landa",
        list: [
          {
            text: "Linkedin @eduardolanda",
          },
        ],
      },
    ],
    images: [],
    url: "end",
  },
];

export const KEY_OPTIONS: { [key: string]: number } = OPTIONS.reduce(
  (initialOptions: { [key: string]: number }, option, index) => {
    initialOptions[option.url] = index;
    return initialOptions;
  },
  {}
);
