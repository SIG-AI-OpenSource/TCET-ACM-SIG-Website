const sampleEvents = [
  {
    title: "Zephyr 2023",
    smallDescription: "A thrilling tech fest with various events.",
    date: "Nov 1, 2023",
    optionDate: 2023,
    image: {
      fileName: "zephyr2023.jpg",
      url: "https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512",
    },
    largeImage: {
      // Changed from largeimage to largeImage
      fileName: "zephyr2023.jpg",
      url: "https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512",
    },
    detailInfo: [
      {
        title: "Day 1",
        paragraph: "Kickoff with opening ceremonies and keynote speakers.",
        sequence: 1,
      },
      {
        title: "Day 2",
        paragraph: "Workshops and panel discussions on technology trends.",
        sequence: 2,
      },
      {
        title: "Day 3",
        paragraph: "Hackathon and closing ceremonies.",
        sequence: 3,
      },
    ],
  },
  {
    title: "Personal Finance Workshop",
    smallDescription: "Learn about managing your finances effectively.",
    date: "Nov 15, 2023",
    optionDate: 2023,
    image: {
      fileName: "personalFinance.jpg",
      url: "https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512",
    },
    largeImage: {
      // Changed from largeimage to largeImage
      fileName: "personalFinance.jpg",
      url: "https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512",
    },
    detailInfo: [
      {
        title: "Introduction",
        paragraph: "Basics of personal finance and budgeting.",
        sequence: 1,
      },
      {
        title: "Investing",
        paragraph: "How to start investing and make informed decisions.",
        sequence: 2,
      },
      {
        title: "Retirement Planning",
        paragraph: "Strategies for saving and planning for retirement.",
        sequence: 3,
      },
    ],
  },
  {
    title: "LLM Models Session",
    smallDescription:
      "Deep dive into Large Language Models and their applications.",
    date: "Dec 1, 2023",
    optionDate: 2023,
    image: {
      fileName: "llmModels.jpg",
      url: "https://framerusercontent.com/images/YQmkG0dz6HDhDnUO9FMPCwDjs0.jpg?scale-down-to=512",
    },
    largeImage: {
      // Changed from largeimage to largeImage
      fileName: "llmModels.jpg",
      url: "https://framerusercontent.com/images/YQmkG0dz6HDhDnUO9FMPCwDjs0.jpg?scale-down-to=512",
    },
    detailInfo: [
      {
        title: "Overview of LLMs",
        paragraph:
          "Introduction to Large Language Models and their capabilities.",
        sequence: 1,
      },
      {
        title: "Applications",
        paragraph:
          "Exploring various applications of LLMs in different fields.",
        sequence: 2,
      },
      {
        title: "Future Trends",
        paragraph: "Emerging trends and future directions for LLM research.",
        sequence: 3,
      },
    ],
  },
];

module.exports = { data: sampleEvents };
