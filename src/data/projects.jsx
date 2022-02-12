import project1 from '../assets/image/project1.png'
import project2 from '../assets/image/project2.png'
import project3 from '../assets/image/project3.png'

export const ProjectData = [
    {
        id: 1,
        title: "MSSGME",
        about: "A chat application with Direct and Group messaging, emojis & reactions, built-in Gif support and the ability to edit & delete messages.",
        tags: ["MongoDB", "functional components", "ExpressJS", "NodeJS" ],
        demo: "https://chat-app-pl.netlify.app",
        github: "https://github.com/lampenny/chat-app",
        image: project2,
    },
    {
        id: 2,
        title: "StyleUp",
        about: "A full-stack shopping app built with React and Nodejs with Redux, Stripe, and JWT. Users can search products, select quantity and sizes, add to cart and check out.",
        tags: ["styled-components", "React", "NodeJS", ],
        demo: "https://styleup.netlify.app",
        github: "https://github.com/lampenny/ecomm-styleup",
        image: project1,
    },
    {
        id: 3,
        title: "Facial Recognition App",
        about: "A face recognition app that detects faces in photos using a Clarifai API.",
        tags: ["Rest API", "NodeJS", "React"],
        demo: "https://smart-brainapp.netlify.app",
        github: "https://github.com/lampenny/smart-brain",
        image: project3,
    }
];