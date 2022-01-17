export const posts = [
  {
    postID: 1,
    author: {
      userID: 1,
      dname: 'Hoang An',
      avatar:
        'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/53270757_935740063288312_3103097666448392192_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=mBA0JgUNV1oAX91WA_B&_nc_ht=scontent-sin6-2.xx&oh=cc6ad28c6429fe862e80000365ee3479&oe=5FAEBE13',
    },
    createTime: 1602774178572,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        url:
          'https://nypost.com/wp-content/uploads/sites/2/2017/12/nyc-streets.jpg?quality=80&strip=all',
      },
      {
        url: 'https://s1.1zoom.me/big3/401/Houses_Novi_SadSerbia_480450.jpg',
      },
    ],
    liked: false,
    likes: 3,
    places: ['Quan4', 'Saigon'],
    tags: ['DaoPho', 'Muathu'],
    comments: [
      {
        id: 1,
        author: {
          userID: 3,
          dname: 'Hermione Granger',
          avatar:
            'https://bookriot.com/wp-content/uploads/2019/07/hermione-granger-feature-640x340-1280x720.jpg',
        },
        content: 'Lorem ipsum sic dolor amet. Lorem ipsum sic dolor amet...',
        liked: true,
        likes: 2,
        createTime: 1602926456672,
      },
      {
        id: 2,
        author: {
          userID: 2,
          dname: 'Harry Potter',
          avatar:
            'https://img.cinemablend.com/filter:scale/quill/d/d/0/2/7/d/dd027d225273def494eba7e48bd96e0ae008a27f.jpg?mw=600',
        },
        content: 'Lorem ipsum sic dolor amet...',
        liked: false,
        likes: 1,
        createTime: 1602926156672,
      },
      {
        id: 3,
        author: {
          userID: 4,
          dname: 'Ron Weasley',
          avatar:
            'https://static.wixstatic.com/media/d7dbb5_6af9c7860ab64f7183aa955a0383ae90.jpg/v1/fill/w_611,h_458,al_c,q_80,usm_0.66_1.00_0.01/d7dbb5_6af9c7860ab64f7183aa955a0383ae90.webp',
        },
        content: 'Lorem ipsum sic dolor amet...',
        liked: false,
        likes: 0,
        createTime: 1602922456672,
      },
      {
        id: 4,
        author: {
          userID: 3,
          dname: 'Hermione Granger',
          avatar:
            'https://bookriot.com/wp-content/uploads/2019/07/hermione-granger-feature-640x340-1280x720.jpg',
        },
        content:
          'Lorem ipsum sic dolor amet. Lorem ipsum sic dolor amet... Lorem ipsum sic dolor amet. Lorem ipsum sic dolor amet... Lorem ipsum sic dolor amet. Lorem ipsum sic dolor amet... Lorem ipsum sic dolor amet. Lorem ipsum sic dolor amet... Lorem ipsum sic dolor amet. Lorem ipsum sic dolor amet...',
        liked: false,
        likes: 0,
        createTime: 1602926456672,
      },
    ],
  },
  {
    postID: 2,
    author: {
      userID: 2,
      dname: 'Harry Potter',
      avatar:
        'https://img.cinemablend.com/filter:scale/quill/d/d/0/2/7/d/dd027d225273def494eba7e48bd96e0ae008a27f.jpg?mw=600',
    },
    createTime: 1602773078572,
    caption:
      'The idea with React Native Elements is more about component structure than actual design',
    images: [
      {
        url:
          'https://newsedgepoint.net/wp-content/uploads/2020/07/Harry-Potter-How-Does-Laundry-Get-Done-At-Hogwarts.jpg',
      },
    ],
    liked: false,
    likes: 13,
    places: ['Hogwarts'],
    tags: ['school'],
    comments: [],
  },
  {
    postID: 3,
    author: {
      userID: 3,
      dname: 'Hermione Granger',
      avatar:
        'https://bookriot.com/wp-content/uploads/2019/07/hermione-granger-feature-640x340-1280x720.jpg',
    },
    createTime: 1602770178572,
    caption:
      'The idea with React Native Elements is more about component structure than actual design',
    images: [
      {
        url:
          'https://newsedgepoint.net/wp-content/uploads/2020/07/Harry-Potter-How-Does-Laundry-Get-Done-At-Hogwarts.jpg',
      },
    ],
    liked: true,
    likes: 27,
    places: ['Hogwarts'],
    tags: ['school'],
    comments: [],
  },
  {
    postID: 4,
    author: {
      userID: 4,
      dname: 'Ron Weasley',
      avatar:
        'https://static.wixstatic.com/media/d7dbb5_6af9c7860ab64f7183aa955a0383ae90.jpg/v1/fill/w_611,h_458,al_c,q_80,usm_0.66_1.00_0.01/d7dbb5_6af9c7860ab64f7183aa955a0383ae90.webp',
    },
    createTime: 1602074178572,
    caption:
      'The idea with React Native Elements is more about component structure than actual design',
    images: [
      {
        url:
          'https://newsedgepoint.net/wp-content/uploads/2020/07/Harry-Potter-How-Does-Laundry-Get-Done-At-Hogwarts.jpg',
      },
    ],
    liked: false,
    likes: 5,
    places: ['Hogwarts'],
    tags: ['school'],
    comments: [],
  },
];

export const users = [];

export const comments = [
  {
    id: 1,
    author: {
      userID: 3,
      dname: 'Hermione Granger',
      avatar:
        'https://bookriot.com/wp-content/uploads/2019/07/hermione-granger-feature-640x340-1280x720.jpg',
    },
    content: 'Lorem ipsum sic dolor amet...',
    liked: true,
    likes: 10,
  },
  {
    id: 2,
    author: {
      userID: 2,
      dname: 'Harry Potter',
      avatar:
        'https://img.cinemablend.com/filter:scale/quill/d/d/0/2/7/d/dd027d225273def494eba7e48bd96e0ae008a27f.jpg?mw=600',
    },
    content: 'Lorem ipsum sic dolor amet...',
    liked: false,
    likes: 0,
  },
  {
    id: 3,
    author: {
      userID: 4,
      dname: 'Ron Weasley',
      avatar:
        'https://static.wixstatic.com/media/d7dbb5_6af9c7860ab64f7183aa955a0383ae90.jpg/v1/fill/w_611,h_458,al_c,q_80,usm_0.66_1.00_0.01/d7dbb5_6af9c7860ab64f7183aa955a0383ae90.webp',
    },
    content: 'Lorem ipsum sic dolor amet...',
    liked: false,
    likes: 0,
  },
];
