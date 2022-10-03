export const images = [
  '/../public/img/schlagbohrer.jpg',
  '/../public/img/abisolierzange.jpg',
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
