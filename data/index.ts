export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always striving to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Vansh Chavda",
    description: "Full Stack Devloper",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "size-[6.5rem] border border-white border-2 max-sm:size-[4.5rem] max-xl:size-[4.3rem] mt-10 mx-10 max-sm:mx-6 object-cover rounded-full shadow-gray-800 shadow-2xl",
    titleClassName: "justify-end ml-11 items-center ",
    img: "/me.png",
    spareImg: "",
    btn: "Contact Me",
  },

  {
    id: 5,
    title: "Currently doing freelancing",
    description: "I'm available for freelance work and projects.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },

  
];

export const projects = [
  {
    id: 1,
    title: "Stack Spot - Blogging Platform",
    des: "A blogging platform with user accounts, analytics, and engagement support.",
    img: "/1.png",
    iconLists: ["/re.svg", "/tail.svg", , "/node-js.svg" , "/express.svg" , "/mongo.svg" ],
    link: "https://stack-blog-landing.vercel.app/",
    pinlink:"Stack Spot",
    code:"https://github.com/itsvanshchavda/StackSpot-Frontend"
    
  },
  {
    id: 2,
    title: "School Bazar",
    des: "An e-commerce platform similar to Flipkart, featuring comprehensive admin support and integrated payment solutions.",
    img: "/5.png",
    pinlink:"Nike",
    iconLists: ["/re.svg", "/tail.svg","/node-js.svg", "/express.svg", "/mongo.svg", ],
    link: "https://schoolbazzar.in/",
    code:"https://schoolbazzar.in/"
  },
  {
    id: 3,
    title: "Fusion Restaurent",
    pinlink:"Fusion Restaurent",
    des:"Restaurant management system with order placement, Firebase integration, and admin support.",
    img: "/3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/firebase.svg",],
    link: "https://fusion-restaurant.vercel.app/",
    code: "https://github.com/itsvanshchavda/fusion-restaurant"
  },
  {
    id: 4,
    title: "World News",
    pinlink:"World News",
    des: "Realtime news application with comprehensive updates and category-wise news.",
    img: "4.png",
    iconLists: ["/angular.svg", "/tail.svg", "/ts.svg", "/bootstrap.svg" ],
    link: "https://www.loom.com/share/8648c2758d31414cac3c784d4fb8c142?sid=f6ed347c-3f69-401e-8ec0-8731b967a566",
    code :"https://github.com/itsvanshchavda/news-website-angular"
  },
];

export const certifications = [
  {
    text:"ZTM - (Zero to Mastery) Full Stack Development 2022", 
    name: "Udemy",
    title: "A education technology platform ",
    link: "/udemy.svg",
  },

  {
    text:"GirlsScript Summer of Code 2024 – Open-Source Contributor ", 
    name: "GirlsScript Foundation",
    title: "OpenSource Program ",
    link: "/GS.png",
  },


  {
    text:"GitHub Pro Member", 
    name: "GitHub",
    title: "",
    link: "/GitHub.svg",
  },

  {
    text:"ZTM - (Zero to Mastery) Organization Member", 
    name: "ZTM",
    title: "Zero To Mastery Academy",
    link: "/ZTM.png",
  },

  
 
];



export const education = [
  {
    id: 1,
    title: "Diploma in Information Technology",
    desc: "Sir Bhavsinhji Polytechnic Institute - Bhavnagar , Gujarat",
    className: "md:col-span-2",
    date: "2021 - 2024",
    thumbnail: "/exp1.svg",
  },
 
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/itsvanshchavda"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://twitter.com/vanshchavda_"
  },
  {
    id: 3,
    img: "/whatsapp.svg",
    link:"https://api.whatsapp.com/send?phone=919737419935"
  },
];
