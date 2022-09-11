export const images = [
  '/../public/img/schlagbohrer.jpg',
  'https://images.unsplash.com/photo-1610212594948-370947a3ba0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  '/../public/img/schlagbohrer.jpg',
];

export const homeItems = [
  {
    tool: 'Schlagbohrer',
    author: 'Privat:er Vermieter:in',
    authorAvatar: '/img/roman.jpg',
    price: '9',
    date: '2022-09-20',
    image: images[0],
  },
  {
    tool: 'Abisolierzange',
    author: 'Privat:er Vermieter:in',
    authorAvatar: '/img/roman.jpg',
    price: '11',
    date: '2022-09-28',
    image: images[1],
  },
  {
    tool: 'Schlagbohrer',
    author: 'Privat:er Vermieter:in',
    authorAvatar: '/img/roman.jpg',
    price: '29',
    date: '2022-10-10',
    image: images[2],
  },
];

export const notifications = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' },
];

// Some fake lists
export const lists = [
  {
    name: 'Groceries',
    id: 'groceries',
    items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];
