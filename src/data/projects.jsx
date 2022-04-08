import project1 from '../assets/image/project1.png'
import project2 from '../assets/image/project2.png'
import project3 from '../assets/image/project3.png'

export const ProjectData = [
    {
        id: 1,
        title: "MSSGME",
        about: "A chat application with Direct and Group messaging, emojis & reactions, built-in Gif support and the ability to edit & delete messages. Built using React and Stream Chat API with functional components. Check out my Github for the source code and login details to try it out.",
        tags: ["MongoDB", "functional components", "ExpressJS", "NodeJS" ],
        demo: "https://chat-app-pl.netlify.app",
        github: "https://github.com/lampenny/chat-app",
        image: project2,
    },
    {
        id: 2,
        title: "StyleUp",
        about: "A full-stack shopping app built with React and Nodejs with Redux, Stripe, and JWT. Users can search products, select quantity and sizes, add to cart and check out. On the backend, mongoose is used to fetch product data from MongoDB. The cart logic is managed using hooks and redux so when a user adds a new product, the cart is updated instantly.",
        tags: ["styled-components", "React", "NodeJS", ],
        demo: "https://styleup.netlify.app",
        github: "https://github.com/lampenny/ecomm-styleup",
        image: project1,
    },
    {
        id: 3,
        title: "Quiz App",
        about: "A quiz app built with TypeScript and styled-components.",
        tags: ["TypeScript", "API", "React"],
        demo: "https://quiz-app-pl.netlify.app/",
        github: "https://github.com/lampenny/quizapp",
        image: project3,
    },
];