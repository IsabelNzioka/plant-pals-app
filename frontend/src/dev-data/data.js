// import airPlant from "../Images/INDOOR/air plant.jpg";
// import peaceLilies1 from "../Images/INDOOR/peace-lilies1.jpg";
// import calathea1 from "../Images/INDOOR/calathea2.jpg";
// import JadePlant1 from "../Images/INDOOR/jade-plant1.jpg";
// import moneyTree1 from "../Images/INDOOR/money-tree1.jpg";
// import philodendron1 from "../Images/INDOOR/philodendron1.jpg";
// import plantPalm from "../Images/INDOOR/plant-palm.jpg";
// import rubberPlant1 from "../Images/INDOOR/rubber-plant1.jpg";

const plants = [
  {
    _id: "1",
    name: "Peace Lily",
    image: [
      "/Images/INDOOR/peace-Lilies1.jpg",
      "/Images/INDOOR/money-tree1.jpg",
      "/Images/INDOOR/air plant.jpg",
    ],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "  The Peace Lily is perennial favourite for all kinds of occasions from celebrations to bereavements, or just for growing for its elegant appearance. The foliage can range from light to very dark green in colour and from from slim to broad in shape, depending on the variety. Although not truly a lily all varieties produce lovely, creamy white flowers that resemble a lily, rising up from the foliage on stiff stems. The leaves of the Peace Lily will droop when its needs water.    petFriendly: true",
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    care: "medium to bright light; water moderately; fertilise occasionally during growing season.",
    price: 89,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },

  {
    _id: "2",
    name: "Air Plant",
    image: ["/Images/INDOOR/air plant.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 120,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },

  {
    _id: "3",
    name: "Air Plant",
    image: ["/Images/INDOOR/calathea1.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 200,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },

  {
    _id: "4",
    name: "Air Plant",
    image: ["/Images/INDOOR/monstera-deliosa2.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 120,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },

  {
    _id: "5",
    name: "Air Plant",
    image: ["/Images/INDOOR/string-of-hearts1.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 100,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },

  {
    _id: "6",
    name: "Air Plant",
    image: ["/Images/INDOOR/jade-plant1.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 300,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },
  {
    _id: " 7",
    name: "Air Plant",
    image: ["/Images/INDOOR/money-tree1.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 140,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },
  {
    _id: "8",
    name: "Air Plant",
    image: ["/Images/INDOOR/yucca.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 100,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },

  {
    _id: "9",
    name: "Air Plant",
    image: ["/Images/INDOOR/zz plant1.jpg"],
    category: "Indoor",
    summary:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    description:
      "Peace lilies or Spathiphyllum are ideal for those who tend to overwater plants. Give it sufficient light, and you'll see their spade-shaped flowers flourish over time. Take note: This plant is toxic to cats and dogs",
    petFriendly: true,
    growthRate: "Upto 2 feet",
    indoorLight: "direct", //light tolerance - low high
    price: 120,
    countInStock: 20,
    numReviews: 100,
    difficulty: "no-fuss",
    size: "sm",
  },
];

// indoorLight - low/artificial partial/bright indirect  direct sunlight
//plant size
// difficulty - no-fuss easy moderate
//size - xs(5"-12") sm(7-18) md(1-2ft) lg(1.5-2.5ft) xl(2-3ft) xxl(3-5ft)
//prtfriendly
//price - under 50$ 50$- 100 100-200 200 $ above

export default plants;
