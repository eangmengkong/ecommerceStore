import product01 from '/src/assets/images/product01.png';
import product02 from '/src/assets/images/product02.png';
import product03 from '/src/assets/images/product03.png';
import product04 from '/src/assets/images/product04.png';
import product05 from '/src/assets/images/product05.png';
// Hotdeals
import hotdeals1 from '/src/assets/hotdealsimg/hotdeals.png';
import hotdeals2 from '/src/assets/hotdealsimg/hotdeals1.png';
import hotdeals3 from '/src/assets/hotdealsimg/hotdeals2.png';
import hotdeals4 from '/src/assets/hotdealsimg/hotdeals3.png';
import hotdeals5 from '/src/assets/hotdealsimg/hotdeals4.png';
import hotdeals6 from '/src/assets/hotdealsimg/hotdeals5.png';
import hotdeals7 from '/src/assets/hotdealsimg/hotdeals6.png';
import hotdeals8 from '/src/assets/hotdealsimg/hotdeals7.png';
import hotdeals9 from '/src/assets/hotdealsimg/hotdeals8.png';
import hotdeals10 from '/src/assets/hotdealsimg/hotdeals9.png';
import hotdeals11 from '/src/assets/hotdealsimg/hotdeals10.png';

// laptop
import laptops1 from '/src/assets/laptopsimg/laptops.png';
import laptops2 from '/src/assets/laptopsimg/laptops1.png';
import laptops3 from '/src/assets/laptopsimg/laptops2.png';
import laptops4 from '/src/assets/laptopsimg/laptops3.png';
import laptops5 from '/src/assets/laptopsimg/laptops4.png';
import laptops6 from '/src/assets/laptopsimg/laptops5.png';
import laptops7 from '/src/assets/laptopsimg/laptops6.png';
import laptops8 from '/src/assets/laptopsimg/laptops7.png';
import laptops9 from '/src/assets/laptopsimg/laptops8.png';
import laptops10 from '/src/assets/laptopsimg/laptops9.png';
import laptops11 from '/src/assets/laptopsimg/laptops10.png';

// iphones
import smartphonesimg1 from '/src/assets/smartphonesimg/phones.png';
import smartphonesimg2 from '/src/assets/smartphonesimg/phones1.png';
import smartphonesimg3 from '/src/assets/smartphonesimg/phones2.png';
import smartphonesimg4 from '/src/assets/smartphonesimg/phones3.png';
import smartphonesimg5 from '/src/assets/smartphonesimg/phones4.png';
import smartphonesimg6 from '/src/assets/smartphonesimg/phones5.png';
import smartphonesimg7 from '/src/assets/smartphonesimg/phones6.png';
import smartphonesimg8 from '/src/assets/smartphonesimg/phones7.png';
import smartphonesimg9 from '/src/assets/smartphonesimg/phones8.png';
import smartphonesimg10 from '/src/assets/smartphonesimg/phones9.png';
import smartphonesimg11 from '/src/assets/smartphonesimg/phones10.png';

// camera
import cameraimg1 from '/src/assets/cameraimg/cameras.png';
import cameraimg2 from '/src/assets/cameraimg/cameras1.png';
import cameraimg3 from '/src/assets/cameraimg/cameras2.png';
import cameraimg4 from '/src/assets/cameraimg/cameras3.png';
import cameraimg5 from '/src/assets/cameraimg/cameras4.png';
import cameraimg6 from '/src/assets/cameraimg/cameras5.png';
import cameraimg7 from '/src/assets/cameraimg/cameras6.png';
import cameraimg8 from '/src/assets/cameraimg/cameras7.png';
import cameraimg9 from '/src/assets/cameraimg/cameras8.png';
import cameraimg10 from '/src/assets/cameraimg/cameras9.png';
import cameraimg11 from '/src/assets/cameraimg/cameras10.png';
// accessories
import accessoriesimg1 from '/src/assets/accessoriesimg/accessories.png';
import accessoriesimg2 from '/src/assets/accessoriesimg/accessories1.png';
import accessoriesimg3 from '/src/assets/accessoriesimg/accessories2.png';
import accessoriesimg4 from '/src/assets/accessoriesimg/accessories3.png';
import accessoriesimg5 from '/src/assets/accessoriesimg/accessories4.png';
import accessoriesimg6 from '/src/assets/accessoriesimg/accessories5.png';
import accessoriesimg7 from '/src/assets/accessoriesimg/accessories6.png';
import accessoriesimg8 from '/src/assets/accessoriesimg/accessories7.png';
import accessoriesimg9 from '/src/assets/accessoriesimg/accessories8.png';
import accessoriesimg10 from '/src/assets/accessoriesimg/accessories9.png';
import accessoriesimg11 from '/src/assets/accessoriesimg/accessories10.png';

// Categories array
const categories = ['bestselling', 'discount', 'news', 'topdeals', 'trending'];

const getRandomCategory = () => {
  return categories[Math.floor(Math.random() * categories.length)];
};
// Hotdeals
export const Hotdeals = [
  {
    id: 1,
    img: hotdeals1,
    cat: getRandomCategory(),
    name: 'Wireless Headphones',
    price: 150.0,
    description:
      'High-quality wireless headphones with noise cancellation and long battery life.',
  },
  {
    id: 2,
    img: hotdeals2,
    cat: getRandomCategory(),
    name: 'Smartwatch',
    price: 250.0,
    description:
      'Smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.',
  },
  {
    id: 3,
    img: hotdeals3,
    cat: getRandomCategory(),
    name: 'Bluetooth Speaker',
    price: 80.0,
    description:
      'Portable Bluetooth speaker with powerful sound and waterproof design.',
  },
  {
    id: 4,
    img: hotdeals4,
    cat: getRandomCategory(),
    name: 'Gaming Mouse',
    price: 60.0,
    description:
      'Ergonomic gaming mouse with customizable RGB lighting and high precision.',
  },
  {
    id: 5,
    img: hotdeals5,
    cat: getRandomCategory(),
    name: 'Portable Charger',
    price: 30.0,
    description:
      'Compact portable charger with fast charging capabilities for your devices.',
  },
  {
    id: 6,
    img: hotdeals6,
    cat: getRandomCategory(),
    name: 'USB-C Hub',
    price: 40.0,
    description:
      'Multi-port USB-C hub for connecting multiple devices to your laptop.',
  },
  {
    id: 7,
    img: hotdeals7,
    cat: getRandomCategory(),
    name: 'Laptop Stand',
    price: 25.0,
    description: 'Adjustable laptop stand for better ergonomics and airflow.',
  },
  {
    id: 8,
    img: hotdeals8,
    cat: getRandomCategory(),
    name: 'Webcam',
    price: 70.0,
    description: 'HD webcam with built-in microphone for clear video calls.',
  },
  {
    id: 9,
    img: hotdeals9,
    cat: getRandomCategory(),
    name: 'Wireless Keyboard',
    price: 45.0,
    description:
      'Sleek wireless keyboard with quiet keys and long battery life.',
  },
  {
    id: 10,
    img: hotdeals10,
    cat: getRandomCategory(),
    name: 'External Hard Drive',
    price: 120.0,
    description:
      'High-capacity external hard drive for secure data storage and backup.',
  },
  {
    id: 11,
    img: hotdeals11,
    cat: getRandomCategory(),
    name: 'Smartphone Case',
    price: 15.0,
    description:
      'Durable smartphone case with shock absorption and stylish design.',
  },
];

// Laptops
export const Laptops = [
  {
    id: 12,
    img: laptops1,
    cat: getRandomCategory(),
    name: 'Gaming Laptop',
    price: 1200.0,
    description:
      'High-performance gaming laptop with powerful graphics and fast processing.',
  },
  {
    id: 13,
    img: laptops2,
    cat: getRandomCategory(),
    name: 'Ultrabook',
    price: 900.0,
    description:
      'Lightweight ultrabook with long battery life and sleek design.',
  },
  {
    id: 14,
    img: laptops3,
    cat: getRandomCategory(),
    name: 'Business Laptop',
    price: 800.0,
    description:
      'Reliable business laptop with security features and productivity tools.',
  },
  {
    id: 15,
    img: laptops4,
    cat: getRandomCategory(),
    name: '2-in-1 Laptop',
    price: 700.0,
    description:
      'Versatile 2-in-1 laptop that can be used as a tablet or laptop.',
  },
  {
    id: 16,
    img: laptops5,
    cat: getRandomCategory(),
    name: 'Chromebook',
    price: 300.0,
    description: 'Affordable Chromebook for web browsing and basic tasks.',
  },
  {
    id: 17,
    img: laptops6,
    cat: getRandomCategory(),
    name: 'MacBook Pro',
    price: 1500.0,
    description:
      'Premium MacBook Pro with Retina display and powerful performance.',
  },
  {
    id: 18,
    img: laptops7,
    cat: getRandomCategory(),
    name: 'Gaming Laptop',
    price: 1300.0,
    description:
      'High-end gaming laptop with advanced cooling and RGB lighting.',
  },
  {
    id: 19,
    img: laptops8,
    cat: getRandomCategory(),
    name: 'Student Laptop',
    price: 400.0,
    description: 'Budget-friendly laptop ideal for students and everyday use.',
  },
  {
    id: 20,
    img: laptops9,
    cat: getRandomCategory(),
    name: 'Workstation Laptop',
    price: 2000.0,
    description:
      'Powerful workstation laptop for demanding tasks and professional use.',
  },
  {
    id: 21,
    img: laptops10,
    cat: getRandomCategory(),
    name: 'Budget Laptop',
    price: 350.0,
    description: 'Affordable laptop for basic computing needs.',
  },
  {
    id: 22,
    img: laptops11,
    cat: getRandomCategory(),
    name: 'Convertible Laptop',
    price: 600.0,
    description: 'Flexible convertible laptop with touchscreen functionality.',
  },
];

// Cameras
export const Cameras = [
  {
    id: 23,
    img: cameraimg1,
    cat: getRandomCategory(),
    name: 'DSLR Camera',
    price: 800.0,
    description:
      'Professional DSLR camera with high resolution and interchangeable lenses.',
  },
  {
    id: 24,
    img: cameraimg2,
    cat: getRandomCategory(),
    name: 'Mirrorless Camera',
    price: 900.0,
    description:
      'Compact mirrorless camera with advanced features and high image quality.',
  },
  {
    id: 25,
    img: cameraimg3,
    cat: getRandomCategory(),
    name: 'Action Camera',
    price: 350.0,
    description:
      'Durable action camera for capturing adventures in high definition.',
  },
  {
    id: 26,
    img: cameraimg4,
    cat: getRandomCategory(),
    name: 'Point and Shoot Camera',
    price: 250.0,
    description: 'Easy-to-use point and shoot camera for everyday photography.',
  },
  {
    id: 27,
    img: cameraimg5,
    cat: getRandomCategory(),
    name: 'Camera Lens',
    price: 200.0,
    description: 'High-quality camera lens for capturing stunning images.',
  },
  {
    id: 28,
    img: cameraimg6,
    cat: getRandomCategory(),
    name: 'Tripod Stand',
    price: 50.0,
    description: 'Sturdy tripod stand for stable photography and videography.',
  },
  {
    id: 29,
    img: cameraimg7,
    cat: getRandomCategory(),
    name: 'Camera Bag',
    price: 40.0,
    description: 'Protective camera bag for safe transport of your gear.',
  },
  {
    id: 30,
    img: cameraimg8,
    cat: getRandomCategory(),
    name: 'Lighting Kit',
    price: 150.0,
    description:
      'Complete lighting kit for professional photography and videography.',
  },
  {
    id: 31,
    img: cameraimg9,
    cat: getRandomCategory(),
    name: 'Camera Filter',
    price: 30.0,
    description: 'Essential camera filter for enhancing your photography.',
  },
  {
    id: 32,
    img: cameraimg10,
    cat: getRandomCategory(),
    name: 'Memory Card',
    price: 20.0,
    description: 'High-speed memory card for storing your photos and videos.',
  },
  {
    id: 33,
    img: cameraimg11,
    cat: getRandomCategory(),
    name: 'Camera Strap',
    price: 15.0,
    description: 'Comfortable camera strap for easy carrying and access.',
  },
];

// Smartphones
export const Smartphones = [
  {
    id: 34,
    img: smartphonesimg1,
    cat: getRandomCategory(),
    name: 'Smartphone Model A',
    price: 700.0,
    description:
      'Latest smartphone with cutting-edge features and sleek design.',
  },
  {
    id: 35,
    img: smartphonesimg2,
    cat: getRandomCategory(),
    name: 'Smartphone Model B',
    price: 800.0,
    description:
      'High-performance smartphone with excellent camera capabilities.',
  },
  {
    id: 36,
    img: smartphonesimg3,
    cat: getRandomCategory(),
    name: 'Smartphone Model C',
    price: 600.0,
    description:
      'Affordable smartphone with great performance and battery life.',
  },
  {
    id: 37,
    img: smartphonesimg4,
    cat: getRandomCategory(),
    name: 'Smartphone Model D',
    price: 750.0,
    description:
      'Stylish smartphone with a vibrant display and powerful processor.',
  },
  {
    id: 38,
    img: smartphonesimg5,
    cat: getRandomCategory(),
    name: 'Smartphone Model E',
    price: 500.0,
    description:
      'Budget-friendly smartphone with essential features for everyday use.',
  },
  {
    id: 39,
    img: smartphonesimg6,
    cat: getRandomCategory(),
    name: 'Smartphone Model F',
    price: 650.0,
    description: 'Smartphone with a dual-camera system for stunning photos.',
  },
  {
    id: 40,
    img: smartphonesimg7,
    cat: getRandomCategory(),
    name: 'Smartphone Model G',
    price: 550.0,
    description:
      'Compact smartphone with a user-friendly interface and solid performance.',
  },
  {
    id: 41,
    img: smartphonesimg8,
    cat: getRandomCategory(),
    name: 'Smartphone Model H',
    price: 700.0,
    description:
      'Feature-rich smartphone with a large display and fast charging.',
  },
  {
    id: 42,
    img: smartphonesimg9,
    cat: getRandomCategory(),
    name: 'Smartphone Model I',
    price: 600.0,
    description: 'Smartphone with a sleek design and powerful battery life.',
  },
  {
    id: 43,
    img: smartphonesimg10,
    cat: getRandomCategory(),
    name: 'Smartphone Model J',
    price: 750.0,
    description:
      'Premium smartphone with advanced features and high-quality build.',
  },
  {
    id: 44,
    img: smartphonesimg11,
    cat: getRandomCategory(),
    name: 'Smartphone Model K',
    price: 800.0,
    description:
      'Top-of-the-line smartphone with the latest technology and performance.',
  },
];

// Accessories
export const Accessories = [
  {
    id: 45,
    img: accessoriesimg1,
    cat: getRandomCategory(),
    name: 'Phone Charger',
    price: 20.0,
    description: 'Fast charging phone charger compatible with most devices.',
  },
  {
    id: 46,
    img: accessoriesimg2,
    cat: getRandomCategory(),
    name: 'Screen Protector',
    price: 10.0,
    description:
      'Durable screen protector to keep your device safe from scratches.',
  },
  {
    id: 47,
    img: accessoriesimg3,
    cat: getRandomCategory(),
    name: 'Wireless Earbuds',
    price: 50.0,
    description: 'Comfortable wireless earbuds with excellent sound quality.',
  },
  {
    id: 48,
    img: accessoriesimg4,
    cat: getRandomCategory(),
    name: 'Car Mount',
    price: 15.0,
    description: 'Convenient car mount for hands-free navigation and calls.',
  },
  {
    id: 49,
    img: accessoriesimg5,
    cat: getRandomCategory(),
    name: 'Phone Stand',
    price: 25.0,
    description: 'Adjustable phone stand for comfortable viewing angles.',
  },
  {
    id: 50,
    img: accessoriesimg6,
    cat: getRandomCategory(),
    name: 'Portable Speaker',
    price: 60.0,
    description:
      'Compact portable speaker with rich sound and long battery life.',
  },
  {
    id: 51,
    img: accessoriesimg7,
    cat: getRandomCategory(),
    name: 'Fitness Tracker',
    price: 100.0,
    description:
      'Smart fitness tracker to monitor your health and activity levels.',
  },
  {
    id: 52,
    img: accessoriesimg8,
    cat: getRandomCategory(),
    name: 'Smartwatch Band',
    price: 30.0,
    description: 'Stylish smartwatch band compatible with various models.',
  },
  {
    id: 53,
    img: accessoriesimg9,
    cat: getRandomCategory(),
    name: 'Camera Lens',
    price: 40.0,
    description: 'High-quality camera lens for capturing stunning images.',
  },
  {
    id: 54,
    img: accessoriesimg10,
    cat: getRandomCategory(),
    name: 'Laptop Sleeve',
    price: 35.0,
    description: 'Protective laptop sleeve for safe transport of your device.',
  },
  {
    id: 55,
    img: accessoriesimg11,
    cat: getRandomCategory(),
    name: 'Gaming Headset',
    price: 80.0,
    description: 'Comfortable gaming headset with immersive sound quality.',
  },
];

export const Events = [
  {
    id: 56,
    img: product01,
    desc: 'New Year Sale - Up to 50% off on selected items!',
  },
  {
    id: 57,
    img: product02,
    desc: 'Summer Clearance - Don’t miss out on great deals!',
  },
  {
    id: 58,
    img: product03,
    desc: 'Black Friday Specials - Limited time offers!',
  },
  {
    id: 59,
    img: product04,
    desc: 'Holiday Discounts - Shop now and save big!',
  },
  {
    id: 60,
    img: product05,
    desc: 'Back to School Sale - Essentials at unbeatable prices!',
  },
];

export const Thinklike = [
  {
    id: 61,
    img: product01,
    desc: 'Explore our latest collection of tech gadgets!',
  },
  {
    id: 62,
    img: product02,
    desc: 'Discover innovative accessories for your devices!',
  },
  {
    id: 63,
    img: product03,
    desc: 'Find the perfect gift for tech enthusiasts!',
  },
  {
    id: 64,
    img: product04,
    desc: 'Upgrade your setup with our premium products!',
  },
  {
    id: 65,
    img: product05,
    desc: 'Join our community of tech lovers and stay updated!',
  },
];
export const ProductSummary = {
  NewProduct: [
    {
      id: 66,
      img: product01,
      name: 'Smart AirPods Pro',
      price: 980.0,
      description: 'High-quality wireless earbuds with noise cancellation.',
      cat: getRandomCategory(),
    },
    {
      id: 67,
      img: product02,
      name: '4K Ultra HD Monitor',
      price: 1200.0,
      description:
        'A stunning 32-inch 4K monitor for professionals and gamers.',
      cat: getRandomCategory(),
    },
    {
      id: 68,
      img: product03,
      name: 'Mechanical Gaming Keyboard',
      price: 150.0,
      description: 'RGB backlit keyboard with high-performance switches.',
      cat: getRandomCategory(),
    },
    {
      id: 69,
      img: product04,
      name: 'Ergonomic Office Chair',
      price: 300.0,
      description: 'A comfortable chair with lumbar support for long hours.',
      cat: getRandomCategory(),
    },
    {
      id: 70,
      img: product05,
      name: 'Portable Bluetooth Speaker',
      price: 85.0,
      description:
        'Compact and powerful speaker with deep bass and waterproof design.',
      cat: getRandomCategory(),
    },
  ],

  TopSell: [
    {
      id: 71,
      img: product01,
      name: 'Wireless Gaming Mouse',
      price: 75.0,
      description:
        'A high-precision mouse with adjustable DPI and ergonomic grip.',
      cat: getRandomCategory(),
    },
    {
      id: 72,
      img: product02,
      name: 'Smartwatch Series X',
      price: 299.0,
      description:
        'A stylish smartwatch with health tracking and notifications.',
      cat: getRandomCategory(),
    },
    {
      id: 73,
      img: product03,
      name: 'Noise Cancelling Headphones',
      price: 250.0,
      description: 'Premium over-ear headphones with immersive sound quality.',
      cat: getRandomCategory(),
    },
    {
      id: 74,
      img: product04,
      name: 'USB-C Hub with HDMI',
      price: 40.0,
      description:
        'A versatile hub with multiple ports for seamless connectivity.',
      cat: getRandomCategory(),
    },
    {
      id: 75,
      img: product05,
      name: 'High-Speed 1TB SSD',
      price: 180.0,
      description:
        'Fast and reliable SSD for improved storage and performance.',
      cat: getRandomCategory(),
    },
  ],
};
export const TopSellingProduct = {
  Selling1: [
    {
      id: 76,
      img: smartphonesimg1,
      name: 'Smart Home Security Camera',
      price: 150.0,
      oldPrice: 200.0,
      description:
        'A 1080p security camera with motion detection and night vision.',
      cat: getRandomCategory(),
    },
    {
      id: 77,
      img: smartphonesimg2,
      name: 'Ultra Slim Laptop',
      price: 1200.0,
      oldPrice: 1400.0,
      description:
        'A lightweight and powerful laptop with an all-day battery life.',
      cat: getRandomCategory(),
    },
    {
      id: 78,
      img: smartphonesimg3,
      name: 'Wireless Charging Pad',
      price: 45.0,
      oldPrice: 60.0,
      description:
        'A fast-charging pad compatible with all Qi-enabled devices.',
      cat: getRandomCategory(),
    },
    {
      id: 79,
      img: smartphonesimg4,
      name: 'Professional DSLR Camera',
      price: 1800.0,
      oldPrice: 2000.0,
      description:
        'A high-resolution DSLR camera for stunning photography and videography.',
      cat: getRandomCategory(),
    },
    {
      id: 80,
      img: smartphonesimg5,
      name: 'Smart LED Desk Lamp',
      price: 70.0,
      oldPrice: 90.0,
      description:
        'A dimmable LED lamp with wireless charging and touch control.',
      cat: getRandomCategory(),
    },
    {
      id: 81,
      img: smartphonesimg6,
      name: 'Gaming Console X',
      price: 500.0,
      oldPrice: 550.0,
      description:
        'A next-gen gaming console with ultra-fast performance and 4K support.',
      cat: getRandomCategory(),
    },
  ],

  Selling2: [
    {
      id: 82,
      img: laptops1,
      name: 'Noise Cancelling Earbuds',
      price: 130.0,
      oldPrice: 160.0,
      description: 'Enjoy immersive sound with active noise cancellation.',
      cat: getRandomCategory(),
    },
    {
      id: 83,
      img: laptops2,
      name: 'Gaming Laptop RTX 3070',
      price: 1500.0,
      oldPrice: 1700.0,
      description: 'High-performance gaming laptop with RTX graphics.',
      cat: getRandomCategory(),
    },
    {
      id: 84,
      img: laptops3,
      name: 'Wireless Mechanical Keyboard',
      price: 100.0,
      oldPrice: 120.0,
      description: 'A wireless keyboard with customizable RGB lighting.',
      cat: getRandomCategory(),
    },
    {
      id: 85,
      img: laptops4,
      name: '4K Action Camera',
      price: 250.0,
      oldPrice: 300.0,
      description:
        'Capture stunning footage with this waterproof action camera.',
      cat: getRandomCategory(),
    },
    {
      id: 86,
      img: laptops5,
      name: 'Smart Fitness Tracker',
      price: 55.0,
      oldPrice: 70.0,
      description:
        'Track your health with a sleek and functional fitness band.',
      cat: getRandomCategory(),
    },
    {
      id: 87,
      img: laptops6,
      name: 'Portable Projector 1080p',
      price: 400.0,
      oldPrice: 450.0,
      description:
        'Turn any wall into a movie screen with this portable projector.',
      cat: getRandomCategory(),
    },
  ],

  Selling3: [
    {
      id: 88,
      img: cameraimg1,
      name: 'Gaming Headset 7.1 Surround',
      price: 90.0,
      oldPrice: 110.0,
      description: 'Immerse yourself in games with 7.1 surround sound.',
      cat: getRandomCategory(),
    },
    {
      id: 89,
      img: cameraimg2,
      name: 'Ultra Wide Curved Monitor',
      price: 600.0,
      oldPrice: 700.0,
      description: 'Experience stunning visuals with a 34-inch curved monitor.',
      cat: getRandomCategory(),
    },
    {
      id: 90,
      img: cameraimg3,
      name: 'Fast Charging Power Bank',
      price: 35.0,
      oldPrice: 50.0,
      description: 'A high-capacity power bank for fast and reliable charging.',
      cat: getRandomCategory(),
    },
    {
      id: 91,
      img: cameraimg4,
      name: 'Smart Home Hub',
      price: 250.0,
      oldPrice: 300.0,
      description: 'Control your smart home devices with ease.',
      cat: getRandomCategory(),
    },
    {
      id: 92,
      img: cameraimg5,
      name: 'Ergonomic Gaming Chair',
      price: 220.0,
      oldPrice: 270.0,
      description: 'A comfortable and stylish chair for long gaming sessions.',
      cat: getRandomCategory(),
    },
    {
      id: 93,
      img: cameraimg6,
      name: 'Bluetooth Soundbar with Subwoofer',
      price: 350.0,
      oldPrice: 400.0,
      description:
        'Enhance your audio experience with deep bass and crisp sound.',
      cat: getRandomCategory(),
    },
  ],
};
