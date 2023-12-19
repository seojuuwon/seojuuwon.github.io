module.exports = {
  title: `seojuuwon.com`,
  description: `juwon 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.seojuuwon.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `서주원`,
    bio: {
      role: `개발자`,
      description: ['도전을 통해 성장하는', '끈기와 열정을 가지고 있는'],
      thumbnail: 'gitImg3.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/seojuuwon`, // `https://github.com/seojuuwon`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `seojwon127@gmail.com`, // `seojwon127@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.12 ~',
        activity: '시작',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/seojuuwon',
        //   demo: 'https://www.seojuuwon.com',
        // },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그',
      //   description:
      //     '공부하면서 정리하고 싶은 내용이나, 프로젝트 진행하면서 생겼던 오류 기록하는 공간',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/seojuuwon',
      //     demo: 'https://www.seojuuwon.com',
      //   },
      // },
    ],
  },
};
