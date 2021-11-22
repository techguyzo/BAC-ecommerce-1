const products = [
  {
    name: "SteelSeries 51136 Siberia 200 Gaming Headset - Purple",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/17/Steel_Series_Siberia_200_Gaming_Headset_-_Purple_.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress",
    description:
      "The Siberia 200 gaming headset combines the comfort and sound of the best-selling Siberia V2 with quality updates, reclaiming its title as the best gaming headset in eSports and PC gaming.",
    price: 338,
    countInStock: 15,
  },
  {
    name: "Wireless Gaming Mouse - Black",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/32/Logitech_G703.jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "F310 Gamepad",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/25/longitech_f310.jpg?fit=fill&bg=0FFF&w=785&h=459&auto=format,compress",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Logitech Driving Force Shifter",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/25/logitech_driving_force_shifter.jpg?fit=fill&bg=0FFF&w=785&h=459&auto=format,compress",
    description:
      "The perfect companion for Logitech G29 and G920 Driving Force Steering Wheels, the Logitech Driving Force Shifter will bring your gaming experience to another level.",
    price: 275,
    countInStock: 25,
  },
  {
    name: "No Heroes Allowed! (PCAS-05034) VR PlayStation 4 Game",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/product/69/No_Heroes_Allowed!_(PCAS-05034)_VR_PlayStation_4_Game.jpg?fit=fill&bg=0FFF&w=785&h=442&auto=format,compress",
    description:
      "Become the God of Destruction in a unique real time strategy game utilizing PS VR. Breed monsters to invade human territories, seen in a diorama-like view through the eyes of the God of Destruction. Together with Badman and Badmella, work towards total world domination",
    price: 119,
    countInStock: 4,
  },
  {
    name: "The Inpatient (PCAS-05040) VR PlayStation 4 Game",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/product/69/The_Inpatient_(PCAS-05040)_VR_PlayStation_4_Game.jpg?fit=fill&bg=0FFF&w=785&h=442&auto=format,compress",
    description:
      "Discover who you are before it’s too late in The Inpatient a PS VR Exclusive set in the Blackwood Sanatorium, over 60 years prior to the 2016 BAFTA award-winning Until Dawn.",
    price: 139,
    countInStock: 10,
  },
  {
    name: "Gran Turismo Sport Collector's Edition (PCAS-05015L) PlayStation 4 Game",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/69/Gran_Turismo_Sport_(PCAS-05015L)_PlayStation_4_Game_Gran_Turismo_Sport.jpg?fit=fill&bg=0FFF&w=785&h=459&auto=format,compress",
    description:
      "The definitive version for all discerning Gran Turismo collectors; not only is it filled with digital content including credits to spend on your dream car collection, PS4 avatar’s and access to all three head start packs (all available cars) it’s also got some exciting physical items. As well as the gold steel book, you can also read up on the history of motoring with the APEX booklet, a guide to all things motoring lovingly prepared by the car fanatics at Polyphony Digital. Display your love of Gran Turismo with pride by placing the 1:43 scale model of the Mercedes-AMG GTS with paint job on your desk, shelf, car dashboard.",
    price: 139,
    countInStock: 10,
  },
  {
    name: "Corsair K68 RGB Mechanical Gaming Keyboard - Cherry MX Red",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/64/CORSAIR_KB_K68_RGB_Mechanical_Gaming_Keyboard_9102010-MX_RED.jpg?fit=fill&bg=0FFF&w=785&h=476&auto=format,compress",
    description:
      "The CORSAIR K68 RGB ultra-durable mechanical keyboard combines vivid per-key RGB backlighting, up to IP32 water and dust resistance and 100% CHERRY MX keyswitches, allowing you to play on, whatever happens.",
    price: 454,
    countInStock: 18,
  },
  {
    name: "ProLink PMG9003 Fulvus Illuminated Gaming Mouse",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/19/ProLink_PMG9003_Fulvus_Illuminated_Gaming_Mouse_.jpg?fit=fill&bg=0FFF&w=785&h=392&auto=format,compress",
    description:
      "The ProLink Fulvus Illuminated Gaming Mouse (PMG9003) is decked out with a matte-black chassis, coupled with 7-color breathing LED lights to provide an aesthetic experience whilst gaming in the dark.",
    price: 55,
    countInStock: 30,
  },
  {
    name: "Promate AirBase-3 Ergonomic Laptop Cooling Pad - Black",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/43/Promate_AirBase_3_Ergonomic_Laptop_Cooling_Pad_Black_01_yj5k-jj.jpg?fit=fill&bg=0FFF&w=785&h=460&auto=format,compress",
    description:
      "AirBase-3 features 4 high-speed fans that generate cool air to keep the laptop running efficiently and prevent overheating. The rubber grips on the surface of the AirBase-3 keep your laptop in place to provide a sturdy workspace. The fan speed can be controlled, to maintain an optimum temperature of your laptop. The fans are working to dissipate heat quickly and work silently. The device plugs directly into the USB port and no additional power is required.",
    price: 130,
    countInStock: 20,
  },
  {
    name: "Cliptec RGY326 Sauris Gaming Mouse Pad - Large",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/19/18_oirm-98.jpg?fit=fill&bg=0FFF&w=785&h=493&auto=format,compress.",
    description:
      "The Cliptec SAURIS Series Gaming Mouse Mats are made of high quality low friction polyester fabric material, providing a precise and consistent glide. All mouse mats feature a specially designed stable and rigid non-slip natural rubber base which prevents the pads from sliding.",
    price: 36,
    countInStock: 40,
  },
  {
    name: "Audio-Technica ATH-PDG1 Gaming Headset - Red",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/34/Audio-Technica_ATH-PDG1_Gaming_Headset_-_Red.jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress",
    description:
      "Designed for the serious gamer who values the natural sound and feel of open-air headphones, the ATH-PDG1 gaming headset delivers powerful, detailed audio and long-lasting comfort. The ATH-PDG1 also comes equipped with a flexible, 6' boom microphone for crystal-clear in-game voice communication with other gamers.",
    price: 650,
    countInStock: 12,
  },
];

module.exports = products;