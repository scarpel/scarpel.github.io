import PAGES_URL from "../data/pagesURL"

const languages = {
  en: {
    items: [
        {
          title: "home",
          link: PAGES_URL.HOME
        },
        {
          title: "about me",
          link: PAGES_URL.ABOUT
        },
        {
          title: "skills",
          link: PAGES_URL.SKILLS
        },
        {
          title: "jobs",
          link: PAGES_URL.JOBS
        },
        {
          title: "contact",
          link: PAGES_URL.CONTACT
        }
    ]
  },
  br: {
    items: [
      {
        title: "home",
        link: PAGES_URL.HOME
      },
      {
        title: "sobre mim",
        link: PAGES_URL.ABOUT
      },
      {
        title: "habilidades",
        link: PAGES_URL.SKILLS
      },
      {
        title: "trabalhos",
        link: PAGES_URL.JOBS
      },
      {
        title: "contato",
        link: PAGES_URL.CONTACT
      }
    ]
  }
}

export default languages