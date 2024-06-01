import { people01, people02, people03, people04, people05, people06, facebook, instagram, linkedin, twitter, python, numpy, tensorflow, vscode, arduino, send } from "@/public/assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "product",
        title: "About",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "clients",
        title: "Team",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: send,
        title: "Multi-Sensor Integration",
        content:
            "Combines data from both camera and LiDAR sensors to leverage the strengths of each, ensuring comprehensive terrain classification.",
    },
    {
        id: "feature-2",
        icon: send,
        title: "Decision-Level Fusion",
        content:
            "Utilizes decision-level fusion techniques to integrate outputs from Convolutional Neural Networks (CNN) and Support Vector Machines (SVM), enhancing overall classification accuracy.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Robust Performance Across Lighting Conditions",
        content:
            "Maintains high classification accuracy in both daytime and nighttime scenarios, effectively handling varying lighting conditions.",
    },
    {
        id: "feature-4",
        icon: send,
        title: "Adaptability to Different Robot Designs",
        content:
            "Designed to be independent of specific robot architectures, allowing easy adaptation and implementation across a wide range of autonomous robotic platforms.",
    },
    {
        id: "feature-5",
        icon: send,
        title: "High Classification Accuracy",
        content:
            "Achieves significant improvements in terrain classification accuracy compared to individual sensor models, with overall daytime and nighttime accuracies of 91.78% and 95.24%, respectively.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:".",
        name: "Dr. Nalaka Lankasena",
        title: "Main Supervisor",
        img: people04,
    },
    {
        id: "feedback-2",
        content:".",
        name: "Dr. Iroshan Aberathne",
        title: "Co Supervisor",
        img: people05,
    },
    {
        id: "feedback-3",
        content:".",
        name: "Mr. Bhathiya Seneviratne",
        title: "Co Supervisor",
        img: people06,
    },
];


export const feedback2 = [
    {
        id: "feedback-1",
        content:".",
        name: "Sriyantha Deepal",
        title: "Team Member",
        img: people01,
    },
    {
        id: "feedback-2",
        content:".",
        name: "Dilip Priyamantha",
        title: "Team Member",
        img: people02,
    },
    {
        id: "feedback-3",
        content:".",
        name: "Rithu Ilangasinghe",
        title: "Team Member",
        img: people03,
    },
];



export const stats = [
    {
        id: "stats-1",
        title: "Accuracy in Daytime",
        value: "91.78%",
    },
    {
        id: "stats-2",
        title: "Accuracy in Nighttime",
        value: "95.24%",
    },
];

export const footerLinks = [
    {
        id: "footerLinks-1",
        title: "About Us",
        links: [
            {
                name: "Home",
                link: "/",
            },
            {
                name: "About",
                link: "/#product",
            },
            {
                name: "Features",
                link: "/#features",
            },
            {
                name: "Team",
                link: "/#clients",
            },
        ],
    },
    {
        id: "footerLinks-2",
        title: "Tech Stack",
        links: [
            {
                name: "Arduino",
                link: "https://www.arduino.cc/",
            },
            {
                name: "Python",
                link: "https://www.python.org/",
            },
            {
                name: "Tensorflow",
                link: "https://www.tensorflow.org/",
            },
            {
                name: "NumPy",
                link: "https://numpy.org/",
            },
        ],
    },
    {
        id: "footerLinks-3",
        title: "Useful Links",
        links: [
            {
                name: "Privacy Policy",
                link: "/#Policy",
            },
            {
                name: "Terms of Service",
                link: "/#Term-of-Service",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: arduino,
    },
    {
        id: "client-2",
        logo: python,
    },
    {
        id: "client-3",
        logo: tensorflow,
    },
    {
        id: "client-4",
        logo: numpy,
    },
    {
        id: "client-4",
        logo: vscode,
    },
];