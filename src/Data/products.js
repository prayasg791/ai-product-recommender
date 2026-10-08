const products = [
    ///Recommended from Chatgpt
  // ==================== PHONES ====================
  {
    id: 1,
    name: "iPhone 15",
    price: 499,
    category: "Phone",
    rating: 4.6,
    features: ["Excellent camera", "OLED display", "Fast performance", "Premium design"]
  },
  {
    id: 2,
    name: "Google Pixel 8",
    price: 449,
    category: "Phone",
    rating: 4.5,
    features: ["Great camera", "Clean Android", "AI features", "OLED display"]
  },
  {
    id: 3,
    name: "Samsung Galaxy S24",
    price: 699,
    category: "Phone",
    rating: 4.7,
    features: ["Excellent display", "Great camera", "AI features", "Fast processor"]
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 649,
    category: "Phone",
    rating: 4.6,
    features: ["Fast charging", "Powerful processor", "Large display", "Good battery"]
  },
  {
    id: 5,
    name: "Nothing Phone 2",
    price: 399,
    category: "Phone",
    rating: 4.4,
    features: ["Unique design", "Clean software", "Good camera", "OLED display"]
  },
  {
    id: 6,
    name: "Samsung Galaxy A55",
    price: 349,
    category: "Phone",
    rating: 4.3,
    features: ["Good battery", "AMOLED display", "Good camera", "Premium build"]
  },
  {
    id: 7,
    name: "OnePlus Nord CE 4",
    price: 299,
    category: "Phone",
    rating: 4.3,
    features: ["Fast charging", "Good performance", "Large battery", "Affordable"]
  },
  {
    id: 8,
    name: "Motorola Edge 50",
    price: 379,
    category: "Phone",
    rating: 4.4,
    features: ["Clean Android", "Curved display", "Good camera", "Lightweight"]
  },

  // ==================== LAPTOPS ====================
  {
    id: 9,
    name: "MacBook Air M3",
    price: 999,
    category: "Laptop",
    rating: 4.8,
    features: ["Excellent battery", "M3 processor", "Lightweight", "Premium build"]
  },
  {
    id: 10,
    name: "Dell XPS 13",
    price: 1099,
    category: "Laptop",
    rating: 4.6,
    features: ["Premium design", "Excellent display", "Portable", "Powerful processor"]
  },
  {
    id: 11,
    name: "HP Pavilion 15",
    price: 649,
    category: "Laptop",
    rating: 4.3,
    features: ["Good performance", "Large display", "Affordable", "Good keyboard"]
  },
  {
    id: 12,
    name: "Lenovo IdeaPad Slim 5",
    price: 599,
    category: "Laptop",
    rating: 4.5,
    features: ["Good battery", "Lightweight", "Good performance", "Affordable"]
  },
  {
    id: 13,
    name: "ASUS ROG Zephyrus G14",
    price: 1399,
    category: "Laptop",
    rating: 4.8,
    features: ["Gaming performance", "Powerful GPU", "Compact", "High refresh display"]
  },
  {
    id: 14,
    name: "Acer Aspire 5",
    price: 549,
    category: "Laptop",
    rating: 4.2,
    features: ["Affordable", "Good performance", "Upgradeable", "Large display"]
  },
  {
    id: 15,
    name: "Microsoft Surface Laptop 5",
    price: 899,
    category: "Laptop",
    rating: 4.4,
    features: ["Premium design", "Touchscreen", "Lightweight", "Good battery"]
  },
  {
    id: 16,
    name: "Lenovo Legion 5",
    price: 1199,
    category: "Laptop",
    rating: 4.7,
    features: ["Gaming performance", "Powerful GPU", "High refresh display", "Good cooling"]
  },

  // ==================== HEADPHONES ====================
  {
    id: 17,
    name: "Sony WH-1000XM5",
    price: 349,
    category: "Headphones",
    rating: 4.8,
    features: ["Excellent noise cancellation", "Premium sound", "Long battery", "Comfortable"]
  },
  {
    id: 18,
    name: "Bose QuietComfort",
    price: 299,
    category: "Headphones",
    rating: 4.7,
    features: ["Excellent noise cancellation", "Comfortable", "Clear audio", "Long battery"]
  },
  {
    id: 19,
    name: "Apple AirPods Max",
    price: 449,
    category: "Headphones",
    rating: 4.6,
    features: ["Premium build", "Excellent sound", "Spatial audio", "Apple integration"]
  },
  {
    id: 20,
    name: "Sennheiser Momentum 4",
    price: 299,
    category: "Headphones",
    rating: 4.7,
    features: ["Excellent sound", "Very long battery", "Comfortable", "Noise cancellation"]
  },
  {
    id: 21,
    name: "JBL Live 770NC",
    price: 149,
    category: "Headphones",
    rating: 4.4,
    features: ["Good bass", "Noise cancellation", "Long battery", "Affordable"]
  },
  {
    id: 22,
    name: "Anker Soundcore Q45",
    price: 129,
    category: "Headphones",
    rating: 4.3,
    features: ["Good noise cancellation", "Long battery", "Affordable", "Comfortable"]
  },

  // ==================== SMARTWATCHES ====================
  {
    id: 23,
    name: "Apple Watch Series 9",
    price: 399,
    category: "Smartwatch",
    rating: 4.7,
    features: ["Health tracking", "Fitness tracking", "Bright display", "Apple integration"]
  },
  {
    id: 24,
    name: "Samsung Galaxy Watch 6",
    price: 299,
    category: "Smartwatch",
    rating: 4.5,
    features: ["Health tracking", "AMOLED display", "Fitness tracking", "Android integration"]
  },
  {
    id: 25,
    name: "Google Pixel Watch 2",
    price: 299,
    category: "Smartwatch",
    rating: 4.4,
    features: ["Fitness tracking", "Health features", "Wear OS", "Clean design"]
  },
  {
    id: 26,
    name: "Garmin Venu 3",
    price: 449,
    category: "Smartwatch",
    rating: 4.7,
    features: ["Advanced fitness tracking", "Long battery", "Health monitoring", "GPS"]
  },
  {
    id: 27,
    name: "Amazfit GTR 4",
    price: 199,
    category: "Smartwatch",
    rating: 4.4,
    features: ["Long battery", "GPS", "Fitness tracking", "Affordable"]
  },

  // ==================== TABLETS ====================
  {
    id: 28,
    name: "iPad Air M2",
    price: 599,
    category: "Tablet",
    rating: 4.8,
    features: ["M2 processor", "Excellent display", "Apple Pencil support", "Lightweight"]
  },
  {
    id: 29,
    name: "Samsung Galaxy Tab S9",
    price: 699,
    category: "Tablet",
    rating: 4.7,
    features: ["AMOLED display", "S Pen support", "Powerful processor", "Premium build"]
  },
  {
    id: 30,
    name: "OnePlus Pad",
    price: 449,
    category: "Tablet",
    rating: 4.5,
    features: ["Large display", "High refresh rate", "Good performance", "Fast charging"]
  },
  {
    id: 31,
    name: "Lenovo Tab P12",
    price: 349,
    category: "Tablet",
    rating: 4.3,
    features: ["Large display", "Good battery", "Stylus support", "Affordable"]
  },
  {
    id: 32,
    name: "Amazon Fire HD 10",
    price: 149,
    category: "Tablet",
    rating: 4.2,
    features: ["Affordable", "Good battery", "Large display", "Entertainment focused"]
  },

  // ==================== CAMERAS ====================
  {
    id: 33,
    name: "Sony Alpha A6400",
    price: 899,
    category: "Camera",
    rating: 4.7,
    features: ["Excellent autofocus", "4K video", "Compact", "Interchangeable lenses"]
  },
  {
    id: 34,
    name: "Canon EOS R50",
    price: 679,
    category: "Camera",
    rating: 4.6,
    features: ["Great autofocus", "4K video", "Compact", "Beginner friendly"]
  },
  {
    id: 35,
    name: "Nikon Z50",
    price: 849,
    category: "Camera",
    rating: 4.6,
    features: ["Excellent image quality", "4K video", "Good ergonomics", "Fast autofocus"]
  },
  {
    id: 36,
    name: "Fujifilm X-S20",
    price: 999,
    category: "Camera",
    rating: 4.8,
    features: ["Excellent image quality", "Great video", "Image stabilization", "Compact"]
  },

  // ==================== GAMING ====================
  {
    id: 37,
    name: "PlayStation 5",
    price: 499,
    category: "Gaming",
    rating: 4.8,
    features: ["4K gaming", "Fast SSD", "Exclusive games", "Ray tracing"]
  },
  {
    id: 38,
    name: "Xbox Series X",
    price: 499,
    category: "Gaming",
    rating: 4.7,
    features: ["4K gaming", "Powerful hardware", "Game Pass", "Fast loading"]
  },
  {
    id: 39,
    name: "Nintendo Switch OLED",
    price: 349,
    category: "Gaming",
    rating: 4.7,
    features: ["Portable gaming", "OLED display", "Exclusive games", "Docked gaming"]
  },
  {
    id: 40,
    name: "Steam Deck OLED",
    price: 549,
    category: "Gaming",
    rating: 4.6,
    features: ["Portable PC gaming", "OLED display", "Large game library", "Powerful hardware"]
  },

  // ==================== MONITORS ====================
  {
    id: 41,
    name: "LG UltraGear 27",
    price: 299,
    category: "Monitor",
    rating: 4.6,
    features: ["144Hz refresh rate", "Gaming focused", "QHD resolution", "Fast response"]
  },
  {
    id: 42,
    name: "Dell UltraSharp 27",
    price: 449,
    category: "Monitor",
    rating: 4.7,
    features: ["4K resolution", "Excellent colors", "Professional use", "USB-C"]
  },
  {
    id: 43,
    name: "Samsung Odyssey G5",
    price: 329,
    category: "Monitor",
    rating: 4.5,
    features: ["165Hz refresh rate", "QHD resolution", "Curved display", "Gaming focused"]
  },
  {
    id: 44,
    name: "ASUS ProArt 27",
    price: 499,
    category: "Monitor",
    rating: 4.7,
    features: ["Excellent colors", "4K resolution", "Content creation", "Color accurate"]
  },

  // ==================== KEYBOARDS ====================
  {
    id: 45,
    name: "Keychron K2",
    price: 99,
    category: "Keyboard",
    rating: 4.6,
    features: ["Mechanical switches", "Wireless", "Compact", "Mac and Windows support"]
  },
  {
    id: 46,
    name: "Logitech MX Keys",
    price: 109,
    category: "Keyboard",
    rating: 4.7,
    features: ["Quiet typing", "Wireless", "Multi-device", "Comfortable"]
  },
  {
    id: 47,
    name: "Razer BlackWidow V4",
    price: 169,
    category: "Keyboard",
    rating: 4.5,
    features: ["Mechanical switches", "RGB lighting", "Gaming focused", "Programmable keys"]
  },

  // ==================== MICE ====================
  {
    id: 48,
    name: "Logitech MX Master 3S",
    price: 99,
    category: "Mouse",
    rating: 4.8,
    features: ["Ergonomic design", "Multi-device", "Precise sensor", "Long battery"]
  },
  {
    id: 49,
    name: "Razer DeathAdder V3",
    price: 69,
    category: "Mouse",
    rating: 4.7,
    features: ["Gaming sensor", "Lightweight", "Ergonomic", "Fast response"]
  },
  {
    id: 50,
    name: "Logitech G502 Hero",
    price: 59,
    category: "Mouse",
    rating: 4.6,
    features: ["Gaming focused", "Programmable buttons", "Adjustable weight", "Precise sensor"]
  },

  // ==================== SPEAKERS ====================
  {
    id: 51,
    name: "JBL Flip 6",
    price: 129,
    category: "Speaker",
    rating: 4.6,
    features: ["Portable", "Water resistant", "Strong bass", "Long battery"]
  },
  {
    id: 52,
    name: "Sonos Era 100",
    price: 249,
    category: "Speaker",
    rating: 4.7,
    features: ["Excellent sound", "Wi-Fi", "Multi-room audio", "Voice control"]
  },
  {
    id: 53,
    name: "Bose SoundLink Flex",
    price: 149,
    category: "Speaker",
    rating: 4.6,
    features: ["Portable", "Water resistant", "Clear sound", "Long battery"]
  },

  // ==================== ACCESSORIES ====================
  {
    id: 54,
    name: "Anker 737 Power Bank",
    price: 99,
    category: "Accessory",
    rating: 4.7,
    features: ["Large capacity", "Fast charging", "USB-C", "Digital display"]
  },
  {
    id: 55,
    name: "Apple MagSafe Charger",
    price: 39,
    category: "Accessory",
    rating: 4.5,
    features: ["Wireless charging", "MagSafe", "Compact", "Apple compatible"]
  },
  {
    id: 56,
    name: "Samsung 45W USB-C Charger",
    price: 49,
    category: "Accessory",
    rating: 4.5,
    features: ["Fast charging", "USB-C", "Compact", "Multiple device support"]
  },
  {
    id: 57,
    name: "Logitech Brio 4K Webcam",
    price: 149,
    category: "Accessory",
    rating: 4.6,
    features: ["4K video", "Auto focus", "Good microphone", "Streaming friendly"]
  },
  {
    id: 58,
    name: "Elgato Stream Deck",
    price: 149,
    category: "Accessory",
    rating: 4.7,
    features: ["Programmable buttons", "Streaming", "Productivity", "Custom shortcuts"]
  },
  {
    id: 59,
    name: "Amazon Echo Dot",
    price: 49,
    category: "Smart Home",
    rating: 4.4,
    features: ["Voice assistant", "Smart home control", "Compact", "Affordable"]
  },
  {
    id: 60,
    name: "Google Nest Mini",
    price: 49,
    category: "Smart Home",
    rating: 4.4,
    features: ["Google Assistant", "Smart home control", "Compact", "Voice control"]
  }
];

export default products;