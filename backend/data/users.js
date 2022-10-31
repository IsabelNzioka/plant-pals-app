import bcrypt from "bcryptjs";

const users = [
  {
    name: "Cherly Atieno",
    email: "admin@plantpals.io",
    isAdmin: true,

    photo: "/Images/Users/user4.jpg",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Lourdes Browning",
    email: "loulou@example.com",

    photo: "/Images/Users/user3.jpg",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sophie Louise Hart",
    email: "sophie@example.com",

    photo: "/Images/Users/user1.jpg",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
