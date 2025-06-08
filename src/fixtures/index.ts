import { Product } from "../types";

export const products: Product[] = [
  {
    id: "a1b2c3d4-e5f6-7g8h-9i10-jk11lm12no13",
    name: "Apple iPhone 16",
    color: "Teal",
    capacity: "128GB",
    price: 700.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 100,
    about: [
      "This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.",
      "There will be no visible cosmetic imperfections when held at an arm’s length."
    ]
  },
  {
    id: "b2c3d4e5-f6g7-8h9i-10jk-lm11no12pq13",
    name: 'M4 MacBook Air 13"',
    color: "Sky blue",
    capacity: "256GB",
    price: 1000.0,
    image: require("../assets/images/macbook.png"),
    quantity: 74,
    about: [
      "Refurbished and tested for full functionality.",
      "Minor scratches may be present but do not affect performance."
    ]
  },
  {
    id: "c3d4e5f6-g7h8-9i10-jklm-no11pq12rs13",
    name: "Google Pixel 9A",
    color: "Iris",
    capacity: "128GB",
    price: 499.0,
    image: require("../assets/images/pixel.png"),
    quantity: 48,
    about: [
      "Includes original charger and cable.",
      "Battery tested and guaranteed to hold charge well."
    ]
  },
  {
    id: "d4e5f6g7-h8i9-10jkl-mno1-pq12rs13tu14",
    name: "Apple Airpods 4",
    description: "Active Noise Cancellation",
    price: 129.0,
    image: require("../assets/images/airpod.png"),
    quantity: 62,
    about: [
      "Perfect for workouts and travel.",
      "Case may show light signs of wear."
    ]
  },
  {
    id: "e5f6g7h8-i9j10-klmn-op12-qr13st14uv15",
    name: "Apple iPhone 16 Pro",
    color: "Graphite",
    capacity: "256GB",
    price: 899.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 91,
    about: [
      "Face ID and all sensors tested and verified.",
      "Compatible with all major carriers."
    ]
  },
  {
    id: "f6g7h8i9-j10k-lmno-pq12-rs13tu14vw15",
    name: "Apple iPhone 16 Mini",
    color: "Red",
    capacity: "128GB",
    price: 649.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 54,
    about: [
      "Comes with generic charging cable.",
      "Screen is free of cracks and scratches."
    ]
  },
  {
    id: "g7h8i9j10-klmn-op12-qr13-st14uv15wx16",
    name: "Apple iPhone 16 Max",
    color: "Gold",
    capacity: "512GB",
    price: 1099.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 36,
    about: [
      "Unlocked and tested with multiple carriers.",
      "No visible blemishes on screen or body."
    ]
  },
  {
    id: "h8i9j10k-lmno-pq12-rs13-tu14-vw15xy16za17",
    name: 'M4 MacBook Air 15"',
    color: "Midnight",
    capacity: "512GB",
    price: 1299.0,
    image: require("../assets/images/macbook.png"),
    quantity: 69,
    about: [
      "Keyboard and trackpad are fully functional.",
      "Ships in protective packaging."
    ]
  },
  {
    id: "i9j10klmn-op12-qr13-st14-uv15-wxy16za17bc18",
    name: 'M4 MacBook Air 13" Silver',
    color: "Silver",
    capacity: "256GB",
    price: 999.0,
    image: require("../assets/images/macbook.png"),
    quantity: 80,
    about: [
      "Fully functional and reset to factory settings.",
      "Includes compatible USB-C charger."
    ]
  },
  {
    id: "j10klmnop-q12r-st13-uv14-wx15-yza16-bc17de18",
    name: 'M4 MacBook Air 13" Gold',
    color: "Gold",
    capacity: "1TB",
    price: 1499.0,
    image: require("../assets/images/macbook.png"),
    quantity: 44,
    about: [
      "Backlit keyboard and battery are in great condition.",
      "Ideal for students and professionals."
    ]
  },
  {
    id: "k11lmnopq-r12s-tu13-vw14-xy15-zab16-cd17ef18",
    name: "Google Pixel 9A Pro",
    color: "Black",
    capacity: "256GB",
    price: 599.0,
    image: require("../assets/images/pixel.png"),
    quantity: 77,
    about: [
      "AI camera works flawlessly.",
      "Body may have minor scuffs."
    ]
  },
  {
    id: "l12mnopqr-s13t-uv14-wx15-yz16-abc17-def18gh19",
    name: "Google Pixel 9A Lite",
    color: "White",
    capacity: "64GB",
    price: 399.0,
    image: require("../assets/images/pixel.png"),
    quantity: 38,
    about: [
      "Affordable and reliable daily driver.",
      "Clean IMEI and unlocked."
    ]
  },
  {
    id: "m13nopqrs-t14u-vw15-xy16-zab17-cde18-fgh19ij20",
    name: "Google Pixel 9A Ultra",
    color: "Olive Green",
    capacity: "512GB",
    price: 699.0,
    image: require("../assets/images/pixel.png"),
    quantity: 89,
    about: [
      "Large screen with crisp display.",
      "USB-C port tested for fast charging."
    ]
  },
  {
    id: "n14opqrst-u15v-wx16-yz17-abc18-def19-ghi20jk21",
    name: "Apple Airpods 4 Pro",
    description: "Active Noise Cancellation, Spatial Audio",
    price: 199.0,
    image: require("../assets/images/airpod.png"),
    quantity: 61,
    about: [
      "Noise cancellation and audio quality verified.",
      "Comes with new ear tips."
    ]
  },
  {
    id: "o15pqrstu-v16w-xy17-zab18-cde19-fgh20-ijk21lm22",
    name: "Apple Airpods 4 Lite",
    description: "Lightweight design, No ANC",
    price: 99.0,
    image: require("../assets/images/airpod.png"),
    quantity: 46,
    about: [
      "Ideal for casual listening.",
      "Compact and lightweight design."
    ]
  },
  {
    id: "p16qrstuv-w17x-yz18-abc19-def20-ghi21-jkl22mn23",
    name: "Apple iPhone 16 SE",
    color: "Blue",
    capacity: "64GB",
    price: 599.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 29,
    about: [
      "Great entry-level iPhone.",
      "Touch ID tested and functional."
    ]
  },
  {
    id: "q17rstuvw-x18y-zab19-cde20-fgh21-ijk22-lmn23op24",
    name: 'M4 MacBook Air 13" Rose Gold',
    color: "Rose Gold",
    capacity: "256GB",
    price: 1049.0,
    image: require("../assets/images/macbook.png"),
    quantity: 75,
    about: [
      "Stylish and lightweight laptop.",
      "Battery health over 85%."
    ]
  },
  {
    id: "r18stuvwx-y19z-abc20-def21-ghi22-jkl23-mno24pq25",
    name: "Google Pixel 9A Mint",
    color: "Mint",
    capacity: "128GB",
    price: 479.0,
    image: require("../assets/images/pixel.png"),
    quantity: 51,
    about: [
      "Mint color exclusive edition.",
      "Comes with eco-friendly packaging."
    ]
  },
  {
    id: "s19tuvwxy-z20a-bcd21-efg22-hij23-klm24-nop25qr26",
    name: "Apple Airpods 4 Max",
    description: "Over-ear, Active Noise Cancellation",
    price: 249.0,
    image: require("../assets/images/airpod.png"),
    quantity: 59,
    about: [
      "Studio-grade audio quality.",
      "Includes travel case."
    ]
  },
  {
    id: "t20uvwxyz-a21b-cde22-fgh23-ijk24-lmn25-opq26rs27",
    name: "Apple iPhone 16 Ultra",
    color: "Black Titanium",
    capacity: "1TB",
    price: 1399.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 92,
    about: [
      "Top-of-the-line performance and design.",
      "Supports the latest iOS updates."
    ]
  },
  {
    id: "u21vwxyza-b22c-def23-ghi24-jkl25-mno26-pqr27st28",
    name: 'M4 MacBook Air 13" Arctic White',
    color: "Arctic White",
    capacity: "512GB",
    price: 1349.0,
    image: require("../assets/images/macbook.png"),
    quantity: 47,
    about: [
      "Rare color with premium finish.",
      "Pre-installed productivity software."
    ]
  },
  {
    id: "v22wxyzab-c23d-efg24-hij25-klm26-nop27-qr28stu29",
    name: "Google Pixel 9A Sky Edition",
    color: "Sky Blue",
    capacity: "256GB",
    price: 549.0,
    image: require("../assets/images/pixel.png"),
    quantity: 64,
    about: [
      "Sky Edition includes exclusive wallpapers.",
      "Great value for mid-range phone."
    ]
  },
  {
    id: "w23xyzabc-d24e-fgh25-ijk26-lmn27-opq28-rst29uvw30",
    name: "Apple Airpods 4 Studio",
    description: "Professional audio, Spatial Sound",
    price: 279.0,
    image: require("../assets/images/airpod.png"),
    quantity: 53,
    about: [
      "Designed for audio professionals.",
      "Noise isolation tested and excellent."
    ]
  },
  {
    id: "x24yzabcd-e25f-ghi26-jkl27-mno28-pqr29-stu30vwx31",
    name: "Apple iPhone 16C",
    color: "Coral",
    capacity: "128GB",
    price: 679.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 40,
    about: [
      "Colorful and compact design.",
      "Supports fast charging."
    ]
  },
  {
    id: "y25zabcde-f26g-hjk27-lmn28-opq29-rst30-uvw31xyz32",
    name: 'M4 MacBook Air 13" Green',
    color: "Green",
    capacity: "256GB",
    price: 1049.0,
    image: require("../assets/images/macbook.png"),
    quantity: 70,
    about: [
      "Green edition for nature lovers.",
      "Eco-packaged and energy efficient."
    ]
  },
  {
    id: "z26abcdef-g27h-ijk28-mno29-pqr30-stu31-vwx32yzab33",
    name: "Google Pixel 9A Eco",
    color: "Forest",
    capacity: "128GB",
    price: 489.0,
    image: require("../assets/images/pixel.png"),
    quantity: 34,
    about: [
      "Made with recycled materials.",
      "Efficient power usage."
    ]
  },
  {
    id: "a27bcdefg-h28i-jkl29-nop30-qrs31-tuv32-wxy33zabc34",
    name: "Apple Airpods 4 Travel",
    description: "Compact size, Travel case",
    price: 119.0,
    image: require("../assets/images/airpod.png"),
    quantity: 31,
    about: [
      "Perfect for on-the-go users.",
      "Lightweight case included."
    ]
  },
  {
    id: "b28cdefgh-i29j-klm30-opq31-rst32-uvw33-xyz34abcd35",
    name: "Apple iPhone 16 Plus",
    color: "Purple",
    capacity: "256GB",
    price: 949.0,
    image: require("../assets/images/iPhone.png"),
    quantity: 65,
    about: [
      "Large screen for media lovers.",
      "Back camera tested and scratch-free."
    ]
  },
  {
    id: "c29defghi-j30k-lmn31-opr32-stu33-vwx34-yza35bcde36",
    name: 'M4 MacBook Air 13" Storm Gray',
    color: "Storm Gray",
    capacity: "512GB",
    price: 1249.0,
    image: require("../assets/images/macbook.png"),
    quantity: 42,
    about: [
      "Durable finish and high performance.",
      "Includes original charger."
    ]
  },
  {
    id: "d30efghij-k31l-mno32-pqr33-stv34-wxy35-zab36cdef37",
    name: "Google Pixel 9A Carbon",
    color: "Carbon Black",
    capacity: "256GB",
    price: 579.0,
    image: require("../assets/images/pixel.png"),
    quantity: 55,
    about: [
      "Carbon finish for a sleek look.",
      "High-quality camera tested."
    ]
  },
];