import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nishant',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Suraj',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Samsung Galaxy A33',
      slug: 'galaxy-a-33',
      category: 'Mobile phones',
      image: '/images/p1.jpg', // 679px × 829px
      price: 320,
      countInStock: 10,
      brand: 'Samsung',
      rating: 4,
      numReviews: 53,
      description:
        'Turn your dull weekends into exciting ones with a range of smart features on the Samsung Galaxy A33 mobile phone.',
    },
    {
      // _id: '2',
      name: 'Samsung Galaxy F23',
      slug: 'galaxy-f-23',
      category: 'Mobile phones',
      image: '/images/p2.jpg',
      price: 215,
      countInStock: 10,
      brand: 'Samsung',
      rating: 4.3,
      numReviews: 4113,
      description:
        'Transform your daily entertainment and gaming sessions into a thrilling experience by bringing home the Samsung Galaxy F23 5G mobile phone.',
    },
    {
      // _id: '3',
      name: 'SAMSUNG Galaxy M52',
      slug: 'galaxy-m-52',
      category: 'Mobile phones',
      image: '/images/p3.jpg',
      price: 270,
      countInStock: 15,
      brand: 'Samsung',
      rating: 4.6,
      numReviews: 969,
      description:
        'Samsung Galaxy M52 5G mobile comes with a 6.70-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20:9. Samsung Galaxy M52 5G is powered by a 1.8GHz octa-core Qualcomm Snapdragon 778G processor.',
    },
    {
      // _id: '4',
      name: 'SAMSUNG Galaxy F13',
      slug: 'galaxy-f-13',
      category: 'Mobile phones',
      image: '/images/p4.jpg',
      price: 150,
      countInStock: 13,
      brand: 'Samsung',
      rating: 4.4,
      numReviews: 745,
      description:
        'Enjoy seamless connectivity and an uninterrupted movie marathon with the impressive Samsung Galaxy F13 that is designed specifically to impress the entertainment fanatics',
    },
    {
      // _id: '5',
      name: 'REDMI Note 11 SE',
      slug: 'note-11-se',
      category: 'Mobile phones',
      image: '/images/p5.jpg',
      price: 175,
      countInStock: 13,
      brand: 'Samsung',
      rating: 4.4,
      numReviews: 740,
      description:
        'Discover new perspectives and take advantage of seamless performance with the Redmi Note 11 SE, which is packed with a number of exceptional features.',
    },
    {
      // _id: '6',
      name: 'REDMI 9 Activ',
      slug: '9-activ',
      category: 'Mobile phones',
      image: '/images/p6.jpg',
      price: 131,
      countInStock: 16,
      brand: 'Redmi',
      rating: 4.2,
      numReviews: 142,
      description:
        'Redmi 9 Activ - More RAM Activ Fun supports your efficiency to multitask with its 6GB and 4GB RAM variants that delivers fast and smooth processing while gaming, online streaming and video calling all at once.',
    },
    {
      // _id: '7',
      name: 'Realme C30',
      slug: 'realme-c-30',
      category: 'Mobile phones',
      image: '/images/p6.jpg',
      price: 86,
      countInStock: 13,
      brand: 'Realme',
      rating: 4.4,
      numReviews: 217,
      description:
        'Discover new perspectives and take advantage of seamless performance with the Realme C30, which is packed with a number of exceptional features.',
    },
    {
      // _id: '8',
      name: 'VIVO T1 44W',
      slug: 'vivo-t-1',
      category: 'Mobile phones',
      image: '/images/p6.jpg',
      price: 200,
      countInStock: 19,
      brand: 'Vivo',
      rating: 4.4,
      numReviews: 746,
      description:
        'Charge your Vivo T1 smartphone in a jiffy, using the 44W FlashCharge feature that lets you recharge your phone up to 50% in about 28 minutes without significant interruptions.',
    },
  ],
};
export default data;
